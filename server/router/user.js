const userRouter = require("express").Router();
const { UserController } = require("../controllers");

userRouter.get("/", UserController.getUsers);
userRouter.get("/detail/:id", UserController.detail);

// auth user
userRouter.post("/auth/register", UserController.register);
userRouter.post("/auth/login", UserController.login);

module.exports = userRouter;
