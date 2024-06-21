"use client"

import { useState } from "react";
import TodoForm from "./todoForm";


const AddTodo = ()=>{
const [todoFromData, setTodoFromData] = useState({
    "title":"",
    "date":""
})


return(
    <TodoForm/>
)
}
export default AddTodo;