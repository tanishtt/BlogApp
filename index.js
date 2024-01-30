const express= require('express');
const path=require('path');


const app=express();
const port= 8080;

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(port, (err)=>{
    if(err){console.log("error : ",err);}
    console.log(`Server started at port : ${port}`);
});