import React, { Component } from "react"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <h4>Sobre nosotros</h4>
                    <ul className="lista">
                        <li>123-1234-5678</li>
                        <li>Springfield, US</li>
                        <li>Calle Falsa 123</li>
                        </ul>
                </div>
                <hr/>
                <div className="row">
                    <p className="colchica">
                        ©2012 Corporacion Umbrella | Ningun derecho reservado | Terminos de servicio | Privacidad
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;