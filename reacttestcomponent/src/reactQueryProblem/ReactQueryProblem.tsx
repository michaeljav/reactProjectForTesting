import { ChangeEvent, useState, useRef, useEffect } from 'react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getCharacters } from './serviceAxios';

export interface reactQueryProps {
  page: number;
  Name: string;
}

export function ReactQueryProblem(props: any) {
  const { query } = props;
  const [pagee, setPagee] = useState<number>(0);

  // const query = useQuery({
  //   queryKey: ['characters'],
  //   queryFn: () => getCharacters({ page: 1, Name: '' }),
  // });

  const count = useRef(0);
  count.current++;
  console.log('HIJO query.isLoading', count, query.isLoading);

  if (query.isLoading) {
    console.log(
      'HIJO ACTUALIZA ESTADO dentro query.isLoading',
      query.isLoading
    );
    setPagee(2);
    // return <p>Loading</p>;
  }
  console.log(
    'HIJO DESPUES DE ACTUALIZA ESTADO dentro query.isLoading',
    query.isLoading
  );
  // useEffect(() => {
  //   console.log('MONTADO COMPONE query.isLoading', query.isLoading);
  //   setPagee(2);
  // }, []);

  const onChangeSel = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    console.log(value);
    setPagee(2);
    // setPage({ page: Number(value), Name: '' });
  };
  return (
    <>
      <select onChange={onChangeSel}>
        <option key='{1}' value='{1}'>
          1
        </option>
        <option key='{2}' value='{2}'>
          2
        </option>
        <option key='{3}' value='{3}'>
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
