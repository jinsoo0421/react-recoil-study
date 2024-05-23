import { atom, selector } from 'recoil'

let uniqId = 0;

// 신규 To-do 생성
export const createTodo = text => ({
    id: ++uniqId,
    done: false,
    text,
})

// atom을 통해 recoil 상태 정의 (To-do 상태/데이터)
export const todos = atom({
    key: 'todos',
    default: [
        createTodo('react Study'),
        createTodo('recoil Study'),
    ]
})

// atom을 통해 recoil 상태 정의 (필터 상태/데이터)
export const filterType = atom({
    key: 'filterType',
    default: 'all',
})

// selector를 통해 위에서 정의한 2개의 atom을 구독하고 구독한 atom들의 상태를 변경
export const filteredTodos = selector({
    key: 'filteredTodos',
    get: ({ get }) => {
        const items = get(todos)
        const type = get(filterType)

        // 선택된 필터에 따라 보여줄 To-do 조절
        switch (type) {
            // 완료
            case 'do':
                return items.filter(todo => !todo.done)

            // 미완
            case 'done':
                return items.filter(todo => todo.done)

            default:
                return items
        }
    }
})
