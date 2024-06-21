import mongoose from "mongoose";

const ConnectToDb = async ()=>{
const url = "mongodb+srv://rakeshkandar2021:Rakesh24@rakeshdb.dunqmug.mongodb.net/?retryWrites=true&w=majority&appName=RakeshDb";

mongoose
.connect(url)
.then(()=>{
console.log("Db conneted...")
})
.catch((error)=>{
    console.log(error);
})

}

export default ConnectToDb;