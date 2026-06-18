import { Router } from "express";

import { personajes } from "../data/personajes.js";

export const pjRouter = Router();

pjRouter.get("personajes", (req, res) => {
  const personajes = res.json(personajes);

  console.log("desde routes");
});
