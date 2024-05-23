import * as state from '../../state/todos'
import Todo from './Todo'
import {useRecoilState, useRecoilValue} from "recoil";

// To-do 목록

function Main() {
    // 다른 컴포넌트(/state/todos)에 있는 atom를 구독 (현재 필터링된 To-do의 List)
    const filteredTodos = useRecoilValue(state.filteredTodos);
    // atom에서 가져온 값 map화
    const Todos = filteredTodos.map(todo => <Todo key={todo.id} todo={todo} />)

    // 전체 완료 체크 시 수행 작업
    const [todos, setTodos] = useRecoilState(state.todos);
    const isAllDone = todos.every(todo => todo.done);
    const handleToggle = e => {
        const {checked} = e.target

        setTodos(todos => todos.map(todo => {
            return {
                ...todo,
                done: checked,
            }
        }))
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" checked={isAllDone} onChange={handleToggle} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                { Todos }
            </ul>
        </section>
    )
}

export default Main