import { Libro } from "./Libro";
import { GestorLibro } from './GestorLibro';

let l1 = new Libro(1001, 'Cien años de soledad', 'Gabriel García Márquez', 'Novela', 'Debolsillo', new Date('2003-01-01'));
let l2 = new Libro(1002, 'Fahrenheit 451', 'Ray Bradbury', 'Novela', 'Debolsillo', new Date('2006-01-02'));
let l3 = new Libro(1003, 'El túnel', 'Ernesto Sábato', 'Novela', 'Booket', new Date('2012-01-03'));
let l4 = new Libro(1004, 'Harry Potter', 'J.K. Rowling', 'Novela', 'Debolsillo', new Date('2009-04-01'));
let l5 = new Libro(1005, 'El señor de los anillos', 'J.R.R. Tolkien', 'Novela', 'Minotauro', new Date('2005-08-12'));
let l6 = new Libro(1006, 'El alquimista', 'Paulo Coelho', 'Novela', 'Planeta', new Date('1999-11-22'));
let l7 = new Libro(1007, 'El principito', 'Antoine de Saint-Exupéry', 'Novela', 'Bonsai', new Date('2005-03-10'));
let l8 = new Libro(1008, 'Don Quijote de la mancha', 'Miguel de Cervantes', 'Novela', 'Planeta', new Date('2011-06-21'));
let l9 = new Libro(1009, 'El jardín secreto', 'Hodgson Burnett', 'Novela', 'El ateneo', new Date('2019-07-06'));
let l10 = new Libro(1010, 'El Gaucho Martín Fierro', 'Jose Hernández', 'Poema Narrativo', 'Gradfico', new Date('2007-05-18'));

let libros = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];

let gestor = new GestorLibro();


libros.forEach(libro => gestor.insertar(libro));

console.table(libros);

console.log("------------------------------");
let codigo: number = 0;
let libroX: Libro | null = null;
let mensaje: string = "";

codigo = l4.getCodigo();

libroX = gestor.consultar(codigo);

console.log((libroX == null) ? `EL LIBRO CON CÓDIGO ${codigo} NO EXISTE` : libroX);

mensaje = gestor.eliminar(codigo) ? `EL LIBRO CON CÓDIGO ${codigo} HA SIDO ELIMINADO CORRECTAMENTE.` : `EL LIBRO CON CÓDIGO ${codigo} NO EXISTE.`;
console.log(mensaje);

libroX = gestor.consultar(codigo);
console.log((libroX == null) ? `CÓDIGO ${codigo} NO EXISTE` : libroX);


let libroNuevo: Libro = new Libro(10011, "no especificado", "no especificado", "no especificado", "no especificado", new Date());
codigo = libroNuevo.getCodigo();

mensaje = gestor.insertar(libroNuevo) ? `EL LIBRO CON CÓDIGO ${codigo} FUE INSERTADO EXITOSAMENTE` : 'FALLO LA INSERCION';
console.log(mensaje);

console.log(gestor.consultar(codigo));


// SE ATUALIZAN LOS DATOS DEL LIBRO INSERTADO (codigo 10011)
libroNuevo.setTitulo("Frankenstein");
libroNuevo.setAutor("Mary Shelley");
libroNuevo.setCategoria("Novela Gótica");
libroNuevo.setEditorial("ALMA");
libroNuevo.setFechaPublicacion(new Date("2013-04-11"));


console.table(gestor.getLibros()); // las libros actuales.
libroNuevo.setCodigo(10012);
codigo = libroNuevo.getCodigo();
l1.setCategoria("A-A-A-A-A");
l5.setCategoria("A-A-A-A-A");
console.table(gestor.getLibros()); // los libros luego de la modificacion de datos.

// al cambiar el codigo de libroNuevo no deberia poder encontrarlo por lo que se imprimira en consola el mensaje de EL LIBRO A ACTUALIZAR NO EXISTE
mensaje = gestor.actualizar(libroNuevo) ? `LOS DATOS DEL LIBRO CON CODIGO ${codigo} SE ACTUALIZARON CORRECTAMENTE` : `EL LIBRO A ACTUALIZAR NO EXISTE`;
console.log(mensaje);
console.log(gestor.consultar(libroNuevo.getCodigo()));

libroNuevo.setCodigo(10011);

mensaje = gestor.actualizar(libroNuevo) ? `LOS DATOS DEL LIBRO CON CODIGO ${libroNuevo.getCodigo()} SE ACTUALIZARON CORRECTAMENTE` : `EL LIBRO A ACTUALIZAR NO EXISTE`;
console.log(mensaje);

console.log(gestor.consultar(libroNuevo.getCodigo()));
