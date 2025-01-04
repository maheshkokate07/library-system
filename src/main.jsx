import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home.jsx';
import BookList from './components/BookList.jsx';
import CategoryBooks from './components/CategoryBooks.jsx';
import BookDetail from './components/BookDetail.jsx';
import BrowseBooks from './components/BrowseBooks.jsx';
import AddBook from './components/AddBook.jsx';
import Error from './components/Error.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <BookList />
          },
          {
            path: '/books/:category',
            element: <CategoryBooks />
          },
          {
            path: '/book/:id',
            element: <BookDetail />
          },
          {
            path: '/books/',
            element: <BrowseBooks />
          },
          {
            path: '/add-book',
            element: <AddBook />
          }
        ],
        errorElement: <Error />
      }
    ],
    errorElement: <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode> 
)