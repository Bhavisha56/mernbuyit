import dotenv from "dotenv";
dotenv.config();
import express from "express"
import connectDB from "./utils/db.js";
import authRouter from "./routes/authRouter.js"
import productRouter from "./routes/productRouter.js"
import cartRouter from "./routes/cartRouter.js"
import mainRouter from "./routes/maincardRouter.js"
import contactRouter from "./routes/contactRouter.js"
import orderRouter from "./routes/orderRouter.js"
import cors from "cors"
import cookieParser from "cookie-parser";
// import path from "path";

const PORT=process.env.PORT || 8001
const app=express();
// const _dirname=path.resolve()
app.use(express.json())

app.use(cookieParser())


const corsOption={
   origin:"https://mernbuyit-bugjj.vercel.app",
   methods:"GET,POST,PUT,PATCH,DELETE,HEAD",
   credentials:true
}

app.use('/uploads', express.static('uploads'));
app.use(cors(corsOption));
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/contact', contactRouter);
app.use('/api/main', mainRouter);
app.use('/api/order', orderRouter);


// app.use(express.static(path.join(_dirname,"/client/dist")))
// app.get('*',(req,res)=>{
//    res.sendFile(path.resolve(_dirname,"client","dist","index.html"))
// })

connectDB().then(()=>{
   app.listen(PORT,()=>{
      console.log(`server start at PORT:http://localhost:${PORT}`);
   })
})
