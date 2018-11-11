import "./env";
import cors from "cors";
import helmet from "helmet";
import express from "express";
import bodyParser from "body-parser";
import io from "socket.io";
import { apiRouter } from "./routes";

const { PORT = 3000 } = process.env;

const app = express();
const server = require("http").createServer(app);
const socketIO = io(server);

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use((req, res, next) => {
  res.locals["socketio"] = socketIO;
  next();
});
app.use("/athene", apiRouter);

socketIO.on("connection", socket => {
  console.log("Connection Established");

  socket.on("disconnect", () => console.log("user disconnected"));
});

server.listen(PORT, () => console.log("> Athene listening"));

export default app;
