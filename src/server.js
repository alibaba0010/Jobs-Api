import { createServer } from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

const uri = process.env.MONGO_URL;
mongoose.connect(uri);
const server = createServer(app);

function startServer() {
  server.listen(PORT, () => console.log(`Listening to port ${PORT}`));
}

startServer();
