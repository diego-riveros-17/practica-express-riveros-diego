import { Router } from "express";

import {
  crearPj,
  editarPj,
  eliminarPj,
  obtenerTodosLosPj,
  obtenerUnPj,
} from "../controllers/personajes.controllers.js";

export const pjRouter = Router();

//Obtener todos los personajes
pjRouter.get("/personajes", obtenerTodosLosPj);

//Obtener un personaje
pjRouter.get("/personajes/:id", obtenerUnPj);

//Insertar un personaje
pjRouter.post("/personajes", crearPj);

//Modificar un personaje
pjRouter.put("/personajes/:id", editarPj);

//Eliminar un personaje
pjRouter.delete("/personajes/:id", eliminarPj);
