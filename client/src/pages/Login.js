import {  NavLink } from "react-router-dom";

import LoginForm from "../components/LoginForm";

function Login() {
    return (
        <body className="bg-gradient-success">

            <div className="container">

                {/* <!-- Outer Row --> */}
                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">!Bienvenido de vuelta!</h1>
                                            </div>
                                            <LoginForm />
                                            <hr/>
                                            <div className="text-center">
                                                <NavLink className="small" to="forgot-password.html">¿Olvidaste tu contraseña?</NavLink>
                                            </div>
                                            <div className="text-center">
                                                <NavLink className="small" to="/Register">!Crea tu cuenta!</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            
        </body>
    );
}

export default Login;