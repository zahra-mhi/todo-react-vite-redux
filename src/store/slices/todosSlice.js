import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',

    initialState: {
        list: []
    },

    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload)
        },

        deleteTodo: (state, action) => {

            state.list = state.list.filter(todo => todo.id !== action.payload)
        },

        toggleTodo: (state, action) => {

            state.list = state.list.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        status: !todo.status
                    }
                }
                return todo;
            }
            )
        },

    },
})

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;