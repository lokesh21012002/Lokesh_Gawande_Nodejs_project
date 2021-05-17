const { response } = require("express");
const bodyParser=require("body-parser")
const express =require("express");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post("/",(req,res)=>{
   
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);

    res.send("The answer is " + n1/(n2*n2));

});

app.listen(5000,()=>{
    console.log("Server is started at port 5000")
    

});
