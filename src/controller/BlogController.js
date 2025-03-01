const BlogService = require('../service/BlogService')

class BlogConrtroller {
    async createBlog(req, res) {
        const { title, description, img } = req.body;

        const blog = await BlogService.postBlog(title, description, img);

        res.json(blog)

    }

}

module.exports = new BlogConrtroller();