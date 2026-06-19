import { personajes } from "../data/personajes.js";

export const obtenerTodosLosPj = (req, res) => {
  res.json(personajes);
};

export const obtenerUnPj = (req, res) => {
  const idPj = Number(req.params.id);

  const pjEncontrado = personajes.find((personaje) => {
    return personaje.id === idPj;
  });

  if (!pjEncontrado) {
    return res.status(404).json({
      message: `Personaje con el id ${idPj} no encontrado`,
    });
  }
  return res.json({
    message: "Personajes encontrado",
    pjEncontrado,
  });
};

export const crearPj = (req, res) => {
  const { nombre, imagen } = req.boby;

  if (name === "") {
    return res.status(400).json({
      message: "El nombre no puede ser vacio",
    });
  }

  const newPj = {
    id: personajes.length + 1,
    nombre,
    imagen,
  };

  personajes.push(newPj);

  res.status(201).json({
    message: "Personaje creado correctamemte",
    newPj,
  });
};

export const editarPj = (req, res) => {
  const idPj = Number(req.params.id);
  const { nombre, imagen } = req.boby;

  const pjEncontrado = personajes.findIndex(
    (personaje) => personaje.id === idPj,
  );

  if (!pjEncontrado === -1) {
    return res.status(404).json({
      message: "Personaje no encontrado",
    });
  }

  personajes[pjEncontrado] = {
    ...personajes[pjEncontrado],
    nombre,
    imagen,
  };

  res.status(200).json({
    message: "Personaje editado correctamente",
  });
};

export const eliminarPj = (req, res) => {
  const idPj = Number(req.params.id);

  const pjEncontrado = personajes.findIndex(
    (personaje) => personaje.id === idPj,
  );

  if (pjEncontrado === -1) {
    return res.status(404).json({
      message: "Personaje no encontrado",
    });
  }

  personajes.splice(pjEncontrado, 1);

  return res.status(200).json({
    message: "Personaje eliminado",
  });
};
