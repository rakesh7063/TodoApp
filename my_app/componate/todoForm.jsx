"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoForm = () => {
    const initialBlogFormData = {
        title: "",
        date: ""
    };

    const router = useRouter()

    const [todoFromData, setTodoFromData] = useState(initialBlogFormData)

    const SubmitHandle = async (e) => {

        e.preventDefault()
        console.log(todoFromData)
        router.refresh()
        const res = await fetch("/api/todo", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todoFromData)
        })
        let data = await res.json();
        if (data?.success) {
            setTodoFromData(initialBlogFormData)
            toast.success(data.msg)
           
            console.log("working....")
            router.refresh()
        }
        toast(data.msg)
    }



    return (


        <form onSubmit={SubmitHandle}>
            Task :   <input type="text"
                id="title"
                placeholder="Enter Task Here"
                value={todoFromData.title}
                onChange={(e) => setTodoFromData({ ...todoFromData, title: e.target.value })} />
            Date : <input type="date"
                id="date"
                value={todoFromData.date}
                onChange={(e) => setTodoFromData({ ...todoFromData, date: e.target.value })} />
            <button type="submit">Save Todo </button>
            <ToastContainer />
        </form>


    )
}

export default TodoForm;