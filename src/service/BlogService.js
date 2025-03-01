const BlogModel = require('../models/blogModel')

class BlogService {

    async postBlog(title, description, img) {
        const blog = BlogModel.create({ title, description, img });
        return blog;

    }
}

module.exports = new BlogService();