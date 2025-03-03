import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../../store/slices/todosSlice";


export default function TodoItem({ todo }) {

    const dispatch = useDispatch();

    const todoDeleteHandler = () => {

        dispatch(deleteTodo(todo.id));

    }

    const todoToggleHandler = () => {

        dispatch(toggleTodo(todo.id))

    }


    return (
        <div>

            <div className="flex mb-4 items-center">
                <p className={`w-full ${todo.status ? 'line-through text-green-600' : 'text-gray-900'}`}>{todo.title}</p>
                {
                    todo.status
                        ? <button onClick={todoToggleHandler} className="whitespace-nowrap p-2 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-600 border-gray-600 hover:bg-gray-600">Not Done</button>
                        : <button onClick={todoToggleHandler} className="whitespace-nowrap p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600">Done</button>
                }

                <button onClick={todoDeleteHandler} className="whitespace-nowrap p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">Remove</button>
            </div>

        </div>
    )

}