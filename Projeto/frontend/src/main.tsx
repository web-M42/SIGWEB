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
import Cadastro from './screens/Cadastro';
import EsqueciSenha from './screens/esqueciSenha';
import Dados from './screens/Dados/index.tsx';



const router = createBrowserRouter([
  { path: "/", element : <App />,
    errorElement : <NoMatch />,
    children : [

      // Rotas da home
      { path: "/", element : <Home /> },
      { path: "mapas", element : <Mapas /> },
      { path: "dados", element : <Dados /> },
      { path: "comunicacao", element : <Comunicacao /> },
      { path: "faleconosco", element : <FaleConosco /> },
      { path: "noticia/:id", element : <Noticia /> },

      // Rotas de Cadastrar e Entrar
      { path: "entrar", element : <Entrar /> },
      { path: "cadastro", element : <Cadastro /> },
      { path: "esquecisenha", element : <EsqueciSenha /> },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
