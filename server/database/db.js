import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URI = `mongodb://adityaraj5200:mongodbpassword@ac-x8xiq8t-shard-00-00.v4m4iti.mongodb.net:27017,ac-x8xiq8t-shard-00-01.v4m4iti.mongodb.net:27017,ac-x8xiq8t-shard-00-02.v4m4iti.mongodb.net:27017/?ssl=true&replicaSet=atlas-lkswav-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error while connecting to the database. ', error.message);
  }
};

export default DBConnection;