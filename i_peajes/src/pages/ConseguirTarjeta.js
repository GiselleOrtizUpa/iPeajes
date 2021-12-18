import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ToTopButton from "../components/ToTopButton";

const ConseguirTarjeta = () => {
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
                            <h1 class="h3 mb-4 text-gray-800">Conseguir Tarjeta</h1>
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
                                    <label for="inputUsuario" class="col-sm-2 col-form-label">Numero Tarjeta:</label>
                                    <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputUsuario" name="usuarios_usuario"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputUsuario" class="col-sm-2 col-form-label">Saldo inicial</label>
                                    <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputUsuario" name="usuarios_usuario"></input>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary btn-lg">Procesar</button>
                                </form>

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

export default ConseguirTarjeta;