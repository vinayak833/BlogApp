const path=require("path")
const express=require('express');
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser');
const {checkForAuthenticationCookie}=require("./middlewares/authentication");

const Blog=require("./models/blog");

mongoose.connect("mongodb://127.0.0.1:27017/blog").then(
    ()=>{
        console.log("db connected");
    }
    
).catch(
    (err)=>{
        console.log("error connect to db")
    }
)

const userRoute=require("./routes/user");
const blogRoute=require("./routes/blog");

const app=express();
const PORT=3000;


app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')))


app.get("/",async(req,res)=>{
    const allBlogs=await (await Blog.find({}));
    console.log("HOME ROUTE HIT");
    return res.render("home",{
        user:req.user,
        blogs:allBlogs,
    })
})

app.use("/user",userRoute)
app.use("/blog",blogRoute)
app.listen(PORT,()=>{
    console.log("Server started")
})
