import express from 'express';
import { Post } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allPosts = await Post.findAll();
  res.render('Layout', { allPosts });
});

export default router;
