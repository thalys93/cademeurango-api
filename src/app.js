import express from "express";
import cors from "cors";
import database from "./config/db_config.js";
import routes from "./routes/routes.js";

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', () => console.log('Database Connection Success!'));

const app = express();

app.use(express.json());
app.use(cors());
routes(app);

export default app;