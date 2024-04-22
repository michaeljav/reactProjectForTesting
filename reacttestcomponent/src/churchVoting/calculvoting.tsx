import React, { useEffect } from 'react';
import { data } from './data';

/**
 * Function para seleccionar los que se repiten si pasan del  numero 13 de los  que se deben de seleccionar.
 */
export const RepeatedVoting: React.FC = () => {
  const getRepeatedVoting = () => {
    //cuantos debo de elejir
    //y los repetidos

    const dat = data;

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
    getRepeatedVoting();
  }, []);

  return (
    <>
      <p>Michael</p>
    </>
  );
};
