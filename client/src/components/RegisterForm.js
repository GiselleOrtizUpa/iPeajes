import React from 'react';
// import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <form class="user">
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" id="exampleFirstName"
                        placeholder="Nombres"/>
                </div>
                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user" id="exampleLastName"
                        placeholder="Apellidos"/>
                </div>
            </div>
            <div class="form-group">
                <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                    placeholder="Correo electrónico"/>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" class="form-control form-control-user"
                        id="exampleInputPassword" placeholder="Contraseña"/>
                </div>
                <div class="col-sm-6">
                    <input type="password" class="form-control form-control-user"
                        id="exampleRepeatPassword" placeholder="Confirma tu contraseña"/>
                </div>
            </div>
            <a href="login.html" class="btn btn-success btn-user btn-block">
                Registrar cuenta
            </a>
            <hr/>
            <a href="index.html" class="btn btn-google btn-user btn-block">
                <i class="fab fa-google fa-fw"></i> Registrar con Google
            </a>
            <a href="index.html" class="btn btn-facebook btn-user btn-block">
                <i class="fab fa-facebook-f fa-fw"></i> Registrar con Facebook
            </a>
        </form>
    );
}

export default RegisterForm;