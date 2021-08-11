const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
    res.json({ title: "Encacap Initialize Wizard" });
});

module.exports = router;
