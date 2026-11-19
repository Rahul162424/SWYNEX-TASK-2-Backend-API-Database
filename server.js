const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/products",productRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch((err) => console.log("MongoDB Connection Error:", err));

// Home route
app.get("/", (req, res) => {
    res.send("GroceryGo Backend is Running!");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});