import { type ReactElement } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchData = async():Promise<unknown> => {
  const respon = await fetch('https://api.github.com/repos/TanStack/query')
  const data = await respon.json()
 return data;
}
export function ReactQuery() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json()
      ),
  });
  // const { isPending, error, data } = useQuery<string,Error>(['uniquekey'], fetchData);
  

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;








  return (
    <div>
      <p>testing</p>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

// const App = (): ReactElement => {
//   return <Example />;
// };

// export default App;
