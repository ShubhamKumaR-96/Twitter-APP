import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";
import apiRoutes from "./routes/apiRoutes.js";
import connectDB from "./config/dbConfig.js";

// Create a new express app/server object
const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use("/api", apiRoutes);

app.get("/ping", (req, res) => {
  return res.json({
    message: "pong",
  });
}); // what to do if someone makes a GET request to /ping

// Define a PORT and attach it to the express app
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost://${PORT}`);
  connectDB();
});
