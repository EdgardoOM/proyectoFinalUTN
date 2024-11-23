import './App.css';
import './style/layout.css';
import './style/nosotros.css';
import './style/productos.css';
import './style/publicaciones.css';
import './style/comunidad.css';
import './style/contacto.css';
import './style/formulario.css';


import Header from './components/Header';
import Nav from './components/Nav';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Publicaciones from './components/Publicaciones';
import Comentarios from './components/Comentarios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="cuadradoFondo"></div>
      <section className="contenedor">
        <Nav/>
        <Header/>
        <Nosotros/>
        <Productos/>
        <Publicaciones/>
        <Comentarios/>
        <Contacto/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
