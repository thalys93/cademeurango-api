import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        isAdmin: { type: Boolean, required: true },
        isAuthor: { type: Boolean, required: true },
    },
);

const Users = mongoose.model("Users", UserSchema);
export default Users;