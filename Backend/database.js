
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = "mongodb://127.0.0.1:27017";
const dbName = "GreenMart"; 

let db;
const connectToDatabase = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB successfully!");

    db = client.db(dbName); 
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
};

const getDb = () => {
  if (!db) {
    throw new Error("Database not initialized. Call connectToDatabase first.");
  }
  return db;
};

module.exports = { connectToDatabase, getDb };
