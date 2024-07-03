import { Voter, VoterWithSec } from "./data";

/**
 * Function para seleccionar los que se repiten si pasan del  numero 13 de los  que se deben de seleccionar.
 */

interface Response {
  chosenForThisRound: Voter[];
  missingAmount: number;
  electedWithSameVotesForNextRound: Voter[];
  error?: string;
}
//return  array ordered desc by votes property
const orderByVoteDesc = (list: Voter[]): VoterWithSec[] => {
  const newArray = list.sort((a, b) => b.votes - a.votes);
  //el campo sec es para dar una secuenca cuando ordeno el array, tengo mas comentarios en data file
  const voterWithSecArr = newArray.map(
    (voter, index) => ({ ...voter, sec: ++index } as VoterWithSec)
  );
  return voterWithSecArr;
};

//function to delete a property from object in an array of objects
function deleteProperty<T extends object, K extends keyof T>(
  arr: T[],
  prop: K
): T[] {
  return arr.map((item) => {
    const { [prop]: _, ...newItem } = item;
    return newItem as T;
  });
}

//esta funcion devolvera array si los votos repetidos estan dentro de los 13 miembros por defecto a elegir.
export function listRepeted(
  voters: Voter[] = [],
  numberOfElectorsByDefault: number = 0
): Response {
  const voteMap = new Map<number, VoterWithSec[]>();
  const votersOrdered = orderByVoteDesc(voters);

  //SI uno TIENE VOTOS
  if (voters.length < 2) {
    return {
      chosenForThisRound: deleteProperty(votersOrdered, "sec"),
      electedWithSameVotesForNextRound: [],
      missingAmount: 0,
      error: "",
    } as Response;
  }

  //Si la cantidad a buscar de personas (por defecto)  es mayor que la lista de personas votadas enviadas, entonces envio  vacio.
  if (numberOfElectorsByDefault > voters.length) {
    return {
      chosenForThisRound: [],
      electedWithSameVotesForNextRound: [],
      missingAmount: 0,
      error: "Amount of elector required are more than list sent",
    } as Response;
  }

  //ultima persona del listado requerido
  const lastPersonVotes =
    votersOrdered[numberOfElectorsByDefault - 1]?.votes || 0;
  const nextPersonVotes = votersOrdered[numberOfElectorsByDefault]?.votes || 0;

  //si la cantidad de voto la ultima persona a buscar en la lista es  mayor, ya que esta ordenado  por votos descendentemente,  entonces  retorno hasta las personas necesitadas.
  if (lastPersonVotes > nextPersonVotes) {
    const elected = votersOrdered.slice(0, numberOfElectorsByDefault);
    //eliminar la  propiedad sec porque solo era para validar si al casar los 13 el numero 14 tenia la misma cantdad de votantes.
    return {
      chosenForThisRound: deleteProperty(elected, "sec"),
      electedWithSameVotesForNextRound: [],
      missingAmount: 0,
      error: "",
    } as Response;
  }

  //agrupo por cantidad de votos
  votersOrdered.forEach((voter) => {
    if (!voteMap.has(voter.votes)) {
      voteMap.set(voter.votes, []);
    }
    voteMap.get(voter.votes)?.push(voter);
  });

  //extrago los grupos que tienen de dos elemento en adelante
  const repeatedGroups: VoterWithSec[][] = Array.from(voteMap.values()).filter(
    (group) => group.length > 1
  );

  //si no se repite ninguna cantidad de votos por persona, solo tengo que tomar los primeros 13 por defecto  y los cuales serian los ganadores
  if (repeatedGroups.length === 0) {
    const elected = votersOrdered.slice(0, numberOfElectorsByDefault);
    //eliminar la  propiedad sec porque solo era para validar si al casar los 13 el numero 14 tenia la misma cantdad de votantes.
    return {
      chosenForThisRound: deleteProperty(elected, "sec"),
      electedWithSameVotesForNextRound: [],
      missingAmount: 0,
    } as Response;
  }

  const lastSet = repeatedGroups[repeatedGroups.length - 1];
  // console.log("last repeted", lastSet);

  //consigo un array de sec del ultimo grupo de personas con los mismos votos
  const lastGroupWithSameVotes = lastSet.map((votSec) => {
    return votSec.sec;
  });

  const includeNumberOfElectors = lastGroupWithSameVotes.includes(
    numberOfElectorsByDefault
  );

  const minSec = Math.min(...lastGroupWithSameVotes);
  const maxSec = Math.max(...lastGroupWithSameVotes);

  //si lo incluye la secuencia  y es menor o igual al numero total de personas a elegir,
  //selecciona los 13 primeros. (recuerda que en  "votersOrdered" estan ordenado decendentemente)
  if (includeNumberOfElectors && maxSec <= numberOfElectorsByDefault) {
    const elected = votersOrdered.slice(0, numberOfElectorsByDefault);
    //eliminar la  propiedad sec porque solo era para validar si al casar los 13 el numero 14 tenia la misma cantdad de votantes.
    return {
      chosenForThisRound: deleteProperty(elected, "sec"),
      electedWithSameVotesForNextRound: [],
      missingAmount: 0,
    } as Response;
  }

  const elected = votersOrdered.slice(0, minSec - 1);

  return {
    chosenForThisRound: deleteProperty(elected, "sec"),
    electedWithSameVotesForNextRound: deleteProperty(lastSet, "sec"),
    missingAmount: numberOfElectorsByDefault - elected.length,
  } as Response;
}
