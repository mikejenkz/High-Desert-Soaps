import React from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';


const client = new QueryClient();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client ={client}>
    <RouterProvider router={router}/>
  </QueryClientProvider>,
)
