type PokemonType = {
  slot?: number,
  type: {
    name: string,
    url: string,
  }
};

type GenerationType = {
  name: string,
  url?: string,
};

type Pokemon = {
  name: string,
  types: PokemonType[],
  generation?: GenerationType[];
  id: number,
};

const buscartipo: () => void = async (): Promise<void> => {
  try {
    const name: string | null = prompt("\nNombre del tipo: ");
    let type: PokemonType = {
      type: {
        name: "",
        url: ""
      }
    };
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${name}/`
    );

    const data = await response.json();
    type = {
      type: {
        name: data.name,
        url: data.url
      }
    }

    console.log("\nType: " + type.type.name);
    console.log("Generation: " + data.generation.name);
  } catch (error) {
    console.log("\nNo existe el pokemon o esta mal escrito");
  }
};

const buscarpokemon: () => void = async (): Promise<void> => {
  try {
    const name: string | null = prompt("\nNombre del pokemon: ");
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );

    const data = await response.json();
    const pokemon: Pokemon = {
      name: data.name,
      types: data.types,
      id: data.id
    };

    console.log("Types: ");
    pokemon.types.forEach((types: PokemonType): void => {
      // console.log("    " + types.type.name + " " + types.type.url);
      console.log("    " + types.type.name);
    });
    console.log("Id: " + pokemon.id);
  } catch (error) {
    console.log("\nNo existe el pokemon o esta mal escrito");
  }
};

const programa: () => Promise<void> = async (): Promise<void> => {
  let option = 0;

  while (option != 3) {
    console.log("\nBienvenido a la API de Pokemon. ¿Que desea hacer?\n");
    console.log("1. Buscar tipo");
    console.log("2. Buscar pokemon");
    console.log("3. Salir");

    const numero: string | null = prompt("\nInserte una opción: ");
    option = Number.parseInt(numero !== null ? numero : "0");

    switch (option) {
      case 1:
        await buscartipo();
        break;
      case 2:
        await buscarpokemon();
        break;
      case 3:
        console.log("\nSaliendo del programa...");
        break;
      default:
        console.log("\nOpción inválida");
    }
  };
};

programa();