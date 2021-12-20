import { NavLink } from 'react-router-dom';

import RegisterForm from '../components/RegisterForm';

const Register = () => {
    return (
        <body className="bg-gradient-success">

            <div className="container">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">¡Crea tu cuenta!</h1>
                                    </div>
                                    <RegisterForm />
                                    <hr/>
                                    <div classNameNA="text-center">
                                        <NavLink className="small" to="forgot-password.html">¿Olvidaste tu contraseña?</NavLink>
                                    </div>
                                    <div className="text-center">
                                        <NavLink className="small" to="login.html">¿Ya tienes una cuenta? !Inicia sesión!</NavLink>
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

export default Register;