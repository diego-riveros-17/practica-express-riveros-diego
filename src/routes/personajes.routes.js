import { Router } from "express";

import { personajes } from "../data/personajes.js";

export const pjRouter = Router();

//Obtener todos los personajes
pjRouter.get("personajes", obtenerTodosLosPj);

//Obtener un personaje
pjRouter.get("personajes/id:", obtenerPj);

//Insertar un personaje
pjRouter.post("personajes", insetarPj);

//Modificar un personaje
pjRouter.put("personajes/id:", modificarPj);

//Eliminar un personaje
pjRouter.delete("personajes/id:", eliminarPj);
