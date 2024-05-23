import { atom, selector } from 'recoil'

let uniqId = 0;

export const createTodo = text => ({
    id: ++uniqId,
    done: false,
    text,
})

export const todos = atom({
    key: 'todos',
    default: [
        createTodo('react Study'),
        createTodo('recoil Study'),
        createTodo('wow'),
    ]
})

export const filterType = atom({
    key: 'filterType',
    default: 'all',
})

export const filteredTodos = selector({
    key: 'filteredTodos',
    get: ({ get }) => {
        const items = get(todos)
        const type = get(filterType)

        switch (type) {
            case 'do':
                return items.filter(todo => !todo.done)

            case 'done':
                return items.filter(todo => todo.done)

            default:
                return items
        }
    }
})

// Study용 테스트 코드
export const test = atom({
    key: 'tests',
    default: [
        createTodo('우와'),
        createTodo('뽀로로다'),
    ]
})