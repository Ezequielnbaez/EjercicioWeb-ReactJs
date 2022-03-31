import React, {useState,useEffect} from "react"
import { useParams,Link } from "react-router-dom"

function DetalleProducto() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    useEffect(
        () => { 
            fetch("https://api.mercadolibre.com/items/" + id)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log(data);
                        setProducto(data);
                        setLoading(false);
                    }
                })
            },
        [id]
    )
    if (loading) {
        return (
            < div >
                Cargando...
            </div>
        )
    }
    else {
        return (
            <div className="card">
                <img src={producto.thumbnail} />
                <h1>{producto.title}Hola</h1>
                <p className="price">Precio:{producto.price}$</p>
                <p className="stock">Stock:{producto.available_quantity}</p>
                <p>ID:{producto.id}</p>
                <p><button><Link to={'/producto/' + producto.id} >Comprar</Link></button></p>
            </div>
        )
    }
    

}

export default DetalleProducto;
