import { type ReactElement } from 'react';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
];

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export function ReactQuery() {
  console.log(POSTS);

  const queryClient = useQueryClient();
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS]),
    // queryFn: () => Promise.reject('Error Message'),
  });

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(1000).then(() => POSTS.push({ id: Math.random(), title })),
    onSuccess: () => {
      
      queryClient.invalidateQueries(['posts']);
    },
  });

  //ramdom id
  // return <div>{crypto.randomUUID()}</div>

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  // return <div>{JSON.stringify(postsQuery.data)}</div>;
  return (
    <div>
      {postsQuery.data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button 
        className='bg-blue-500 hover:opacity-90 rounded-lg'
        onClick={() =>
          newPostMutation.mutate(`new post ${crypto.randomUUID()}`)
        }
      >
        Add New
      </button>
    </div>
  );
}
