import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const sampleUsers = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    designation: "Frontend Developer",
    task: "Implement new dashboard features",
    status: "In Progress"
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    designation: "Backend Developer",
    task: "Set up API authentication",
    status: "Completed"
  },
  {
    name: "Mike Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    designation: "UI Designer",
    task: "Create new component designs",
    status: "Pending"
  },
  {
    name: "Sarah Wilson",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    designation: "Frontend Developer",
    task: "Fix responsive layout issues",
    status: "In Progress"
  },
  {
    name: "Alex Brown",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    designation: "Backend Developer",
    task: "Optimize database queries",
    status: "Completed"
  },
  {
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    designation: "UI Designer",
    task: "Design new icons set",
    status: "Pending"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Insert new data
    const users = await User.insertMany(sampleUsers);
    console.log('Added sample users:', users.length);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();