const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Getting all
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting One
router.get('/:id', getItem, (req, res) => {
    // The item should be available on req.item if it exists
    if (req.item) {
        res.send(req.item.name);
    } else {
        // If req.item is undefined, return an error
        res.status(404).json({ message: 'Cannot find item' });
    }
});

// Creating one
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        type: req.body.type,
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One
router.delete('/:id', getItem, async (req, res) => {
    try {
        await req.item.deleteOne();
        res.json({ message: "Item Deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getItem(req, res, next) {
    let item;
    try {
        item = await Item.findById(req.params.id);
        if (item == null) {
            return res.status(404).json({ message: 'Cannot find item' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    // Assign the found item to req.item
    req.item = item;
    next();
}

module.exports = router;

