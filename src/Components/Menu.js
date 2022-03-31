import React,{Component} from "react"
import {Link} from "react-router-dom"

class Menu extends Component {

  render(){
    return (
      <div className="topnav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/alta">Crear una cuenta</Link></li>
          <li><Link to="/ingresar">Ingresar</Link></li>
        </ul>
        
      </div>
    );
  }
  
}

export default Menu;
