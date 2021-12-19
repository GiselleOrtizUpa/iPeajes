import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const NotFound = () => {
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

                        {/* <!-- 404 Error Text --> */}
                        <div class="text-center">
                            <div class="error mx-auto" data-text="404">404</div>
                            <p class="lead text-gray-800 mb-5">Página no encontrada</p>
                            <p class="text-gray-500 mb-0">Parece que has encontrado un fallo en la matrix...</p>
                            <Link to='/' >&larr; Volver al inicio</Link>
                        </div>

                    </div>
                    {/* <!-- /.container-fluid --> */}

                </div>
                {/* <!-- End of Main Content --> */}
                
                <Footer/>

            </div>
            {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}
        </body>
    );
}

export default NotFound;