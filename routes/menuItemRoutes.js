const express = require("express");
const router = express.Router();
const MenuItem = require('../models/MenuItem'); // Adjust path to MenuItem model if needed

// POST route to create a new menu item
router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const newMenuItem = new MenuItem(data); // Use a more descriptive variable name
        const response = await newMenuItem.save(); // Save the new menu item to the database
        console.log("Data saved for the menu item");
        res.status(200).json(response);
    } catch (err) {
        console.error("Error saving menu item:", err); // More descriptive error message
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET route to fetch all menu items
router.get("/", async (req, res) => {
    try {
        const data = await MenuItem.find(); // Fetch all menu items
        console.log("Data fetched from menu");
        res.status(200).json(data);
    } catch (err) {
        console.error("Error fetching menu data:", err); // More descriptive error message
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
