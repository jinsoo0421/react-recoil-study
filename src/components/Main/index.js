import * as state from '../../state/todos'
import Todo from './Todo'
import {useRecoilValue} from "recoil";


function Main() {

    // to-do Atom
    const todos = useRecoilValue(state.filteredTodos)
    const Todos = todos.map(todo => <Todo key={todo.id} todo={todo} />)

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                { Todos }
                {/*{ tests }*/}
            </ul>
        </section>
    )
}

export default Main