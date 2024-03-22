import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToMongoDB from "./db_connect/connectToMongoDB.js";
import userRoutes from "./routes/user.route.js";

const app = express();

// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)

app.use("/api", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
