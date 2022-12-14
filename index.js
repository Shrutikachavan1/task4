const express=require('express');
const mongoose=require('mongoose');
const PORT=5000;
// const productRoute=require('./app')
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const productRoute=require('./app');
app.use('/',productRoute)
// const mainRoutes=require('./app')
// app.use('/',mainRoutes);

app.set("view engine", "ejs");
app.set("views","./views");
//To create Database
const db=mongoose.connect('mongodb://localhost:27017/MVC_crud',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Database Connected");
    }
})

// app.get('/',(req,res)=>{
//     res.send('Welcome to product routes')
// })
app.get('/',(req,res)=>{
    res.render("index",{prods:""})
});

app.listen(PORT,(err)=>{
    if (err) console.log(err)
    else console.log(`The Server is working on ${PORT}`)
})