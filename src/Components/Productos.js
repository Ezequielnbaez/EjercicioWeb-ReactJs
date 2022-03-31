import React,{Component} from "react"
import Producto from "./Producto"
class Productos extends Component{
  constructor(){
    super()
    this.state={
      loading:true,
      productos:[]
    }
  }
  componentDidMount(){
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=samsung")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      this.setState({
        loading:false,
        productos:data.results
      })
    })
  }
  render(){
    
    if(this.state.loading){
      return(
        <div>Cargando...</div>
      )
    }else{
      return(
        <div>
          
          {this.state.productos.map(element=><Producto datos={element} />)}
        </div>
      )
    }
    
  }
}


export default Productos;
