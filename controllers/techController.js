const TechItem = require('../models/techItem');

exports.getAllTechItems = async (req, res) => {
    try {
        const techItems = await TechItem.find();
        res.json(techItems);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tech items' });
    }
};
