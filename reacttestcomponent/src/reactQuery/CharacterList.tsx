import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';

export const CharacterList = () => {
  const count = useRef(0);
  count.current++;
  console.log('RENDER --->', count.current);
  const getCharacters = async () => {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character/?page=2'
    );
    // https://rickandmortyapi.com/api/character/?page=2
    const data = await response.json();
    console.log('michael ', data);
    return data;
  };

  // const query = useQuery({ queryKey: ['characters'], queryFn: getCharacters });
  const query = useQuery({
    queryKey: ['characters'],
    // queryFn: ()=> Promise.reject(()=>'Error')
    queryFn: getCharacters,
    // staleTime: 10000,
    // refetchInterval: 1000*60*15, //15 minutes
    // refetchInterval: 1000, //15 minutes
    //  refetchOnWindowFocus:false // cuando estoy en otro tab y entro hago refetch
  });

  if (query.isLoading) {
    return <h1>Loading ...</h1>;
  }

  console.log(query);
  // if (!query.isSuccess) {
  // if (query.data.error) {
  if (query.isError || query.data.error) {
    return <h1>error ...</h1>;
  }
  console.log(query);
  return (
    query?.data?.results && (
      <ul>
        {query.data.results.map((data) => (
          <li>{data?.name}</li>
        ))}
      </ul>
    )
  );
};
