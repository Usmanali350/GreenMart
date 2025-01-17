
const { MongoClient } = require('mongodb');


const uri = "mongodb://127.0.0.1:27017";
// const uri = "mongodb://khan:112233//@cluster0-shard-00-00.6ofxk.mongodb.net:27017,cluster0-shard-00-01.6ofxk.mongodb.net:27017,cluster0-shard-00-02.6ofxk.mongodb.net:27017/?replicaSet=atlas-lsqpnr-shard-0&ssl=true&authSource=admin"
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
