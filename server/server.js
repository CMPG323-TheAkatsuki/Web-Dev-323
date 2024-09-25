import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import morgan from "morgan";
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about the stack

const port = 8080;
/** HTTP GET Request */
app.get('/', (req,res) => {
    res.status(201).json("Home GET Request");
});
// start the Express server
app.listen(PORT, () => {
  console.log(`Server connected to http://localhost:${PORT}`);
});