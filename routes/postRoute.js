const postRoute = require('express').Router();
const Post = require('../controllers/Post');
const { authUser } = require('../middlewares/auth');
const validation = require('../middlewares/validation');

const post = new Post();
postRoute.get('/', post.getPosts);
postRoute.get('/:id', post.getPost);
postRoute.post('/', authUser, validation.createPost, post.createPost); // TODO: Add validation for req.body
postRoute.put('/:id', authUser, post.updatePost); // TODO: Add validation for req.body
postRoute.delete('/:id', authUser, post.deletePost);

module.exports = postRoute;
