import { useQuery } from '@tanstack/react-query';
// import { useRef } from 'react';
import { getCharacters } from './serviceAxios';
import { reactQueryProps } from './ReactQueryProblem';

export const useQueryHook = (page: reactQueryProps) => {
  // const count = useRef(0);
  // count.current++;
  // console.log('RENDER --->', count.current);
  // const getCharacters = async (page: number) => {
  //   console.log('ENTRA ',page)
  //   const response = await fetch(
  //     `https://rickandmortyapi.com/api/character/?page=${page}`
  //   );
  //   // https://rickandmortyapi.com/api/character/?page=2
  //   const data = await response.json();
  //   console.log('michael ', data);
  //   return data;
  // };

  // const query = useQuery({ queryKey: ['characters'], queryFn: getCharacters });
  const query = useQuery({
    queryKey: ['characters', page],
    // queryFn: ()=> Promise.reject(()=>'Error')
    queryFn: () => getCharacters(page), //[RIEBA]
    // staleTime: 10000,
    // refetchInterval: 1000*60*15, //15 minutes
    // refetchInterval: 1000, //15 minutes
    //  refetchOnWindowFocus:false // cuando estoy en otro tab y entro hago refetch
  
  });

  console.log('MICHAEL ',query)

  return { query };
};
