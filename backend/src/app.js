import dotenv from "dotenv"; 
dotenv.config(); // Load environment variables at the beginning

import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "./config/passportConfig.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

// Resolve correct directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import database configuration
import "./database/dbconfig.js";

// Import routes
import userRouter from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import companyRouter from "./routes/comp.route.js";
import contentRouter from "./routes/content.route.js";
import userNotifyRouter from "./routes/userNotify.route.js";
import performanceRouter from "./routes/perfomance.route.js";
import taskRouter from "./routes/task.route.js";
import empRouter from "./routes/employee.route.js";

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(cookieParser(process.env.SESSION_SECRET || "default_secret"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  })
);

// Initialize Passport
app.use(passport.initialize());

// Debugging: Log environment variables
console.log("✅ DEBUG: MONGO_URI =", process.env.MONGODB_URL);
console.log("✅ DEBUG: PORT =", process.env.PORT);
console.log("✅ DEBUG: SESSION_SECRET =", process.env.SESSION_SECRET);

// Routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", userRouter);
app.use("/api/v1", companyRouter);
app.use("/api/v1", contentRouter);
app.use("/api/v1", userNotifyRouter);
app.use("/api/v1", performanceRouter);
app.use("/api/v1", taskRouter);
app.use("/api/v1", empRouter);

// Debugging: Check if routes are loaded
console.log("✅ API routes initialized");

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Server is running...");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
