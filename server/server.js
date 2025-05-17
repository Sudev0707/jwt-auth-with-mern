import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'

// Uncomment and configure these imports once routes and DB are ready
// import { connectDB } from "./config/db.js";
// import { userRoutes } from "./routes/userRoutes.js";
// import { postRoutes } from "./routes/postRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL if React is running on port 3000
    credentials: true,
  })
);

// API endpoints
app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.use('/api/auth/', authRouter)


// Start the server
app.listen(PORT, () =>
  console.log(`Server started on PORT: http://localhost:${PORT}`)
);



//Sudev@Mongo7
//mongodb+srv://aryasudev7:<db_password>@cluster0.nl3bphe.mongodb.net/