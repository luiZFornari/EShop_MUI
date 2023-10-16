import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuPublico from "./componentes/MenuPublico";
import NotFound from "./componentes/telas/NotFound";
import Home from "./componentes/telas/home/Home";
import MenuPrivado from "./componentes/MenuPrivado";
import Avaliacao from "./componentes/telas/avaliacao/Avaliacao";
import Login from "./componentes/telas/login/Login";
import Sobre from "./componentes/Sobre";
import Categoria from "./componentes/telas/categoria/Categoria";
import Produto from "./componentes/telas/produto/Produto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "categorias",
        element: <Categoria />,
      },
      {
        path: "produtos",
        element: <Produto />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
