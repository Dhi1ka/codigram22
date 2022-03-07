const { user } = require("../models");
const { decryptPass } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jwt");
class UserController {
  static async getUsers(req, res) {
    try {
      let users = await user.findAll();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;
      let userDetails = await user.findByPk(id);

      userDetails
        ? res.status(200).json(userDetails)
        : res.status(404).json({
            message: `User with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      const { name, email, password } = req.body;

      let result = await user.create({
        name,
        email,
        password,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      let result = await user.findOne({
        where: {
          email,
        },
      });

      if (result) {
        if (decryptPass(password, result.password)) {
          let token = tokenGenerator(result);
          res.status(200).json({
            access_token: token,
          });
        } else {
          res.status(400).json({
            message: "Password is not correct",
          });
        }
      } else {
        res.status(404).json({
          message: "User not found!",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
