const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

//? public path
const staticPath = path.join(__dirname,"../public");
const temp_path = path.join(__dirname,"../templates/views");
const part_path = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set("views",temp_path);
hbs.registerPartials(part_path)

app.use(express.static(staticPath));

//? Routing
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});


app.get("*",(req,res)=>{
    res.render("error404",{
        errorMsg: "Oops! page not found."
    });
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})