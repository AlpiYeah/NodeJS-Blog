const { error } = require("console")
const express = require("express")
const { rmSync } = require("fs")
const mongoose = require("mongoose")
const app = express()
const db = "mongodb+srv://Alper:g4nAWgCNRuAAqFya@nodeblog.w7eaite.mongodb.net/test"

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=> app.listen("3000"), console.log("Successfully connected")).catch((error)=>console.log(error));

app.set("view engine", "ejs")
app.set("views", "html")



app.use(express.static("public"))

app.get("/", (req, res)=> {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render("index", {title: "Home", blogs})
})

app.get("/about", (req, res)=> {
    res.render("about", {title: "About"})
})

app.get("/about-me", (req, res)=> {
    res.redirect("/about")
})

app.get("/blogs/create", (req, res) => {
    res.render("create",  {title: "Create a new Blog"})
})


app.use((req, res)=> {
    res.status(404).render("404",  {title: "404: Not found"})
})
