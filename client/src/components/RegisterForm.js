import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <form className="user">
            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                        placeholder="Nombres"/>
                </div>
                <div className="col-sm-6">
                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                        placeholder="Apellidos"/>
                </div>
            </div>
            <div className="form-group">
                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                    placeholder="Correo electrónico"/>
            </div>
            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" className="form-control form-control-user"
                        id="exampleInputPassword" placeholder="Contraseña"/>
                </div>
                <div className="col-sm-6">
                    <input type="password" className="form-control form-control-user"
                        id="exampleRepeatPassword" placeholder="Confirma tu contraseña"/>
                </div>
            </div>
            <NavLink to="login.html" className="btn btn-success btn-user btn-block">
                Registrar cuenta
            </NavLink>
            <hr/>
            <NavLink to="index.html" className="btn btn-google btn-user btn-block">
                <i className="fab fa-google fa-fw"></i> Registrar con Google
            </NavLink>
            <NavLink to="index.html" className="btn btn-facebook btn-user btn-block">
                <i className="fab fa-facebook-f fa-fw"></i> Registrar con Facebook
            </NavLink>
        </form>
    );
}

export default RegisterForm;