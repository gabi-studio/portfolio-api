const ProjectItem = require('../models/projectItem');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectItem.find().populate('techItems');
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};
