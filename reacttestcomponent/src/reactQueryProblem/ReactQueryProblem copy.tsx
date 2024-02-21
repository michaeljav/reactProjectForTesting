import {
  useEffect,
  useRef,
  useState,
  EventHandler,
  ChangeEventHandler,
  ChangeEvent,
} from 'react';
import { useQueryHook } from './useQueryHook';
import { useQuery } from '@tanstack/react-query';
import { getCharacters } from './serviceAxios';

export interface reactQueryProps {
  page: number;
  Name: string;
}

// const tes = async () => {
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character/?page=1`
//   );
//   const data = await response.json();
//   console.log('respuesta afuera ', data);
//   return data;
// };
export function ReactQueryProblem() {
  // const initialPa = { page: 1, Name: '' };
  // const [page, setPage] = useState<reactQueryProps>(initialPa);
  const [pagee, setPagee] = useState<number>(0);
  // const { query } = useQueryHook(page);

  const query = useQuery({
    // queryKey: ['characters', page],
    queryKey: ['characters'],
    // queryFn: () => getCharacters(page),
    queryFn: () => getCharacters({ page: 1, Name: '' }),
    // staleTime: 1000 * 60*2, //[RIEBA]
  });

  console.log('query.isLoading', query.isLoading);
  if (!query.isLoading) {
    console.log('dentro query.isLoading', query.isLoading);
    // setPagee(2);
  }
  // const { query } = useQueryHook({ page: 1, Name: '' });

  //OPTION 1
  // const response = fetch(`https://rickandmortyapi.com/api/character/?page=1`)
  //   .then((response) => response.json())
  //   .then((resp) => console.log('dentro del them ', resp));
  // console.log('respuesta afuera ', response);

  // const count = useRef(0);
  // count.current++;
  // console.log('RENDER --->', count.current, query);
  // const data = tes();
  // console.log('RENDER --->', query);
  // console.log('RENDER --->', data.then(res => res);

  const btn = () => {
    // // setPage((pr) => pr+=1)
    // // setPage(() => 1);
    // setPage((prr) => {
    //   let ram = '';
    //   ram = Math.random().toString();
    //   let n = 0;
    //   n = prr.page += 1;
    //   const pr = { page: n, Name: ram } as reactQueryProps;
    //   return pr;
    // });
  };

  const onChangeSel = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    console.log(value);
    // setPage({ page: Number(value), Name: '' });
  };
  return (
    <>
      <button
        className='p-5 bg-blue-400 ml-5 rounded-lg hover:opacity-80'
        onClick={btn}
      >
        Subi uno
      </button>
      <select onChange={onChangeSel}>
        <option key={1} value={1}>
          1
        </option>
        <option key={2} value={2}>
          2
        </option>
        <option key={3} value={3}>
          3
        </option>
      </select>
      {query?.data?.results && (
        <ul>
          {query.data.results.map((data) => (
            <li key={data.id}>{data?.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
