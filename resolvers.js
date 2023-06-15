const personas = [
  {
    id: "1",
    document: 1057758133,
    name: "Pepito",
    lastName: "Perez",
    phone: "3136484435",
    email: "erivera@transfiriendo.com",
  },
  {
    id: "2",
    document: 800900500,
    name: "Andrea",
    lastName: "Rios",
    phone: "606800700500",
    email: "prueba@transfiriendo.com",
  },
];
const generateNewId = () => {
  const max = 1000;
  const min = 4;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const resolvers = {
  //Querys
  Query: {
    saludo: () => "¡Hola, Este es un proyecto en GrahpQL!",
    obtenerPersonas: () => {
      return personas;
    },
    obtenerPersona: (_, { id }) => {
      // Buscar el objeto según el ID
      const foundObject = personas.find((object) => object.id === id);

      return foundObject;
    },
  },
  //mutations
  Mutation: {
    //insertar persona
    insertarPersona: (_, { input }) => {
      const nuevaPersona = {
        id: generateNewId(),
        document: input.document,
        name: input.name,
        lastName: input.lastName,
        phone: input.phone,
        email: input.email,
      };
      // Agrega la nueva persona al arreglo existente
      personas.push(nuevaPersona);
      // Retorna la nueva persona
      return nuevaPersona;
    },
    // Actualizar persona
    actualizarPersona: (_, { id, input }) => {
      // Buscar la persona por su ID
      const personaIndex = personas.findIndex((persona) => persona.id === id);

      // Verificar si la persona existe
      if (personaIndex === -1) {
        throw new Error("La persona no existe");
      }

      // Actualizar los campos de la persona
      personas[personaIndex].document = input.document;
      personas[personaIndex].name = input.name;
      personas[personaIndex].lastName = input.lastName;
      personas[personaIndex].phone = input.phone;
      personas[personaIndex].email = input.email;

      // Retornar la persona actualizada
      return personas[personaIndex];
    },
    //eliminar persona
    eliminarPersona: (_, { id }) => {
      const personaIndex = personas.findIndex((persona) => persona.id === id);
      if (personaIndex === -1) {
        throw new Error("La persona no existe");
      }
      const personaEliminada = personas.splice(personaIndex, 1)[0];
      return personaEliminada;
    },
  },
};

module.exports = resolvers;
