import { useEffect, useState } from 'react';
import { useQueryHook } from './useQueryHook';

export interface reactQueryProps {
  page: number;
  Name: string;
}
export function ReactQueryProblem() {
  const initialPa = { page: 1, Name: '' };
  const [page, setPage] = useState<reactQueryProps>(initialPa);
  const { query } = useQueryHook(page);
  // return <div>{JSON.stringify(postsQuery.data)}</div>;

  useEffect(() => {
    console.log('MICHAEL useeffect ', query.data, query.isLoading);
    // console.log('MICHAEL useeffect ', query.isFetching);
    // }, [query.isFetching]);
  }, [query.isLoading]);
  // }, [JSON.stringify(query.data)]);

  const btn = () => {
    // setPage((pr) => pr+=1)
    // setPage(() => 1);

    setPage((prr) => {
      let ram = '';
      ram = Math.random().toString();
      let n = 0;
      n = prr.page+=1;
      const pr = { page: n, Name: ram } as reactQueryProps;
      return pr;
    });
  };
  return (
    <>
      <button
        className='p-5 bg-blue-400 ml-5 rounded-lg hover:opacity-80'
        onClick={btn}
      >
        Subi uno
      </button>
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
