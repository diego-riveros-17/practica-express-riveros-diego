import { personajes } from "../data/personajes.js";

export const obtenerTodosLosPj = (req, res) => {
  res.json(personajes);
};

export const obtenerUnPj = (req, res) => {
  const idPj = Number(req.params.id);
};
