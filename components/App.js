import React, { useEffect, useState } from 'react';
import Titulo from './Titulo.jsx';
import SubTitulo from './SubTitulo.jsx';
import Boton from './Boton.jsx';
import './App.css';
import Cita from './Cita.jsx';

function App() {
  // Estado para las citas
  const [citas, setCitas] = useState([]);

  // Cargar citas desde LocalStorage cuando el componente se monta
  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem('citas'));
    if (citasGuardadas) {
      setCitas(citasGuardadas);
    }
  }, []);

  // Guardar citas en LocalStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  return (
    <>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <Titulo titulo="Citas"></Titulo>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <SubTitulo titulo="Crear mi cita"></SubTitulo>
            <form>
              <label>Nombre Mascota</label>
              <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
              <label>Nombre Dueño</label>
              <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" />
              <label>Fecha</label>
              <input type="date" name="fecha" className="u-full-width" />
              <label>hora</label>
              <input type="time" name="hora" className="u-full-width" />
              <label>Sintomas</label>
              <textarea name="sintomas" className="u-full-width"></textarea>
              <button type="button" onClick={() => agregarCita({ /* datos de la cita */ })}>Agregar Cita</button>
            </form>
          </div>
          <div className="one-half column">
            <SubTitulo titulo="Administra tus citas"></SubTitulo>
            {citas.map((cita, index) => (
              <Cita key={index} cita={cita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
