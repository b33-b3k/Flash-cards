import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Header} from './Header.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Deck from './Deck.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
    {
    path: "/decks/:deckId",
    element: <Deck/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <div className='page'></div>
    <Header/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)