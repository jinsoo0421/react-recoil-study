import * as state from '../../state/todos'
import Todo from './Todo'
import {useRecoilValue} from "recoil";

// To-do 목록

function Main() {

    // 다른 컴포넌트(/state/todos)에 있는 atom를 구독 (현재 필터링된 To-do의 List)
    const todos = useRecoilValue(state.filteredTodos)

    // atom에서 가져온 값 map화
    const Todos = todos.map(todo => <Todo key={todo.id} todo={todo} />)

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                { Todos }
            </ul>
        </section>
    )
}

export default Main