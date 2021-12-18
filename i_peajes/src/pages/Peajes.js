import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ToTopButton from "../components/ToTopButton";

const Peajes = () => {
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
                            <h1 class="h3 mb-4 text-gray-800">Peajes</h1>
                            
                            <form>
                                <div class="row mb-3">
                                    <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="nombre"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="longitud" class="col-sm-2 col-form-label">Longitud</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="longitud"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="latitud" class="col-sm-2 col-form-label">Latitud</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="latitud"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="categoria1" class="col-sm-2 col-form-label">Valor categoria 1</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria1"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="categoria2" class="col-sm-2 col-form-label">Valor categoria 2</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria2"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="categoria3" class="col-sm-2 col-form-label">Valor categoria 3</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria3"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="categoria4" class="col-sm-2 col-form-label">Valor categoria 4</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria4"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="categoria5" class="col-sm-2 col-form-label">Valor categoria 5</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria5"></input>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-10 offset-sm-2">
                                    <div class="d-flex justify-content-evenly">
                                        <button type="submit" class="btn btn-success btn-lg">Agregar</button>
                                        <button type="submit" class="btn btn-warning btn-lg">Editar</button>
                                        <button type="submit" class="btn btn-danger btn-lg">Eliminar</button>
                                        <input type="reset" value="Limpiar formulario" class="btn btn-dark"></input>
                                        </div>
                                    </div>
                                </div>
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

export default Peajes;