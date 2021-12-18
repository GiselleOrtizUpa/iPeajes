import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ToTopButton from "../components/ToTopButton";
import Search from "../components/Search";
import Buttons from "../components/Buttons";

const Usuarios = () => {
    return (
        <body id="page-top">

            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">

                <Sidebar />

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        <Topbar />

                        {/* <!-- Begin Page Content --> */}
                        <div class="container-fluid">

                            {/* <!-- Page Heading --> */}
                            <h1 class="h3 mb-4 text-gray-800">Usuarios</h1>
                            <Search/>
                            <div class="table-responsive">
                            <table class="table table-bordered  table-striped table-responsive" id="usertable">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col"hidden>Contraseña</th>
                                    <th scope="col"hidden>Rol</th>
                                    <th scope="col">Cédula</th>
                                    <th scope="col"hidden>Correo</th>
                                    <th scope="col">Cargo</th>
                                    <th scope="col" hidden>Imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>informacion</td>
                                <td>informacion</td>
                                <td>informacion</td>
                                <td>informacion</td>
                                <td>informacion</td>
                            </tbody>
                            </table>
                            </div>
                            <form>
                            <div class="row mb-3">
                                    <label for="inputNombre" class="col-sm-2 col-form-label">Nombre</label>
                                    <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputNombre" name="usuarios_nombre"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputApellido" class="col-sm-2 col-form-label">Apellido</label>
                                    <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputApellido" name="usuarios_apellido"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail" class="col-sm-2 col-form-label">Correo</label>
                                    <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail" name="usuarios_correo"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputUsuario" class="col-sm-2 col-form-label">Usuario</label>
                                    <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputUsuario" name="usuarios_usuario"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
                                    <div class="col-sm-4">
                                    <input type="password" class="form-control" id="inputPassword" name="usuarios_clave"></input>
                                    </div>
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Confirmar</label>
                                    <div class="col-sm-4">
                                    <input type="password" class="form-control" id="inputConfirmar" name="usuarios_confirmar"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputCedula" class="col-sm-2 col-form-label">Cédula</label>
                                    <div class="col-sm-10">
                                    <input type="number" class="form-control" id="inputCedula" name="usuarios_cedula"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputCargo" class="col-sm-2 col-form-label">Rol</label>
                                    <div class="col-sm-4">
                                    <select class="form-control" name="usuarios_rol" id="inputRol" >
                                        <option value="administrador">Administrador</option>
                                        <option value="interno">Usuario interno</option>
                                        <option value="externo">Usuario externo</option>
                                    </select>
                                    </div>
                                </div>
                            </form>
                            <Buttons/>
                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    <Footer />

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}

            <ToTopButton />

        </body>
    );
}

export default Usuarios;