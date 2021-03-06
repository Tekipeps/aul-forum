const { prisma } = require('../utils/config')
class Post {
    async getPost(req, res, next) {
        try {
            const { id } = req.params
            const post = await prisma.post.findUnique({ where: { id: Number(id) } })
            res.json(post)
        } catch (error) {
            next(error)
        }
    }
    async getPosts(_, res, next) {
        try {
            const posts = await prisma.post.findMany()
            res.json(posts)
        } catch (error) {
            next(error)
        }
    }
    async createPost(req, res, next) {
        try {
            const { authorId, title, content } = req.body
            const author = await prisma.post.findUnique({ where: { id: authorId } })
            if (!author) {
                return res.status(400).json({ err: "invalid author" })
            }
            const savedPost = await prisma.post.create({ data: { title, content, authorId } })
            res.json(savedPost)
        } catch (error) {
            next(error)
        }
    }
    async updatePost(req, res, next) {
        try {
            const { id } = req.params
            const data = req.body

            const post = await prisma.post.findUnique({ where: { id } })
            if (!post) {
                return res.status(401).json({ err: "Post not found" })
            }
            const updatedPost = await prisma.post.update({ where: { id: post.id }, data })
            res.json({ updatedPost })
        } catch (error) {
            next(error)
        }
    }
    async deletePost(req, res, next) {
        try {
            const { id } = req.params
            await prisma.post.delete({ where: { id } })
            res.status(204).end()
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Post