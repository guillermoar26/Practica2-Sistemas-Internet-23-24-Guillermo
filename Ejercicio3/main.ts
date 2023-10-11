type Libro = {
  id: string,
  title: string,
  author: string,
  pages: number,
  genre: string
};

const coleccionLibros: Libro[] = [];

coleccionLibros.push(
  {
    id: Math.random().toString(16).slice(2),
    title: "El señor de los anillos",
    author: "J.R Tolkien",
    pages: 1633,
    genre: "fantasia"
  }
);

coleccionLibros.push(
  {
    id: Math.random().toString(16).slice(2),
    title: "Harry Potter y el prisionero de Azkaban",
    author: "J.K Rowling",
    pages: 440,
    genre: "magia"
  }
);

coleccionLibros.push(
  {
    id: Math.random().toString(16).slice(2),
    title: "La vuelta al mundo en 80 dias",
    author: "Julio Verne",
    pages: 243,
    genre: "aventuras"
  }
);

export const crearlibro: () => void = (): void => {
  const titulo = prompt("\nTitulo del libro: ");
  const autor = prompt("Autor: ");
  const paginas = prompt("Paginas: ");
  const genero = prompt("Genero: ");

  if (titulo && autor && paginas && genero) {
    const nuevoLibro = {
      id: Math.random().toString(16).slice(2),
      title: titulo,
      author: autor,
      pages: parseInt(paginas),
      genre: genero,
    };

    coleccionLibros.push(nuevoLibro);
    console.log("\nLibro creado correctamente!!");
  } else {
    console.log("\nExisten campos vacios.");
  }
};

export const filtrarlibros: () => void = (): void => {
  const genero: string | null = prompt("\nInserte un genero a filtrar: ");
  if (genero) {
    const librosfiltrados: Libro[] = coleccionLibros.filter((libro: Libro): boolean => libro.genre === genero);
    if (librosfiltrados.length > 0) {
      librosfiltrados.forEach((libro: Libro): void => {
        console.log("\nTitulo: " + libro.title);
        console.log("Autor: " + libro.author);
        console.log("Paginas: " + libro.pages);
        console.log("Genero: " + libro.genre);
      });
    } else {
      console.log("\nNo existen libros en dicha categoría");
    }
  } else {
    console.log("\nExisten campos vacios");
  }
};

export const borrarlibro: () => void = (): void => {
  const libroaborrar: string | null = prompt("\nIntroduce el libro que quieres eliminar: ");
  if (libroaborrar) {
    const found: Libro | undefined = coleccionLibros.find((libro: Libro): boolean => libro.title === libroaborrar);
    if (found) {
      const index: number = coleccionLibros.indexOf(found);
      coleccionLibros.splice(index, 1);
      console.log("\nLibro eliminado con exito!!");
    } else {
      console.log("\nNo se ha encontrado el libro.");
    }
  } else {
    console.log("\nExisten campos vacios");
  }
};

let option = 0;

while (option !== 4) {
  console.log("\n\nBienvenido a la API de libros, ¿Qué desea hacer?\n")
  console.log("1. Crear un libro")
  console.log("2. Filtrar un libro por género")
  console.log("3. Borrar un libro")
  console.log("4. Salir\n")

  const numero: string | null = prompt("Inserte una opción: ");
  option = Number.parseInt(numero !== null ? numero : "0");

  switch (option) {
    case 1:
      crearlibro();
      break;
    case 2:
      filtrarlibros();
      break;
    case 3:
      borrarlibro();
      break;
    case 4:
      console.log("\nSaliendo del programa...");
      break;
    default:
      console.log("\nOpción inválida");
  }
}