import * as state from '../../state/todos'
import {useRecoilState} from "recoil";

// To-do Count와 To-do 필터

export const Footer = () => {
    // useRecoilState를 통해 다른 컴포넌트(/state/todos)에 있는 atom의 상태를 변경 가능하도록 함 (= useState 전역 ver.)
    const [filterType, setFilterType] = useRecoilState(state.filterType)

    return (
        <footer className="footer">
            <span className="todo-count"><strong>0</strong> item left</span>
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
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}