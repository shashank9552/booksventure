import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());


dotenv.config();


const PORT = process.env.PORT || 4002; // Use a different port
const URI = process.env.MongoDBURI;

// connect to mongodb
//try{
 // mongoose.connect(URI,{
   // useNewUrlParser: true,
   // useUnifiedTopology: true,
   mongoose.connect("mongodb://localhost:27017/bookStore");
  //};
 console.log("Connected to mongoDB");
//catch(error){
  //console.log("Error: ",error);

//}
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
