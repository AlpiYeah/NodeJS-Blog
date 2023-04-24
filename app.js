const express = require("express")
const { rmSync } = require("fs")

const app = express()
app.set("view engine", "ejs")
app.set("views", "html")

app.listen("3000")

app.get("/", (req, res)=> {
    res.sendFile("./html/index.html", {root: __dirname})
})

app.get("/about", (req, res)=> {
    res.sendFile("./html/about.html", {root: __dirname})
})

app.get("/about-me", (req, res)=> {
    res.redirect("/about")
})


app.use((req, res)=> {
    res.status(404).sendFile("./html/404.html",{ root: __dirname})
})