import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Reduce } from './javascript_vanilla/Reduce.tsx';
// import { ballBounce as Ball } from './ballBounce';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    {/* <React.StrictMode> */}
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
    {/* <Reduce /> */}
    {/* </React.StrictMode> */}
  </div>
);
