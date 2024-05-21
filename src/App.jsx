import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainpage from './componentes/mainpage/mainpage';
import { Homepage } from './componentes/homepage/homepage';
import { Api1page } from './componentes/api1/api1';
import { Api2page } from './componentes/api2/api2';
import { Api3page } from './componentes/api3/api3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />
  },
  {
    path: "/home",
    element: <Homepage />
  },
  {
    path: "/celulares",
    element: <Api1page />
  },
  {
    path: "/juegos",
    element: <Api2page />
  },
  {
    path: "/aviones",
    element: <Api3page />
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router} />
  );
}

export default App;