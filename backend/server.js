import express from "express"
import cors from "cors"
const app = express()
import connectDB from "./lib/database/db.js"

import router from "./routing/user.roting.js";
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("✅ API is running successfully! You are at the backend home route 🎯");
});

// Routes

app.use("/api/test", router);

const PORT = process.env.PORT || 3000
app.listen(PORT , () => {
   console.log(`Server is running in port ${PORT}`) 
})