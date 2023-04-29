const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("about", { title: "About" });
});

router.get("/-me", (req, res) => {
  res.redirect("/about");
});

module.exports = router;
