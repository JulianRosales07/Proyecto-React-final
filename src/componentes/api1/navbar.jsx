import React from 'react';
import { Link } from "react-router-dom";
import '../../componentes/api1/api1.css'; // Importa el archivo CSS

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to='/'><button>Inicio</button></Link>
      <Link to='/home'><button>Segunda Api</button></Link>
      <Link to='/aviones'><button>Tercera Api</button></Link>
      <Link to='/juegos'><button>Gastronomía Internacional</button></Link>
      <Link to='/celulares'><button>Pizzas Api</button></Link>
    </nav>
  );
}

export default Navbar;
