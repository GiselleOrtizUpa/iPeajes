import { NavLink } from 'react-router-dom';
import React from 'react';

const LoginForm = () => {
    return (
        <form className="user">
            <div className="form-group">
                <input type="email" className="form-control form-control-user"
                    id="exampleInputEmail" aria-describedby="emailHelp"
                    placeholder="Ingresa tu correo..."/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control form-control-user"
                    id="exampleInputPassword" placeholder="Tu contraseña..."/>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox small">
                    <input type="checkbox" className="custom-control-input" id="customCheck"/>
                    <label className="custom-control-label" for="customCheck">Recuerdame</label>
                </div>
            </div>
            <NavLink to="index.html" className="btn btn-success btn-user btn-block">
                Iniciar sesión
            </NavLink>
            <hr/>
            <NavLink to="index.html" className="btn btn-google btn-user btn-block">
                <i className="fab fa-google fa-fw"></i> Iniciar con Google
            </NavLink>
            <NavLink to="index.html" className="btn btn-facebook btn-user btn-block">
                <i className="fab fa-facebook-f fa-fw"></i> Iniciar con Facebook
            </NavLink>
        </form>
    );
}

export default LoginForm;