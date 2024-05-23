import {useSetRecoilState} from "recoil";
import {todos} from "../../state/todos";
import {useEffect, useRef, useState} from "react";
import {handleEnterKey} from "../../utils/KeyInputHandler"

// 실제 To-do 각각의 데이터

const Todo = (props) => {
    const { id, done, text } = props.todo
    const [isEditing, setEditing] = useState(false); // To-do 수정모드 Flag
    const [input, setInput] = useState(text); // 수정할 Text가 들어갈 State
    const editInputEl = useRef(null); // HTML요소에 포커스를 주기위한 useRef(DOM 요소 접근)
    const classNames = []

    // todos의 변경을 가능하게 하는 Setter 생성 (to-do list의 Setter)
    const setTodos = useSetRecoilState(todos)

    // To-do 수정모드가 될 때 마다 해당 To-do로 포커스
    useEffect(() => {
        if(isEditing) {
            editInputEl.current.focus()
        }
    }, [isEditing]);

    // To-do의 완료 상태 변경
    const toggleTodo = checked => {
        // useSetRecoilState를 통해 생성한 Setter인 setTodos로 체크한 To-do의 상태를 변경
        setTodos(todos => todos.map(todo => {
            return todo.id === id
                ? {...todo, done: checked}
                : todo
        }))
    }

    // To-do 완료/미완 체크 시 onChange 이벤트
    const handleToggle = e => {
        const { checked } = e.target
        toggleTodo(checked)
    }

    // To-do 수정 모드로 변경
    const handleEditTextDbClick = () => {
        setEditing(true)
    }

    // 수정모드 일 때 <li> 태그 className
    if(isEditing) {
        classNames.push('editing')
    }

    // 일반모드 일 때 <li> 태그 className
    if(done) {
        classNames.push('completed')
    }

    // classNames 배열의 요소들 합치기(join 함수)
    const className = classNames.join('')

    // 수정모드 데이터 입력
    const handleEditTextInput = e => {
        setInput(e.target.value)
    }

    // 수정모드 저장
    const editTodo = () => {
        const value = input.trim()

        if(value === '') {
            setInput('')
            return
        }

        setTodos(todos => todos.map(todo => {
            return todo.id === id
                ? {...todo, text:value}
                : todo
        }))

        setEditing(false)
    }

    // 엔터키 입력 시 처리
    const handleEditTextEnter = e => {
        handleEnterKey(e);
        editTodo()
    }


    // To-do 삭제
    const handleDestroy = () => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    return (
        <li className={className}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={done} onChange={handleToggle} />
                <label onDoubleClick={handleEditTextDbClick}>{text}</label>
                <button className="destroy" onClick={handleDestroy} />
            </div>
            <input className="edit" value={input} onInput={handleEditTextInput} ref={editInputEl} onKeyDown={handleEditTextEnter} onBlur={editTodo} />
        </li>
    )
}

export default Todo;