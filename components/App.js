import Titulo from './Titulo.jsx';
import SubTitulo from './SubTitulo.jsx';
import Boton from './Boton.jsx';
import './App.css';
import Cita from './Cita.jsx';
function App() {
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
                <Boton></Boton>
              </form>
            </div>
            <div className="one-half column">
            <SubTitulo titulo="Administrar mis citas"></SubTitulo>
              <Cita nombre="Gat" dueño="thiago" fecha="10/02/2020" hora="10:08" sintomas="Le duele todo" ></Cita>
            </div>
          </div>
        </div>
      <script src="/static/js/bundle.js"></script>
      <script src="/static/js/vendors~main.chunk.js"></script>
      <script src="/static/js/main.chunk.js"></script>
    </>
  );
}

export default App;
