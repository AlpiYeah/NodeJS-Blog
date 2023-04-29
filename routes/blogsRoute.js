const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const blogController = require("../controller/blogController");

router.get("/", blogController.blogIndex);

router.post("/", blogController.blogCreatePost);

router.get("/create", blogController.blogCreate);

router.get("/:id", blogController.blogDetails);

router.delete("/:id", blogController.blogDel);

module.exports = router;
