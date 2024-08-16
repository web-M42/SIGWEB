import Home from './screens/Home';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mapas from './screens/Mapas';
import Comunicacao from './screens/Comunicacao';
import FaleConosco from './screens/FaleConosco';
import Noticia from './screens/Noticia';
import NoMatch from './screens/NoMatch';

const router = createBrowserRouter([
  { path: "/", element : <Home />, errorElement: <NoMatch /> },
  { path: "/mapas", element : <Mapas />, errorElement: <NoMatch /> },
  { path: "/comunicacao", element : <Comunicacao />, errorElement: <NoMatch /> },
  { path: "/faleconosco", element : <FaleConosco />, errorElement: <NoMatch /> },
  { path: "/noticia/:id", element : <Noticia />, errorElement: <NoMatch /> }
])


export default function App() {
  return <RouterProvider router={router} />
}