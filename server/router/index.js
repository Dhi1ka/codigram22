const router = require("express").Router();
const userRouter = require("./user");
const postRouter = require("./post");

router.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to Codigram22",
  });
});

router.use("/api/users", userRouter);
router.use("/api/posts", postRouter);

module.exports = router;
