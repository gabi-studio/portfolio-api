const mongoose = require('mongoose');

const projectItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    imagePath: String,
    mainColour: String,
    githubLink: String,
    codeLink: String,
    // an array that references techitems model
    techItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TechItem' }]


});

module.exports = mongoose.model('ProjectItem', projectItemSchema);