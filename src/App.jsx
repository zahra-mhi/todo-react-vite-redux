

function App() {

  return (
    <>
      <div className="h-100 w-full flex items-center justify-center font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-gray-700 text-3xl font-bold">Todo List</h1>
            <div className="flex mt-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900" placeholder="Add Todo" />
              <button className="whitespace-nowrap p-2 border-2 rounded text-teal-600 border-teal-600 hover:text-white hover:bg-teal-600 ">Add</button>
            </div>
          </div>
          <div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-gray-900">Add another component to Tailwind Components</p>
              <button className="whitespace-nowrap p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600">Done</button>
              <button className="whitespace-nowrap p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">Remove</button>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full line-through text-green-600">Submit Todo App Component to Tailwind Components</p>
              <button className="whitespace-nowrap p-2 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-600 border-gray-600 hover:bg-gray-600">Not Done</button>
              <button className="whitespace-nowrap p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
