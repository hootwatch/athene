import "./env";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { apiRouter } from "./routes";

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

app.use("/athene", apiRouter);

app.listen(PORT, () => console.log("> Athene listening"));

export default app;
