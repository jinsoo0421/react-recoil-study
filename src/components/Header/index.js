import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { createTodo, todos } from '../../state/todos'
import {handleEnterKey} from "../../utils/KeyInputHandler"

// 헤더
// 타이틀 및 To-do 입력창이 존재

export const Header = () => {
    const [value, setValue] = useState(''); // To-do 입력 값을 저장할 useState
    const setTodos = useSetRecoilState(todos) // To-do 추가를 위한 useSetRecoilState
    const text = value.trim();

    // 입력되는 value 바인딩
    const handleInput = e => {
        setValue(e.target.value);
    }

    // 키보드 입력 시 작업
    const handleAddTodo = e => {
        handleEnterKey(e)

        // 공백이면 값 리셋
        if(text === '') {
            setValue('')
            return;
        }

        // 입력된 값 추가
        setValue('')
        setTodos(todos => [
            ...todos,
            createTodo(text),
        ])
    }

    return (
        <header className="header">
            <h1>To-Do List</h1>
            <input className="new-todo" placeholder="해야할 일은?" value={value} onInput={handleInput} onKeyDown={handleAddTodo} />
        </header>
    )
}