export const main = () => {
    return (
        <section className="main">
            <input id='toggle-all' className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">전체 완료</label>
            <ul className="todo-list">
                <li className="completed">
                    <div className="view">
                        <input className="toggle" type="checkbox" checked/>
                        <label>자바스크립트 타입</label>
                        <button className="destroy"/>
                    </div>
                    <input className="edit" value="Create a TodoMVC template"/>
                </li>
            </ul>
        </section>
    )
}