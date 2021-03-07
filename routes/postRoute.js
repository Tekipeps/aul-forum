const postRoute = require('express').Router()
const Post = require("../controllers/Post")
const { authUser } = require('../utils/middlewares')

const post = new Post()
postRoute.get("/", post.getPosts)
postRoute.get('/:id', post.getPost)
postRoute.post("/", authUser, post.createPost)
postRoute.put('/:id', authUser, post.updatePost)
postRoute.delete("/:id", authUser, post.deletePost)

module.exports = postRoute