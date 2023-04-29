const Blog = require("../models/blog");

const blogIndex = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { blogs: result, title: "All blogs" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const blogDetails = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => console.log(err));
};

const blogCreate = (req, res) => {
  res.render("blogs/create", { title: "Create a new Blog" });
};

const blogDel = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({
        redirect: "/blogs",
      });
    })
    .catch((err) => console.log(err));
};

const blogCreatePost = (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blogIndex,
  blogDetails,
  blogCreate,
  blogDel,
  blogCreatePost,
};
