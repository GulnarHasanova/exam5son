//1 cors express body-parser mongoose dotenv nodemon

//2 

const express= require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")


//3

dotenv.config()




//4
const {Schema} =mongoose
const newSchema = new Schema({
    img:{type:"String",required:true},
    tittle:{type:"String",required:true},
    info:{type:"String",required:true},
    name:{type:"String",required:true},
    job:{type:"String",required:true},
    price:{type:"Number",required:true}

    
})

const Courses = mongoose.model("courses",newSchema);


//5

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})

//6  get all

app.get("/courses",(req,res)=>{
    Courses.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//7 get id

app.get("/courses/:id",(req,res)=>{
    const {id}= req.params
    Courses.findById(id,(err,doc)=>{
        if(!err){
          if(doc){
            res.send(doc)
          }
          else{
            res.status(404).json({message:"Not Found"})
          }
        }
        else{
            res.status(500).json({message:err})
        }
    })
})

//8 delete

app.delete("/courses/:id",(req,res)=>{
    const {id}= req.params
    Courses.findByIdAndDelete(id,(err)=>{
    if(!err){
        res.send("deleted")
    }
    else{
        res.status(404).json({message:err})
    }
    })
})


//9 post

app.post("/courses",(req,res)=>{
    const course = new Courses({
        img:req.body.img,
    tittle:req.body.tittle,
    info:req.body.info,
    name:req.body.name,
    job:req.body.job,
    price:req.body.price,


    })
    course.save()
    res.send("added")
})



//10 .env 

//11


const url = process.env.url.replace("<password>", process.env.PASSWORD)
const port = process.env.PORT


//12

mongoose.set('strictQuery',true)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("db connected");
        app.listen(port,()=>{
            console.log("server loading");
        })

    }
    else{
    console.log("disconnect");
    }
})



