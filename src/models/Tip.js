import mongoose from "mongoose";

const TipSchema = new mongoose.Schema(
    {
        id: { type: String},
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
);

const Tips = mongoose.model("Tips", TipSchema);
export default Tips;