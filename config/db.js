const mongoose =require("mongoose")
 const connectToMongo = ()=>{ mongoose.connect("mongodb+srv://sharvesh:Sharvesh123@cluster0.5nnfvuz.mongodb.net/ecommerce?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Database connected successfully!!!");          
})
.catch((e)=>{
    console.log("Database connection Failed, Error is:",e);
})
}



module.exports = connectToMongo;    
    