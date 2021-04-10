const { prisma } = require('../utils/config');
class Post {
    async getPost(req, res, next) {
        try {
            const { id } = req.params;
            const post = await prisma.post.findUnique({ where: { id: Number(id) } });
            res.json(post);
        } catch (error) {
            next(error);
        }
    }
    async getPosts(_, res, next) {
        try {
            const posts = await prisma.post.findMany({
                select: {
                    id: true,
                    title: true,
                    content: true,
                    comments: true,
                    author: {
                        select: {
                            id: true,
                            username: true,
                            role: true,
                            email: true,
                            avatar: true
                        }
                    },
                    createdAt: true
                }
            });
            res.json(posts);
        } catch (error) {
            next(error);
        }
    }
    async createPost(req, res, next) {
        try {
            const { title, content } = req.body;
            const { id } = req.user;
            const author = await prisma.user.findUnique({ where: { id } });
            if (!author) return res.sendStatus(401);

            const savedPost = await prisma.post.create({ data: { title, content, authorId: id } });
            res.json(savedPost);
        } catch (error) {
            next(error);
        }
    }
    async updatePost(req, res, next) {
        try {
            const { id: postId } = req.params;
            const data = req.body;
            const { id: userId, role } = req.user;

            const post = await prisma.post.findUnique({ where: { id: postId } });

            if (!post) return res.status(400).json({ err: 'post not found' });
            if (post.authorId !== userId || role != 'ADMIN')
                return res.status(401).json({ err: 'only the author or an admin can update the post' });

            const updatedPost = await prisma.post.update({ where: { id: post.id }, data });

            res.json({ updatedPost });
        } catch (error) {
            next(error);
        }
    }
    async deletePost(req, res, next) {
        try {
            const { id: postId } = req.params;
            const { id: userId, role } = req.user;

            const post = await prisma.post.findUnique({ where: { id: postId } });
            if (post.authorId !== userId || role != 'ADMIN')
                return res.status(401).json({ err: 'only the author or an admin can delete this post' });

            await prisma.post.delete({ where: { id: postId } });
            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Post;
