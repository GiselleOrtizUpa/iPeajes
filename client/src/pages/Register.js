import { Link } from 'react-router-dom';

import RegisterForm from '../components/RegisterForm';

const Register = () => {
    return (
        <body class="bg-gradient-success">

            <div class="container">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">¡Crea tu cuenta!</h1>
                                    </div>
                                    <RegisterForm />
                                    <hr/>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">¿Olvidaste tu contraseña?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="login.html">¿Ya tienes una cuenta? !Inicia sesión!</a>
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