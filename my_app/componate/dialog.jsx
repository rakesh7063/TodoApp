"use client"

import { useState } from "react";

const Daiolog = ({ setopenDailogFrom, openDailogFrom }) => {
    const initialData = {
        "title": "",
        "descration": ""
    }
    const [taskform, setTaskForm] = useState(initialData)

    const SubmitHandle = (e) => {
        e.preventDefault();

        console.log(taskform)
        setopenDailogFrom(false);
    }

    if (!openDailogFrom) return null;
    return (
        <>
            <h1>App Todo</h1>
            <form onSubmit={SubmitHandle} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title :</label>
                    <input type="text"
                        id="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your Title"
                        required
                        value={taskform.title}
                        onChange={(e) => setTaskForm({ ...taskform, title: e.target.value })} />
                </div>
                <div className="mb-5">
                    <label for="Decs" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descration</label>
                    <input type="text"
                        id="descration"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Descration"
                        required
                        value={taskform.descration}
                        onChange={(e) => setTaskForm({ ...taskform, descration: e.target.value })} />
                </div>
                <div className="flex gap-6">
                    <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Save Todo
                    </button>
                    <button onClick={() => setopenDailogFrom(false)} className="">close</button>
                </div>
            </form>
        </>
    )

}

export default Daiolog;