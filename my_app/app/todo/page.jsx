import SingleTodo from "@/componate/singleTodo";
import TodoForm from "@/componate/todoForm";


const TodoPage = async ()=>{

    const res = await fetch("http://localhost:3000/api/todo",{ cache: 'no-store' })
    let data = await res.json();

let result = data.data
console.log(result.length)
    return(
        <div>
            <h1>Todo Page</h1>
            <TodoForm/>
         <div >
      {result.map((el)=>(
          <div key={el._id} >
              <SingleTodo data={el}/>
          </div>
      ))}
         </div>
        </div>
    )
}

export default TodoPage;