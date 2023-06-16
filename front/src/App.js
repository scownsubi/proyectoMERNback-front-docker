import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Agregar from "./componentes/Agregar";
import Editar from "./componentes/Editar";
import Home from "./componentes/Home";
import Listar from "./componentes/Listar";



function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home Este home</Link> 
        <br></br>
        <br></br>
        <Link to="/listar">Listar LISTAR nuevo</Link>
        <br></br>
        <br></br>
        <Link to="/agregar">Agregar -</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listar" element={<Listar />} />
        <Route path="/agregar" element={<Agregar /> } />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
