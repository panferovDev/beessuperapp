import express from 'express';
import { Post } from '../../db/models';

const apiRouter = express.Router();

apiRouter.route('/')
  .post(async (req, res) => {
    const { title, body } = req.body;
    if (!title && !body) return res.sendStatus(401);
    try {
      const newPost = await Post.create({
        title,
        body,
        user_id: req.session.user.id,
      });

      return res.json({ id: newPost.id, user_id: newPost.user_id });
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  });

apiRouter.route('/:id')
  .delete(async (req, res) => {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user.id,
      },
    });

    if (!post) res.sendStatus(401);
    post.destroy();
    res.sendStatus(200);
  });

apiRouter.route('/posts')
  .get(async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
  });
export default apiRouter;
