const BlogService = require('../service/BlogService');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class BlogConrtroller {
    async createBlog(req, res) {
        const { title, description, img } = req.body;
        let token = req.header("Authorization");
        if (!token || token.startsWith("Bearer")) {
            token = token.slice(7, token.length)
        }
        let decoded = jwt.verify(token, process.env.SECRET)

        const blog = await BlogService.postBlog(title, description, img, decoded.id);

        res.json(blog)

    }

}

module.exports = new BlogConrtroller();