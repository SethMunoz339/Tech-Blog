const express = require('express');
const router = express.Router();
const Blog = reqiure('../models/blog-post.js')
const User = require('../models/user.js')
// Define  routes 
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
router.post('/api/user', async (req, res) => {
  const user = await User.create(req.body);
  return res.json(user);
});
router.get('/api/user/:id', async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  return res.json(user);
});
router.post('/api/blog', async (req, res) => {
  const blog = await Blog.create(req.body);
  return res.json(blog);
});
router.get('/api/blog/:id', async (req, res) => {
  const blog = await Blog.findOne({ where: { id: req.params.id } });
  return res.json(blog);
});
router.put('/api/blog/:id', async (req, res) => {
  const blog = await Blog.findOne({ where: { id: req.body.id } });
  await blog.update(req.body)
await blog.save()
  return res.json(blog);
});
router.delete('/api/blog/:id', async (req, res) => {
  const blog = await Blog.destroy({ where: { id: req.body.id } });
  return res.json(blog);
});

module.exports = router;