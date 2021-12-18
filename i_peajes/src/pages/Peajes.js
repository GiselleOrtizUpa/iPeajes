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
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped table-responsive justify-content-center" id="peajetable">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Longitud</th>
                                        <th scope="col">Latitud</th>
                                        <th scope="col">Categoria 1</th>
                                        <th scope="col">Categoria 2</th>
                                        <th scope="col">Categoria 3</th>
                                        <th scope="col">Categoria 4</th>
                                        <th scope="col">Categoria 5</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td >Nombre</td>                                
                                    <td >Longitud</td>
                                    <td >Latitud</td>
                                    <td >Categoria 1</td>
                                    <td >Categoria 2</td>
                                    <td >Categoria 3</td>
                                    <td >Categoria 4</td>
                                    <td >Categoria 5</td>
                                </tbody>
                                </table>
                            </div>
                            <form >
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="nombre"></input>
                                    </div>
                                </div>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="longitud" class="col-sm-2 col-form-label">Longitud</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="longitud"></input>
                                    </div>
                                </div>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="latitud" class="col-sm-2 col-form-label">Latitud</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="latitud"></input>
                                    </div>
                                </div>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="categoria1" class="col-sm-2 col-form-label">Valor categoria 1</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria1"></input>
                                    </div>
                                </div>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="categoria2" class="col-sm-2 col-form-label">Valor categoria 2</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria2"></input>
                                    </div>
                                </div>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="categoria3" class="col-sm-2 col-form-label">Valor categoria 3</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria3"></input>
                                    </div>
                                </div>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="categoria4" class="col-sm-2 col-form-label">Valor categoria 4</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria4"></input>
                                    </div>
                                </div>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <label for="categoria5" class="col-sm-2 col-form-label">Valor categoria 5</label>
                                    <div class="col-sm-9">
                                        <input type="number" class="form-control" id="categoria5"></input>
                                    </div>
                                </div>
                                <div class="row mb-3 d-flex justify-content-center">
                                    <div class="btn-group btn-group-justified">
                                        <button type="submit" class="btn btn-success btn-lg">Agregar</button>
                                        <button type="submit" class="btn btn-warning btn-lg">Editar</button>
                                        <button type="submit" class="btn btn-danger btn-lg">Eliminar</button>
                                        <input type="reset" value="Limpiar formulario" class="btn btn-dark"></input>
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