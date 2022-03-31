import React,{Component} from "react"
import {Link} from "react-router-dom"
class Producto extends Component{
  
  render(){
    console.log(this.props)
    const {datos} = this.props
    return(
        <div className="card">
            <img src={datos.thumbnail} />
            <h1>{datos.title}</h1>
            <p className="price">Precio:{datos.price}$</p>
            <p><button><Link to={'/producto/' + datos.id} >Ver Detalle</Link></button></p>
        </div>
    )
  }
}


export default Producto;
