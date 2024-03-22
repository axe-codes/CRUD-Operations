import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToMongoDB from "./db_connect/connectToMongoDB.js";
import userRoutes from "./routes/user.route.js";

const app = express();

// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)

app.use("/api", userRoutes);

// app.get("/", (req, res) => {
//   root route "http://localhost:5000/"
//   res.send("Hello world");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT} `);
});
