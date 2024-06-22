"use client"

import { useRouter } from 'next/navigation';

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
          alert(result.msg)
           router.refresh();
          
       }
     
    }

    return (
        <div >
            <h4>Title : {data.title}</h4>
            <p> date : {data.date}</p>
            <button onClick={() => DelteHandle(data._id)}> Deleted</button>
         
        </div>
    )

}