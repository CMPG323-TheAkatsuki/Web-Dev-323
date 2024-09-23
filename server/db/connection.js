//Import the MongoClient from the mongodb package
import { MongoClient, ServerApiVersion } from "mongodb";

// Replace with your actual MongoDB URI
const uri = "mongodb+srv://Kyle:1114@cluster0.pzujk.mongodb.net/"; 

// Create a new MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect to the database
async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Optional: Ping the database
    await client.db("serverDB").command({ ping: 1 });
    console.log("Pinged your deployment.");

    // Return the database instance
    return client.db("serverDB");
  } catch (error) {
    console.error("Connection failed:", error);
    throw error; // Rethrow the error for further handling
  }
}

// Export the connection function
export default connectToDatabase;