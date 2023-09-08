import mongoose from  'mongoose';

const blogSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'user'
        },
        heading: {
            type: String,
            require: [true, 'Enter Text Here ']
        },
        author: {
            type: String,
            require: [true, 'Enter Text Here ']
        },
        text: {
            type: String,
            require: [true, 'Enter Text Here ']
        },
    },
    {
        timestamps: true

    }
)

const blog = mongoose.model('Blog', blogSchema);

export default blog;
