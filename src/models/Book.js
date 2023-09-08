import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageLink: { type: String, required: true },
        link: { type: String, required: true },
        authors: { type: String, required: true },
    },
);

const Books = mongoose.model("Books", BookSchema);
export default Books;