import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ToTopButton from "../components/ToTopButton";

const RecargarTarjeta = () => {
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
                            <h1 class="h3 mb-4 text-gray-800">Recargar Tarjeta</h1>
                            <div class="row g-0">
    <div class="col-md-4">
      
      <img src="/img/card.png"  width="100%"  alt="tarjeta"></img>

    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Tarjeta RFID</h2>
        <br></br>
        <h3 class="card-text">Numero: 111-111-111-111</h3>
        <br></br>
        <h3>Saldo: $200.000</h3>
        <br></br>
        <div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Valor a Recargar:</label>
  </div>
  <div class="col-auto">
    <input type="text" id="inputPassword6" class="form-control"></input>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Minimo $10.000
    </span>
  </div>
  
</div>
<button type="button" class="btn btn-primary btn-lg">Recargar</button>
        <p class="card-text"><small class="text-muted">Ultima recarga: hace dos meses</small></p>
      </div>
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

export default RecargarTarjeta;