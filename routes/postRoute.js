const postRoute = require('express').Router()
const Post = require("../controllers/Post")

const post = new Post()
postRoute.get("/", post.getPosts)
postRoute.get('/:id', post.getPost)
postRoute.post("/", post.createPost)
postRoute.put('/:id', post.updatePost)
postRoute.delete("/:id", post.deletePost)

module.exports = postRoute