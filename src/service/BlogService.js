const BlogModel = require('../models/blogModel')

class BlogService {

    async postBlog(title, description, img, author) {
        const blog = BlogModel.create({ title, description, img, author });
        return blog;

    }
}

module.exports = new BlogService();