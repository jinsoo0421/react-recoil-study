import * as state from '../../state/todos'
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";

// To-do Count와 To-do 필터

export const Footer = () => {
    // useRecoilState를 통해 다른 컴포넌트(/state/todos)에 있는 atom의 상태를 변경 가능하도록 함 (= useState 전역 ver.)
    const [filterType, setFilterType] = useRecoilState(state.filterType)
    // To-do list를 변경하기 위한 Setter 생성
    const setTodos = useSetRecoilState(state.todos);

    // 현재 화면에 출력(필터링)되는 To-do의 Count
    const todos = useRecoilValue(state.todos);
    const todoCount = todos.filter(todo => !todo.done).length

    // 완료된 To-do 전체 삭제
    const handleClearCompleted = () => {
        setTodos(todos => todos.filter(todo => !todo.done))
    }

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todoCount}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className={filterType === 'all' ? 'selected' : ''} href="#/"
                       onClick={() => setFilterType('all')}>All</a>
                </li>
                <li>
                    <a className={filterType === 'do' ? 'selected' : ''} href="#/active"
                       onClick={() => setFilterType('do')}>Active</a>
                </li>
                <li>
                    <a className={filterType === 'done' ? 'selected' : ''} href="#/completed"
                       onClick={() => setFilterType('done')}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={handleClearCompleted}>Clear completed</button>
        </footer>
    )
}