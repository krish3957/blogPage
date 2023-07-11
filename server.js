const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let titles=["Krish"];
let contents=["He is coding"];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine",'ejs');

let index=0;

app.get("/", function (req, res) {
    res.render("home", {blogTitle:titles , blogContnet:contents, count:index,title:"Home"});
    index++;
})

app.get("/add",function(req,res){
    res.render("add",{title:"Add a new blog"});
})

// app.post("/",function(req,res){
//     console.log(req.body.Remove);
//     const i=req.body.Remove;

//     titles = titles.filter((item,p)=>{
//         return p!==i;
//     })

//     contents = contents.filter((item,p)=>{
//         return p!==i;
//     })
//     index--

// })

app.post("/add",function(req,res){
    const newTitle = req.body.titleInput;
    const newContent = req.body.contentInput;
    titles.push(newTitle);
    contents.push(newContent);
    res.redirect("/")
})

app.get("/about",function(req,res){
    res.render("header",{title:"About Us"});
})

app.get("/contact",function(req,res){
    res.render("contact",{title:"Contact Us"});
})


app.listen(3000, function () {
    console.log('Server started on port 3000');
})