var express = require("express")
var app = express()
var users = [];

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mulNumbers = (number1, number2, number3) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var num3 = parseInt(number3)
    var result = num1 * num2 * num3;
    return result;
}

app.get("/multiplyThreeNumbers",(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var number3 = req.query.number3;
    var result = mulNumbers(number1,number2,number3)
    res.json({statusCode: 200, data: result, message:"Success"})
})

app.post("/user/create",(req,res) => {
    let userData = {}
    userData.name = req.body.name;
    userData.age = req.body.age;
    users.push(userData);
    res.json({statusCode: 200, data: userData, message:"Created"})
})

app.get("/user",(req,res) => {
    res.json({statusCode: 200, data: users, message:"Success"})
})

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
})