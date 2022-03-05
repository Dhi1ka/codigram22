const { post, user } = require("../models");
class PostController {
  static async getAllPosts(req, res) {
    try {
      let posts = await post.findAll({
        order: [["id", "ASC"]],
        include: [user],
      });

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;
      let postDetails = await post.findByPk(id);

      postDetails
        ? res.status(200).json(postDetails)
        : res.status(404).json({
            message: `Post with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      const { title, body, image, userId } = req.body;

      let result = await post.create({
        title,
        body,
        image,
        userId,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { title, body, image } = req.body;

      let result = await post.update(
        {
          title,
          body,
          image,
        },
        { where: { id } },
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Post with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Post with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;

      let result = await post.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Post with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Post with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = PostController;
