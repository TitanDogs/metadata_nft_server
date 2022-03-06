import apiController from "./src/controllers/apiController.js";
import express from "express";
import cors from "cors";

import 'dotenv/config'

const app = express();

let corsOptions = {
    origin: "*",
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.post("/getTokens", apiController.getTokens);