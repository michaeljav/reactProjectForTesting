import { reactQueryProps } from './ReactQueryProblem';

export const getCharacters = async (page: reactQueryProps) => {
  // console.log('ENTRA ', page);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page.page}`
    // `https://rickandmortyapi.com/api/character/?page=1`
  );
  // https://rickandmortyapi.com/api/character/?page=2
  const data = await response.json();
  // console.log('michael  trajo data ', data);
  return data;
};
