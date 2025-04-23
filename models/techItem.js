const mongoose = require('mongoose');

const techItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    imagePath: String
    
});

module.exports = mongoose.model('TechItem', techItemSchema);