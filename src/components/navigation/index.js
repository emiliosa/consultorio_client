import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Principal</NavLink></li>
      <li><NavLink to='/gallery'>Galería</NavLink></li>
      <li><NavLink to='/contact'>Contacto</NavLink></li>
      <li><NavLink to='/patient'>Portal de pacientes</NavLink></li>
      <li><NavLink to='/professional'>Portal de profesionales</NavLink></li>
      <li><NavLink to='/profile'>Mi perfil</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;