import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todosSlice";
import { useState } from "react";

export default function AddTodo() {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('')

    function getInputValue(e) {
        setInputValue(e.target.value);
    }

    function addNewTodoHandler() {

        if (inputValue.trim().length > 0) {
            dispatch(addTodo({
                id: new Date().getTime(),
                title: inputValue,
                status: false
            }));
            setInputValue('');
        }
    }


    return (
        <div className="flex mt-4">
            <input
                onChange={getInputValue}
                value={inputValue}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900" placeholder="Add Todo" />
            <button onClick={addNewTodoHandler} className="whitespace-nowrap p-2 border-2 rounded text-teal-600 border-teal-600 hover:text-white hover:bg-teal-600 ">Add</button>
        </div>
    )

}