import Blog from '../models/blogModel.js';

// @Desc    Auth get public blogs
// @route   GET /api/blogs
// @access  public

const publicBlogs = async (req, res) => {
    const blog = await Blog.find({});
    res.status(200).json({ blog })

}

// @Desc    Auth get public blogs
// @route   GET /api/blogs/userblogs
// @access  private

const getBlogs = async (req, res) => {
    const blog = await Blog.find({ user: req.user.id })
    res.status(200).json({ blog })
}


// @Desc    Auth Post users blogs
// @route   POST /api/blogs/userblogs
// @access  private

const postBlogs = async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('enter text')
    }

    const blog = await Blog.create({
        user: req.user.id,
        heading: req.body.heading,
        author: req.body.author,
        text: req.body.text,
    })
    res.status(200).json({ blog })
}
// @Desc    Blog update the blogs
// @route   PUT /api/blogs/userblogs
// @access  private

const updateBlogs = async (req, res) => {

    const blog = await Blog.findById(req.params.id)
    if (!blog) {
        res.status(400)
        throw new Error('blog not found')
    }
    if (!req.user) {
        res.status(401)
        throw new Error('user not authorized')
    }

    if (blog.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('user not authorized')
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedBlog);
}






// @desc Delete Blogs
// @rout DELETE /api/goals:id
// @access Private

const deleteBlogs = (async (req, res) => {

    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        res.status(400)
        throw new Error("blog not found ")
    }


    // check user

    if (!req.user) {
        res.status(401)
        throw new Error('user not authorized')
    }

    // make sure logged in user matches the goal

    if (blog.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('user not authorized')
    }

    await Blog.findByIdAndRemove(req.params.id)

    res.status(200).json({ id: req.params.id })
})

export { postBlogs, getBlogs, publicBlogs, updateBlogs, deleteBlogs };