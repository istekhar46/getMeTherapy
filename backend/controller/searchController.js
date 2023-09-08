import Blog from '../models/blogModel.js';


const searchBlogs = async (req, res) => {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const heading = req.query.heading || "";
    const author = req.query.heading || "";
    // let author = req.query.author || "All";

    // const options = [
    //     'author',
    // ]





    const blogs = await Blog.find(
        {
            "$or": [
                { heading: { $regex: heading, $options: "i" } },
                { author: { $regex: author, $options: "i" } }
            ]
        }
    )
        .skip(page * limit)

    const total = await Blog.countDocuments(
        { heading: { $regex: heading, $options: "i" } },
        { author: { $regex: author, $options: "i" } }
    )

    res.status(200).json({
        total,
        page: page + 1,
        limit,
        blogs,
    });



}

export { searchBlogs };