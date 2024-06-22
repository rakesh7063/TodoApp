"use client"
const SingleTodoTable = ({ data, StatusHandle, EditHandle, DeltedHandle }) => {

    return (
        <div>
            <h4>Tilte: {data.title}</h4>
            <p>Decsration: {data.decsration}</p>
            <p>Status: {data.status} </p>
            <button onClick={StatusHandle}>Done</button>
            <button onClick={EditHandle}>Edit</button>
            <button onClick={DeltedHandle} >Delete</button>
        </div>
    )
}
export default SingleTodoTable;