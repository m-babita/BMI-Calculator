const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use("/style.css",express.static(__dirname+"/style.css"));

app.get("/", function(req, res){
    // res.send("<h1>Hello World!</h1>")
    res.sendFile(__dirname+"/index.html");  //gives the name of current directory
    
});

app.get("/about", function(req, res){
    res.send("<h1>Babita Majumdar</h1><p>This is BMI Project</p>")
});

app.post("/",function(req, res){
    // console.log(req.body.num1);
    let n1= Number(req.body.num1);
    let n2= Number(req.body.num2);
    let result =n1/(n2*n2);
    res.send("Your BMI is: "+result);
});

app.listen(3000, function(){
    console.log("Server has started at port 3000");
});