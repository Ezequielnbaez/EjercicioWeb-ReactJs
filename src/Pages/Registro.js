import React,{Component} from "react"

class Registro extends Component {

  render(){
    return (
        <div class="wrap">
            <h1 class="register-title">Bienvenido</h1>
            <form class="register">
                <div class="register-switch">
                    <input type="radio" name="sex" value="F" id="sex_f" class="register-switch-input" checked></input>
                        <label for="sex_f" class="register-switch-label">Femenino</label>
                        <input type="radio" name="sex" value="M" id="sex_m" class="register-switch-input"></input>
                        <label for="sex_m" class="register-switch-label">Masculino</label>
                </div>
                        <input type="email" class="register-input" placeholder="Direccion e-mail"></input>
                        <input type="password" class="register-input" placeholder="Contrasena"></input>
                        <input type="submit" value="Crear cuenta" class="register-button"></input>
            </form>
        </div>
    );
  }
  
}

export default Registro;
