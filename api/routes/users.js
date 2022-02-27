const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "hey its user route" });
});

module.exports = router;
