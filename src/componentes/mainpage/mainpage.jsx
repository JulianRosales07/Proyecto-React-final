import React from 'react';
import Navbar from '../api1/navbar';
import { Link } from "react-router-dom";
import imgReceta from '../../assets/img/100.png';
import imgGastronomia from '../../assets/img/gastronomia.jpg';

import "./mainpage.css";

const Mainpage = () => {
    return (
        <div>
            <Navbar />
            <div className="main-content">
                <section className="welcome-section">
                    <h2>¡Bienvenido a nuestra aplicación de recetas!</h2>
                    <p>Explora el mundo de la gastronomía con nosotros y descubre una amplia variedad de platos deliciosos de todo el mundo.</p>
                </section>
                
                <section className="api-section">
                    <h3>API 1: Spoonacular</h3>
                    <p>Spoonacular es una API de recetas que te permite buscar y descubrir una gran cantidad de recetas de cocina. Desde platos clásicos hasta opciones más creativas, Spoonacular tiene algo para todos los gustos.</p>
                    <img src={imgGastronomia} className="imgGastronomia" alt="imgGastronomia" />
                </section>

                <section className="api-section">
                    <h3>API 2: Imágenes de Pizza</h3>
                    <p>La API de imágenes de pizza te permite obtener imágenes de pizzas deliciosas, Si bien no está directamente relacionada con la gastronomía en sí, puede ser una adición divertida para tu experiencia culinaria.</p>
                    <img src={imgReceta} className="imgReceta" alt="imgReceta" />
                </section>

                <section className="world-cuisine-section">
                    <h2>Platos Gastronómicos del Mundo</h2>
                    <p>Descubre la diversidad culinaria de nuestro planeta explorando estos platos icónicos de diferentes culturas:</p>
                    <ul>
                        <li>Pizza italiana</li>
                        <li>Sushi japonés</li>
                        <li>Tacos mexicanos</li>
                        <li>Paella española</li>
                        <li>Curry indio</li>
                        <li>Pasta italiana</li>
                    </ul>
                </section>
                
                {/* Puedes agregar más secciones según sea necesario */}
            </div>
        </div>
    );
}

export default Mainpage;
