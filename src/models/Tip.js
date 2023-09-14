import mongoose from "mongoose";

const TipSchema = new mongoose.Schema(
    {
        id: { type: String},
        title: { type: String, required: true },
        description: { type: String, required: true },
        publishDate: { type: Date, default: Date.now },
    },
);

const Tips = mongoose.model("Tips", TipSchema);
export default Tips;