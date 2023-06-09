const { error } = require("console");
const express = require("express");
const { rmSync } = require("fs");
const mongoose = require("mongoose");
const app = express();
const db =
  "mongodb+srv://Alper:g4nAWgCNRuAAqFya@nodeblog.w7eaite.mongodb.net/test";
const { render } = require("ejs");
const blogsRoute = require("./routes/blogsRoute");
const aboutRoute = require("./routes/aboutRoute");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen("3000"), console.log("Successfully connected"))
  .catch((error) => console.log(error));

app.set("view engine", "ejs");
app.set("views", "html");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.use("/about", aboutRoute);

app.use("/blogs", blogsRoute);

app.use((req, res) => {
  res.status(404).render("404", { title: "404: Not found" });
});
