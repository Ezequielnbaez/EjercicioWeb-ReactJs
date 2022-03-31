import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import DetalleProducto from './Pages/DetalleProducto';
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import Login from './Pages/Login';
import Registro from './Pages/Registro';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
function App() {
    return (
        <div className="page-container">
        <div className="content-wrap">
            <Router>
              <Menu />
                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/ingresar" element={<Login />} />
                            <Route path="/alta" element={<Registro />} />
                <Route path="/producto/:id" element={<DetalleProducto  />} />
              </Routes>
            </Router>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
