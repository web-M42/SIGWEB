import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './screens/Home';
import Mapas from './screens/Mapas';
import Comunicacao from './screens/Comunicacao';
import FaleConosco from './screens/FaleConosco';
import Noticia from './screens/Noticia';
import NoMatch from './screens/NoMatch';
import Entrar from './screens/Entrar';



const router = createBrowserRouter([
  { path: "/", element : <App />,
    errorElement : <NoMatch />,
    children : [
      { path: "/", element : <Home /> },
      { path: "entrar", element : <Entrar /> },
      { path: "mapas", element : <Mapas /> },
      { path: "comunicacao", element : <Comunicacao /> },
      { path: "faleconosco", element : <FaleConosco /> },
      { path: "noticia/:id", element : <Noticia /> }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
