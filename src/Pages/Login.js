import React,{Component} from "react"

class Login extends Component {

    render() {
        
    return (
        <div class="wrap">
            <h1 class="register-title">Bienvenido</h1>
            <form class="register">
                <input type="email" class="register-input" placeholder="Direccion e-mail"></input>
                <input type="password" class="register-input" placeholder="Contrasena"></input>
                <input type="submit" value="Ingresar" class="register-button"></input>
            </form>
        </div>
    );
  }
  
}

export default Login;
