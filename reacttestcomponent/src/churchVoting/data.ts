export interface Voter {
  id: number;
  name: string;
  votes: number;
}
//añado el campo de sec para ordenar  la nueva lista.
//es decir, la lista viene asi desordenada respecto a la propiedad votes
/**
 * const data: Voter[] = [
  { id: 1, name: "Alice", votes: 17 },
  { id: 2, name: "Bob", votes: 5 },
  { id: 3, name: "Charlie", votes: 14 },
  { id: 4, name: "David", votes: 14 },
  { id: 5, name: "Eva", votes: 8 },
  { id: 6, name: "Frank", votes: 12 },
  { id: 7, name: "Grace", votes: 10 },
  { id: 8, name: "Henry", votes: 13 },
  { id: 9, name: "Isabel", votes: 11 },
  { id: 10, name: "Jack", votes: 1 },
  { id: 11, name: "Kate", votes: 7 },
  { id: 12, name: "Liam", votes: 15 },
  { id: 13, name: "Mia", votes: 14 },
  { id: 14, name: "Noah", votes: 15 },

y debo de ordenarla desendentemente asi:
[
  { id: 1, name: "Alice", votes: 17 },
  { id: 12, name: "Liam", votes: 15 },
  { id: 14, name: "Noah", votes: 15 },
  { id: 3, name: "Charlie", votes: 14 },
  { id: 4, name: "David", votes: 14 },
  { id: 13, name: "Mia", votes: 14 },
  { id: 8, name: "Henry", votes: 13 },
  { id: 6, name: "Frank", votes: 12 },
  { id: 9, name: "Isabel", votes: 11 },
  { id: 7, name: "Grace", votes: 10 },
  { id: 17, name: "Quinn", votes: 9 },
  { id: 5, name: "Eva", votes: 8 },
  { id: 11, name: "Kate", votes: 7 },

  pero  el id entonces se desordena  y ese es el id de tabla del registro.
  asi que tengo este extra campo "sec"  para tener una secuencia de 1 a la cantidad maxima 
  de personas a elegir que por defecto son 13. sabiendo la tantidad  a elegir podré saber 
  si el ultimo grupo  que se  repite esta dentro de los 13 que debo de escojer, porque sino esta simplemente los descarto.

 */

export interface VoterWithSec extends Voter {
  sec: number;
}

//caso -2  //Si la cantidad a buscar de personas (por defecto)  es mayor que la lista de personas votadas enviadas, entonces envio  vacio.
// export const data: Voter[] = [
//   { id: 10, name: "Jack", votes: 7 },
//   { id: 11, name: "Kate", votes: 7 },
// ];

//case -1  NO SE REPITEN
export const data: Voter[] = [
  { id: 1, name: "Alice", votes: 17 },
  { id: 2, name: "Bob", votes: 16 },
  { id: 3, name: "Charlie", votes: 15 },
  { id: 4, name: "David", votes: 14 },
  { id: 5, name: "Eva", votes: 13 },
  { id: 6, name: "Frank", votes: 12 },
  { id: 7, name: "Grace", votes: 11 },
  { id: 8, name: "Henry", votes: 10 },
  { id: 9, name: "Isabel", votes: 9 },
  { id: 10, name: "Jack", votes: 8 },
  { id: 11, name: "Kate", votes: 7 },
  { id: 12, name: "Liam", votes: 6 },
  { id: 13, name: "Mia", votes: 5 },
  { id: 14, name: "Noah", votes: 4 },
  { id: 15, name: "Olivia", votes: 3 },
  { id: 16, name: "Peter", votes: 2 },
  { id: 17, name: "Quinn", votes: 1 },
];

// export const data: Voter[] = [
//   { id: 10, name: "Jack", votes: 7 },
//   { id: 11, name: "Kate", votes: 1 },
//   // { id: 11, name: "Kate", votes: 9 },
// ];

//case 0  se repite 1 grupo, pero  en el index 13 al 14 no. EL 13 tiene mas votos que el 14
// export const data: Voter[] = [
//   { id: 1, name: "Alice", votes: 17 },
//   { id: 2, name: "Bob", votes: 16 },
//   { id: 3, name: "Charlie", votes: 15 },
//   { id: 4, name: "David", votes: 15 },
//   { id: 5, name: "Eva", votes: 13 },
//   { id: 6, name: "Frank", votes: 12 },
//   { id: 7, name: "Grace", votes: 11 },
//   { id: 8, name: "Henry", votes: 10 },
//   { id: 9, name: "Isabel", votes: 9 },
//   { id: 10, name: "Jack", votes: 8 },
//   { id: 11, name: "Kate", votes: 7 },
//   { id: 12, name: "Liam", votes: 6 },
//   { id: 13, name: "Mia", votes: 5 },
//   { id: 14, name: "Noah", votes: 4 },
//   { id: 15, name: "Olivia", votes: 3 },
//   { id: 16, name: "Peter", votes: 2 },
//   { id: 17, name: "Quinn", votes: 1 },
// ];

//case 1  se repiten dos grupos, pero  en el index 13 al 14 no. EL 13 tiene mas votos que el 14
// export const data: Voter[] = [
//   { id: 1, name: "Alice", votes: 17 },
//   { id: 2, name: "Bob", votes: 16 },
//   { id: 3, name: "Charlie", votes: 15 },
//   { id: 4, name: "David", votes: 15 },
//   { id: 5, name: "Eva", votes: 13 },
//   { id: 6, name: "Frank", votes: 12 },
//   { id: 7, name: "Grace", votes: 11 },
//   { id: 8, name: "Henry", votes: 10 },
//   { id: 9, name: "Isabel", votes: 9 },
//   { id: 10, name: "Jack", votes: 7 },
//   { id: 11, name: "Kate", votes: 7 },
//   { id: 12, name: "Liam", votes: 7 },
//   { id: 13, name: "Mia", votes: 7 },
//   { id: 14, name: "Noah", votes: 4 },
//   { id: 15, name: "Olivia", votes: 3 },
//   { id: 16, name: "Peter", votes: 2 },
//   { id: 17, name: "Quinn", votes: 1 },
// ];

// //case 2  se repiten 3 grupos, pero  en el index 13 al 14 no. EL 13 tiene mas votos que el 14
// export const data: Voter[] = [
//   { id: 1, name: "Alice", votes: 17 },
//   { id: 2, name: "Bob", votes: 16 },
//   { id: 3, name: "Charlie", votes: 15 },
//   { id: 4, name: "David", votes: 15 },
//   { id: 5, name: "Eva", votes: 13 },
//   { id: 6, name: "Frank", votes: 11 },
//   { id: 7, name: "Grace", votes: 11 },
//   { id: 8, name: "Henry", votes: 10 },
//   { id: 9, name: "Isabel", votes: 9 },
//   { id: 10, name: "Jack", votes: 7 },
//   { id: 11, name: "Kate", votes: 7 },
//   { id: 12, name: "Liam", votes: 7 },
//   { id: 13, name: "Mia", votes: 7 },
//   { id: 14, name: "Noah", votes: 4 },
//   { id: 15, name: "Olivia", votes: 3 },
//   { id: 16, name: "Peter", votes: 2 },
//   { id: 17, name: "Quinn", votes: 1 },
// ];

// //case 3  se repiten 3 grupos, y  en el index 13 al 14 hay votos iguales. EL 13 tiene la misma cantidad de  votos que el 14
// export const data: Voter[] = [
//   { id: 1, name: "Alice", votes: 17 },
//   { id: 2, name: "Bob", votes: 16 },
//   { id: 3, name: "Charlie", votes: 15 },
//   { id: 4, name: "David", votes: 15 },
//   { id: 5, name: "Eva", votes: 13 },
//   { id: 6, name: "Frank", votes: 11 },
//   { id: 7, name: "Grace", votes: 11 },
//   { id: 8, name: "Henry", votes: 10 },
//   { id: 9, name: "Isabel", votes: 9 },
//   { id: 10, name: "Jack", votes: 7 },
//   { id: 11, name: "Kate", votes: 7 },
//   { id: 12, name: "Liam", votes: 7 },
//   { id: 13, name: "Mia", votes: 7 },
//   { id: 14, name: "Noah", votes: 7 },
//   { id: 15, name: "Olivia", votes: 3 },
//   { id: 16, name: "Peter", votes: 2 },
//   { id: 17, name: "Quinn", votes: 1 },
// ];

//RETORNO DEL CASO 3 PARA HACER UNA SEGUNDA VOTACION
// export const data: Voter[] = [
//   { id: 10, name: "Jack", votes: 7 },
//   { id: 11, name: "Kate", votes: 7 },
//   { id: 12, name: "Liam", votes: 7 },
//   { id: 13, name: "Mia", votes: 7 },
//   { id: 14, name: "Noah", votes: 7 },
// ];

//continuacion del caso 3 para segunda ronda de votacion
//OJO EL POR DEFECTO A ELEGIR AQUI SON 4 esta vez, PORQUE DEL CASO 3 YA SELIGIERON 9 PERSONAS MAS VOTADAS

// export const data: Voter[] = [
//   { id: 10, name: "Jack", votes: 7 },
//   { id: 11, name: "Kate", votes: 7 },
//   { id: 12, name: "Liam", votes: 7 },
//   { id: 13, name: "Mia", votes: 7 },
//   { id: 14, name: "Noah", votes: 7 },
// ];

//caso 4 conseguir los 2 con mayores puntuacion
// export const data: Voter[] = [
//   { id: 10, name: "Jack", votes: 7 },
//   { id: 11, name: "Kate", votes: 7 },
//   { id: 12, name: "Liam", votes: 7 },
//   { id: 13, name: "Mia", votes: 2 },
//   { id: 14, name: "Noah", votes: 1 },
// ];

// OTROS CASOS

// // // //case 1
// export const data = [
//   { id: 1, name: "Alice", votes: 18 },
//   { id: 2, name: "Bob", votes: 17 },
//   { id: 3, name: "Charlie", votes: 16 },
//   { id: 4, name: "David", votes: 16 },
//   { id: 5, name: "Eva", votes: 15 },
//   { id: 6, name: "Frank", votes: 14 },
//   { id: 7, name: "Grace", votes: 13 },
//   { id: 8, name: "Henry", votes: 12 },
//   { id: 9, name: "Isabel", votes: 11 },
//   { id: 10, name: "Jack", votes: 10 },
//   { id: 11, name: "Kate", votes: 9 },
//   { id: 12, name: "Liam", votes: 8 },
//   { id: 13, name: "Mia", votes: 7 },
//   { id: 14, name: "Noah", votes: 7 },
//   { id: 15, name: "Olivia", votes: 7 },
//   { id: 16, name: "Peter", votes: 7 },
//   { id: 17, name: "Quinn", votes: 3 },
// ];

// //case 2
// export const data = [
//   { id: 1, name: "Alice", votes: 18 },
//   { id: 2, name: "Bob", votes: 17 },
//   { id: 3, name: "Charlie", votes: 16 },
//   { id: 4, name: "David", votes: 16 },
//   { id: 5, name: "Eva", votes: 15 },
//   { id: 6, name: "Frank", votes: 14 },
//   { id: 7, name: "Grace", votes: 13 },
//   { id: 8, name: "Henry", votes: 12 },
//   { id: 9, name: "Isabel", votes: 11 },
//   { id: 10, name: "Jack", votes: 10 },
//   { id: 11, name: "Kate", votes: 9 },
//   { id: 12, name: "Liam", votes: 7 },
//   { id: 13, name: "Mia", votes: 7 },
//   { id: 14, name: "Noah", votes: 7 },
//   { id: 15, name: "Olivia", votes: 7 },
//   { id: 16, name: "Peter", votes: 5 },
//   { id: 17, name: "Quinn", votes: 3 },
// ];

// //case 3
// export const data = [
//   { id: 1, name: "Alice", votes: 18 },
//   { id: 2, name: "Bob", votes: 17 },
//   { id: 3, name: "Charlie", votes: 16 },
//   { id: 4, name: "David", votes: 16 },
//   { id: 5, name: "Eva", votes: 15 },
//   { id: 6, name: "Frank", votes: 7 },
//   { id: 7, name: "Grace", votes: 7 },
//   { id: 8, name: "Henry", votes: 7 },
//   { id: 9, name: "Isabel", votes: 7 },
//   { id: 10, name: "Jack", votes: 7 },
//   { id: 11, name: "Kate", votes: 7 },
//   { id: 12, name: "Liam", votes: 7 },
//   { id: 13, name: "Mia", votes: 7 },
//   { id: 14, name: "Noah", votes: 7 },
//   { id: 15, name: "Olivia", votes: 7 },
//   { id: 16, name: "Peter", votes: 5 },
//   { id: 17, name: "Quinn", votes: 3 },
// ];
