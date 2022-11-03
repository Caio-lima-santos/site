//caregando modulos
const express =require("express")
const handlebars =require('express-handlebars')
const app =express();
const admin =require("./routes/admin")
const path=require("path");
const { default: mongoose } = require("mongoose");

//configuracao

//recebe post
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//handlebars
app.engine("handlebars",handlebars.engine({defaultLayout:'main'}))
app.set("view engine","handlebars")

//public
app.use(express.static(path.join(__dirname,"public")))

//mongose
mongoose.connect("mongodb://localhost/blogapp").then(()=>{
    console.log("conectado")
}).catch((e)=>{console.log("erro:"+ e)})

//rotas
app.get("/",(req,res)=>{
res.send("pagina principal")
})

app.get("/post",(req,res)=>{
    res.send("posts")
    })

app.use('/admin',admin)


//outros
app.listen(8081,()=>{
    console.log("rodando")
})