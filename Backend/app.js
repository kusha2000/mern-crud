const express = require("express");
const app = express();
const cors = require("cors");
const Controller = require("./controller");

app.use(cors());

app.use(express.urlencoded({
    extended:true,
}));

app.use(express.json());

app.get('/users',(req,res)=>{
    Controller.getUsers((req,res,next)=>{
        res.send();
    })
})
app.post('/createuser',(req,res)=>{

    Controller.addUser((req.body,(callback)=>{
        res.send();
    }))
})
app.post('/updateuser',(req,res)=>{

    Controller.updateUser((req.body,(callback)=>{
        res.send(callback);
    }))
})
app.post('/deleteuser',(req,res)=>{

    Controller.deleteUser((req.body,(callback)=>{
        res.send(callback);
    }))
})


module.exports=app;
