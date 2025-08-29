import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { log } from "console";
import { connectDB } from "./lib/db.js";

//express app and HTTP server
const app = express();
const server = http.createServer(app);

// middleware setup
app.use(express.json({limit: "4mb"})); //limit mb of picture
app.use(cors());

app.use("/api/status", 
    (req,res)=> res.send("Server is live!")); //check if backend server is running

//connect to MongoDB
await connectDB()

const PORT = process.env.PORT || 5000;

//start server
server.listen(PORT, 
    ()=> console.log("Server is running on PORT: " + PORT)) // if server is started, print this
