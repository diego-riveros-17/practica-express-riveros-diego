import express from "express";
import { pjRouter } from "./src/routes/personajes.routes.js";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/", pjRouter);

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
