import mongoose from "mongoose";




const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    date: {
        type: String
      
    }
   
})

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
export default Todo;