"use client"

import Daiolog from "@/componate/dialog";
import SingleTodoTable from "@/componate/TodoTable";
import { useState, useEffect } from "react";

const TodoOverview = () => {
  
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/todo",{
            method:"GET"
        }
        );
        const data = await res.json();
        setTodoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
console.log(todoData)
  return (
    <div>
      <h1>Hi</h1>
      <button onClick={() => setOpenDailogFrom(true)}>Add Todo</button>
   
      {/* {todoData.map((el, ind) => (
        <SingleTodoTable key={el.id} data={el} />
      ))} */}
    </div>
  );
};

export default TodoOverview;
