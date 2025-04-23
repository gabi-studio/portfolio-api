require('dotenv').config();
const mongoose = require('mongoose');

const ProjectItem = require('./models/projectItem');
const TechItem = require('./models/techItem');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected for seeding...'))
  .catch(err => console.error(err));

async function seed() {
  try {
    // Clean existing data
    await ProjectItem.deleteMany();
    await TechItem.deleteMany();

    // Create one TechItem
    const tech = await TechItem.create({
      name: "JavaScript",
      description: "A powerful, versatile programming language used primarily for web development.",
      imagePath: "/images/javascript-logo.png"
    });

    // Create one ProjectItem that references the tech
    await ProjectItem.create({
      name: "Portfolio Website",
      description: "A personal portfolio to showcase projects and skills.",
      imagePath: "/images/portfolio.png",
      mainColour: "#f7df1e",
      githubLink: "https://github.com/example/portfolio",
      codeLink: "https://example.com/portfolio",
      techItems: [tech._id]
    });

    console.log("Seeding complete");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
