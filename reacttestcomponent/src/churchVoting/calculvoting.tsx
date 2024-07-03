import React, { useEffect } from "react";
import { data, Voter, VoterWithSec } from "./data";

//return  array ordered desc by votes property
const orderByVoteDesc = (list: Voter[]): VoterWithSec[] => {
  const newArray = list.sort((a, b) => b.votes - a.votes);
  const voterWithSecArr = newArray.map(
    (voter, index) => ({ ...voter, sec: ++index } as VoterWithSec)
  );
  return voterWithSecArr;
};
/**
 * Function para seleccionar los que se repiten si pasan del  numero 13 de los  que se deben de seleccionar.
 */
export const LastRepeatedVoting: React.FC = () => {
  function getLastGroupOfRepeatedVoters(voters: Voter[]): Voter[] {
    const voteMap = new Map<number, Voter[]>();

    //agrupo por cantidad de votos
    voters.forEach((voter, index) => {
      console.log("index all arrays", index);
      if (!voteMap.has(voter.votes)) {
        voteMap.set(voter.votes, []);
      }
      voteMap.get(voter.votes)?.push(voter);
    });

    //extrago los grupos que tienen de dos elemento en adelante
    const repeatedGroups: Voter[][] = Array.from(voteMap.values()).filter(
      (group) => group.length > 1
    );

    if (repeatedGroups.length === 0) {
      return [];
    }

    return repeatedGroups[repeatedGroups.length - 1];
  }

  const getRepeatedVoting = () => {
    //cuantos debo de elejir
    //y los repetidos

    const dat = orderByVoteDesc(data);

    //to store elements equals
    let arrayRepeated = [];
    // debugger;
    for (let i = 0; i < dat.length; i++) {
      // console.log(i);
      // eslint-disable-next-line no-debugger

      console.log(dat[i], dat[i + 1]);
      //if the current element is equal to the next element added
      if (
        /* inserto el actual elemento  si el siguiente es igual*/
        dat[i]?.votes === dat[i + 1]?.votes ||
        /* o  inserto el actual elemento si el anterior era igual al actual*/
        dat[i - 1]?.votes === dat[i]?.votes
      ) {
        arrayRepeated.push(dat[i]);
      } else {
        arrayRepeated = [];
      }
      // console.log(dat[i]);
      console.log(arrayRepeated);
    }
  };

  useEffect(() => {
    // getRepeatedVoting();
    const arr = getLastGroupOfRepeatedVoters(orderByVoteDesc(data));
    console.log("ordered", JSON.stringify(orderByVoteDesc(data)));
    console.log(arr);
  }, []);

  return (
    <>
      <p>Michael</p>
    </>
  );
};
