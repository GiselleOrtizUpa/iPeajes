import { Link } from 'react-router-dom';
import React from 'react';

const LoginForm = () => {
    return (
        <form class="user">
            <div class="form-group">
                <input type="email" class="form-control form-control-user"
                    id="exampleInputEmail" aria-describedby="emailHelp"
                    placeholder="Ingresa tu correo..."/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control form-control-user"
                    id="exampleInputPassword" placeholder="Tu contraseña..."/>
            </div>
            <div class="form-group">
                <div class="custom-control custom-checkbox small">
                    <input type="checkbox" class="custom-control-input" id="customCheck"/>
                    <label class="custom-control-label" for="customCheck">Recuerdame</label>
                </div>
            </div>
            <a href="index.html" class="btn btn-success btn-user btn-block">
                Iniciar sesión
            </a>
            <hr/>
            <a href="index.html" class="btn btn-google btn-user btn-block">
                <i class="fab fa-google fa-fw"></i> Iniciar con Google
            </a>
            <a href="index.html" class="btn btn-facebook btn-user btn-block">
                <i class="fab fa-facebook-f fa-fw"></i> Iniciar con Facebook
            </a>
        </form>
    );
}

export default LoginForm;