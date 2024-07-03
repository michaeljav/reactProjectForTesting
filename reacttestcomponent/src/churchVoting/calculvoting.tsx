import React, { useEffect } from "react";
import { data } from "./data";
import { listRepeted } from "./listRepeted";

/**
 * Function para seleccionar los que se repiten si pasan del  numero 13 de los  que se deben de seleccionar.
 */
export const LastRepeatedVoting: React.FC = () => {
  useEffect(() => {
    // getRepeatedVoting();
    // por defecto son 13 miembros a elegir
    // const numberOfElectors = 13;
    const numberOfElectors = 2;
    // const numberOfElectors = 4;
    // const numberOfElectors = 2;
    const arr = listRepeted(data, numberOfElectors);
    console.log(arr);
  }, []);

  return (
    <>
      <p>Michael</p>
    </>
  );
};
