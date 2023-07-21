/*
var name = require('readline-sync')
var value = name.question("enter a number")
var value1 = name.question("enter a number")

if(value>value1){
    console.log("larger " + value)

}else {
    console.log("larger " + value1)
}
*/

/*
const { upperCase } = require("upper-case");

var s = 1
for(var i="*";i.length<=100;s++, i+="*"){
    console.log(s,i)
}
*/

/*
var person = {name:"javad", age:20, place:"calicute"}

person.name="j"
for(clas in person){
    console.log(person[clas]);
}
*/
/*
module.exports.hello=function(){
    console.log("hi");
}
*/
/*
var u=require('upper-case')

var r=u.upperCase('yo')

console.log(r);

*/

/*
var http=require('http')

var fs=require('fs')

var url=require('url')

http.createServer(function (req, res){

    var q=url.parse(req.url,true)

    if(q.pathname==='/'){

        
        fs.readFile('node.html',function (err,data){
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/signup'){
        fs.readFile('contact us.html',function(err,data){
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/signupaction'){
        res.writeHead(200,{'Content-type':'text/html'})
        console.log(q.query.name);
        res.write('<h1>'+q.query.name+'</h1>')
        res.end()
    }else{
        res.writeHead(404,{'Content-type':'text/html'})
        res.write('error')
        res.end()
    }

}).listen(7000,function(){
    console.log('server started');
})
*/
/*
const express=require('express')

const path=require('path');

const app=express()

app.use(function(req,res,next){
    console.log('hello');
    next()
})

app.get('/signu',function(req,res,next){
    res.sendFile(path.join(__dirname,'contact us.html'))
    
})

app.use(function(req,res){
    console.log('hahaha');
})

app.post('/signup',function(req,res){
    res.send('ho')
})

app.get('/about',function(req,res){
    res.send('about')
})

app.listen(2000,function(){
    console.log('server started');
})
*/

