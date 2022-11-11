const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
const User = require("./model/model");
const bodyParse = require('body-parser');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(express.static('public'));
app.use(bodyParse.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/',(req,res)=>{

    res.send("hrllo")    
})

app.post('/next',(req,res)=>{

    if(!req.body.Name && !req.body.clgName && !req.body.RollNo)
    {
        return res.send("All fields not inserted")
    }

    const user = new User({
        Name : req.body.Name,
        clgName : req.body.clgName,
        RollNo : req.body.RollNo
    }).save();
    res.send("Successfully Submitted")


})

mongoose.connect("mongodb+srv://hrushikesh430:bhosale10@nodeexpressprojects.wbvhzuk.mongodb.net/docker-project?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connected suucessfully");
})
.catch(e => console.log("DB Error"))    

app.listen(PORT, ()=>{
    console.log(`App is listning on port ${PORT}`);
})