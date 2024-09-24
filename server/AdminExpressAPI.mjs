import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

const PORT = process.env.PORT || 3000;

let mockUsers = [
    { id: 1, studentNo: "1", username: "kwanele", displayname: "kwanele", role: "Student" },
    { id: 2, studentNo: "2", username: "jack", displayname: "jack", role: "Lecturer" },
    // Add more users...
];

// All the routes here (GET, POST, PUT, DELETE)

// Start the server
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
