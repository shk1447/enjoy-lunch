import "reflect-metadata";
import dotenv from "dotenv";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
dotenv.config();

import Router from "./routes";
import Connection from "./data";

const port = parseInt(process.env.PORT || "8080");
const host = process.env.HOST || "localhost";

const app: Application = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);
Connection.then(async (connection) => {
  //await repo.save({ name: "test2" });
  app
    .listen(port, host, () => {
      console.log("express!!!");
    })
    .on("error", (err) => {
      process.exit(1);
    });
});
