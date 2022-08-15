import http = require('http')
import express, { Express } from 'express';
import path from 'path';
import helmet from "helmet";
import { ErrorMiddleware } from "./src/middlewares/errorHandler";
import apiRoutes from "./src/routes";
import constants from './src/config/constants';
import 'express-async-errors'


const app: Express = express();
const port = constants.PORT ;
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", apiRoutes());

app.use("/", (req, res) => {
  res.status(200).sendFile(path.resolve("public", "index.html"));
});

app.use(ErrorMiddleware);


const server = http.createServer(app);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.on("error", (error) => {
  console.log(`Error occured on the server ${error}`);
});



