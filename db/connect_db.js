const mongoose=require("mongoose")

// Line 4 for Cloud DB
const database="mongodb+srv://admission123:vikas123@cluster0.b0ibf.mongodb.net/blog?retryWrites=true&w=majority"


const connectDB=()=>{
    // For local DB
    return mongoose.connect(database)


    // For cloud DB
    // return mongoose.connect(database)
    
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDB