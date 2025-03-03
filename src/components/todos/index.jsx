import { useSelector } from "react-redux";
import AddTodo from "./addTodos";
import TodoItem from "./todoItem";

export default function TodosSection() {

    const todos = useSelector((state) => state.todos.list)


    return (
        <>
            <div className="h-100 w-full flex items-center justify-center font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-gray-700 text-3xl font-bold">Todo List</h1>
                        <AddTodo />
                    </div>

                    {
                        todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
                    }

                </div>
            </div>
        </>
    )

}