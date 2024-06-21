"use client"

import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SingleTodo({ data }) {

    const router = useRouter();

    const DelteHandle = async (id) => {
        console.log(id)
        const res = await fetch(`/api/todo/${id}`, {
            method: "DELETE"
        }
        )
        let result = await res.json();
       if(result.success){
           router.refresh();
          
       }
       toast(result.msg)
    }

    return (
        <div >
            <h4>Title : {data.title}</h4>
            <p> date : {data.date}</p>
            <button onClick={() => DelteHandle(data._id)}> Deleted</button>
           <ToastContainer/>
        </div>
    )

}