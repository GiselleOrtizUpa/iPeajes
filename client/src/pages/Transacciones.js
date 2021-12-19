import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ToTopButton from "../components/ToTopButton";

const Transacciones = () => {
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
                            <h1 class="h3 mb-4 text-gray-800">Historial de transacciones</h1>

<label for="fechai" class="col-sm-2 col-form-label">Fecha Inicial</label>
<select id="fechai"class="form-select" aria-label="Default select example">
  <option selected>21/01/1990</option>
  <option value="1">21/01/1990</option>
  <option value="2">21/01/1990</option>
  <option value="3">21/01/1990</option>
</select>
<label for="fechaf" class="col-sm-2 col-form-label">Fecha Final</label>
<select id="fechaf"class="form-select" aria-label="Default select example">
  <option selected>22/01/1990</option>
  <option value="1">21/01/1990</option>
  <option value="2">21/01/1990</option>
  <option value="3">21/01/1990</option>
</select>

<br></br>
<br></br>
<br></br>

    <table class="table table-striped">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Peaje</th>
      <th scope="col">Fecha</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Via al mar</td>
      <td>21/01/1990</td>
      <td>$12.000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Via al mar</td>
      <td>21/01/1990</td>
      <td>$12.000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Via al mar</td>
      <td>21/01/1990</td>
      <td>$12.000</td>
    </tr>
  </tbody>

  </table>

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

export default Transacciones;