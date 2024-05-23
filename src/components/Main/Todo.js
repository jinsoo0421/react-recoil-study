import {useSetRecoilState} from "recoil";
import {todos} from "../../state/todos";


const Todo = (props) => {
    const { id, done, text } = props.todo

    // todos의 변경을 가능하게 하는 Setter 생성 (useSetRecoilState 기능)
    const setTodos = useSetRecoilState(todos)

    // To-do 체크 시 상태변경
    const toggleTodo = checked => {
        setTodos(todos => todos.map(todo => {
            return todo.id === id
                ? {...todo, done: checked}
                : todo
        }))
    }

    // To-do 체크 시 onChange 이벤트
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