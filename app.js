const express = require("express")
const { rmSync } = require("fs")

const app = express()
app.set("view engine", "ejs")
app.set("views", "html")

app.listen("3000")

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