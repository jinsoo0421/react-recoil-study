import {useSetRecoilState} from "recoil";
import {todos} from "../../state/todos";

// 실제 To-do 각각의 데이터

const Todo = (props) => {
    const { id, done, text } = props.todo

    // todos의 변경을 가능하게 하는 Setter 생성 (to-do list의 Setter)
    const setTodos = useSetRecoilState(todos)

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

    return (
        <li className={done ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={done} onChange={handleToggle} />
                <label>{text}</label>
                <button className="destroy" />
            </div>
            <input className="edit" value="Create a TodoMVC template" />
        </li>
    )
}

export default Todo;