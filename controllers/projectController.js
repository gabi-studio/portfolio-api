const ProjectItem = require('../models/projectItem');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectItem.find()
        .sort({ order: 1 })
        .populate('techItems');
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};
