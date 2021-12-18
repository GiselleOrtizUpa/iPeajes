import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ToTopButton from "../components/ToTopButton";

const Consorcios = () => {
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
                            <h1 class="h3 mb-4 text-gray-800">Consorcios</h1>
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped table-responsive" id="peajetable">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td >Nombre</td>                                
                                    <td >Descripción</td>
                                </tbody>
                                </table>
                            </div>
                            <form>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="nombre"></input>
                                    </div>
                                </div>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="descripcion" class="col-sm-2 col-form-label">Descripción</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="descripcion"></input>
                                    </div>
                                </div>
                            </form>
                            <div class="row mb-3 d-flex justify-content-center">
                                    <div class="btn-group btn-group-justified">
                                        <button type="submit" class="btn btn-success btn-lg">Agregar</button>
                                        <button type="submit" class="btn btn-warning btn-lg">Editar</button>
                                        <input type="reset" value="Limpiar formulario" class="btn btn-dark"></input>
                                    </div>
                                </div>
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

export default Consorcios;