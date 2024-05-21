import React from 'react';
import Navbar from './navbar'; // Ajusta la ruta según la ubicación real del archivo
import PizzaImage from './PizzaImage'; // Importa el nuevo componente
import "./api.css";

const Api1page = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="api-container">
          
          <PizzaImage /> {/* Añadir el componente PizzaImage aquí */}
      </div>
    </div>
  );
}

export { Api1page };
