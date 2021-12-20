import { useState, useEffect } from "react";
import Axios from "axios";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ToTopButton from "../components/ToTopButton";
import Search from "../components/Search";

function Peajes() {
  const [consorcio, setConsorcio] = useState("");
  const [nombrePeaje, setNombrePeaje] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [vCategoriaUno, setVCategoriaUno] = useState(0);
  const [vCategoriaDos, setVCategoriaDos] = useState(0);
  const [vCategoriaTres, setVCategoriaTres] = useState(0);
  const [vCategoriaCuatro, setVCategoriaCuatro] = useState(0);
  const [vCategoriaCinco, setVCategoriaCinco] = useState(0);

  const [newNombrePeaje, setNewNombrePeaje] = useState("");
  const [newVCategoriaUno, setNewVCategoriaUno] = useState(0);
  const [newVCategoriaDos, setNewVCategoriaDos] = useState(0);
  const [newVCategoriaTres, setNewVCategoriaTres] = useState(0);
  const [newVCategoriaCuatro, setNewVCategoriaCuatro] = useState(0);
  const [newVCategoriaCinco, setNewVCategoriaCinco] = useState(0);

  const addPeaje = () => {
    Axios.post("http://localhost:3001/add-peaje", {
      consorcio: consorcio,
      nombrePeaje: nombrePeaje,
      latitud: latitud,
      longitud: longitud,
      vCategoriaUno: vCategoriaUno,
      vCategoriaDos: vCategoriaDos,
      vCategoriaTres: vCategoriaTres,
      vCategoriaCuatro: vCategoriaCuatro,
      vCategoriaCinco: vCategoriaCinco,
    });
  };

  
  const [listPeaje, setListPeaje] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3001/list-peaje").then((response) => {
      setListPeaje(response.data);
    });
  }, []);
    
    const updatePeaje = (id) => {
      Axios.put("http://localhost:3001/update-peaje", {
          id: id, 
          newNombrePeaje: newNombrePeaje,
          newVCategoriaUno: newVCategoriaUno,
          newVCategoriaDos: newVCategoriaDos,
          newVCategoriaTres: newVCategoriaTres,
          newVCategoriaCuatro: newVCategoriaCuatro,
          newVCategoriaCinco: newVCategoriaCinco,
      });
    };

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
              <Search />
              <div class="table-responsive">
                <table
                  class="table table-bordered table-striped table-responsive"
                  id="peajetable"
                >
                  <thead>
                    <tr>
                      <th scope="col">Consorcio</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Latitud</th>
                      <th scope="col">Longitud</th>
                      <th scope="col">Categoria 1</th>
                      <th scope="col">Categoria 2</th>
                      <th scope="col">Categoria 3</th>
                      <th scope="col">Categoria 4</th>
                      <th scope="col">Categoria 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listPeaje.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td id="td">{val.consorcio}</td>
                          <td id="td">{val.nombrePeaje}</td>
                          <td id="td">{val.latitud}</td>
                          <td id="td">{val.longitud}</td>
                          <td id="td">{val.vCategoriaUno}</td>
                          <td id="td">{val.vCategoriaDos}</td>
                          <td id="td">{val.vCategoriaTres}</td>
                          <td id="td">{val.vCategoriaCuatro}</td>
                          <td id="td">{val.vCategoriaCinco}</td>
                          <button class="btn btn-danger btn-lg">
                            Eliminar
                          </button>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <h2>Agrega un nuevo peaje</h2>
              <form>
                <div class="row mb-3 d-flex justify-content-center">
                  <label for="consorcio" class="col-sm-2 col-form-label">
                    Consorcio
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="consorcio"
                      onChange={(event) => {
                        setNombrePeaje(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div class="row mb-3 d-flex justify-content-center">
                  <label for="nombre" class="col-sm-2 col-form-label">
                    Nombre
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="nombre"
                      onChange={(event) => {
                        setConsorcio(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div class="row mb-3 d-flex justify-content-center">
                  <label for="latitud" class="col-sm-2 col-form-label">
                    Latitud
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="latitud"
                      onChange={(event) => {
                        setLatitud(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div class="row mb-3 d-flex justify-content-center">
                  <label for="longitud" class="col-sm-2 col-form-label">
                    Longitud
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="longitud"
                      onChange={(event) => {
                        setLongitud(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div class="row mb-3 d-flex justify-content-center">
                  <label for="categoria1" class="col-sm-2 col-form-label">
                    Valor categoria 1
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="categoria1"
                      onChange={(event) => {
                        setVCategoriaUno(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div class="row mb-3 d-flex justify-content-center">
                  <label for="categoria2" class="col-sm-2 col-form-label">
                    Valor categoria 2
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="categoria2"
                      onChange={(event) => {
                        setVCategoriaDos(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div class="row mb-3 d-flex justify-content-center">
                  <label for="categoria3" class="col-sm-2 col-form-label">
                    Valor categoria 3
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="categoria3 "
                      onChange={(event) => {
                        setVCategoriaTres(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div class="row mb-3 d-flex justify-content-center">
                  <label for="categoria4" class="col-sm-2 col-form-label">
                    Valor categoria 4
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="categoria4"
                      onChange={(event) => {
                        setVCategoriaCuatro(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div class="row mb-3 d-flex justify-content-center">
                  <label for="categoria5" class="col-sm-2 col-form-label">
                    Valor categoria 5
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="categoria5"
                      onChange={(event) => {
                        setVCategoriaCinco(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                {/* <Buttons/> */}
                <div class="row mb-3 d-flex justify-content-center">
                  <div class="btn-group btn-group-justified">
                    <button class="btn btn-success btn-lg" onClick={addPeaje}>
                      Agregar
                    </button>
                    {/* <button type="submit" class="btn btn-warning btn-lg">Editar</button> */}
                    {/* <button type="submit" class="btn btn-danger btn-lg">Eliminar</button> */}
                    <input
                      type="reset"
                      value="Limpiar formulario"
                      class="btn btn-dark"
                    ></input>
                  </div>
                </div>
              </form>

              <hr />

              <h2>Modificar peajes existentes</h2>
              {listPeaje.map((val, key) => {
                return (
                  <div>
                    <form>

                      <div class="row mb-3 d-flex justify-content-center">
                        <label for="nombre" class="col-sm-2 col-form-label">
                          Nombre
                        </label>
                        <div class="col-sm-9">
                          <input
                            disabled
                            value={val.nombrePeaje}
                            type="text"
                            class="form-control"
                            id="nombre"
                          ></input>
                          <input
                            placeholder="Nuevo valor..."
                            type="text"
                            class="form-control"
                            id="nombre"
                            onChange={(event) => {
                              setNewNombrePeaje(event.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      <div class="row mb-3 d-flex justify-content-center">
                        <label for="categoria1" class="col-sm-2 col-form-label">
                          Valor categoria 1
                        </label>
                        <div class="col-sm-9">
                          <input
                            disabled
                            value={val.vCategoriaUno}
                            type="number"
                            class="form-control"
                            id="categoria1"
                          ></input>
                          <input
                            placeholder="Nuevo valor..."
                            type="text"
                            class="form-control"
                            onChange={(event) => {
                              setNewVCategoriaUno(event.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      <div class="row mb-3 d-flex justify-content-center">
                        <label for="categoria2" class="col-sm-2 col-form-label">
                          Valor categoria 2
                        </label>
                        <div class="col-sm-9">
                          <input
                            disabled
                            value={val.vCategoriaDos}
                            type="number"
                            class="form-control"
                            id="categoria2"
                          ></input>
                          <input
                            placeholder="Nuevo valor..."
                            type="text"
                            class="form-control"
                            onChange={(event) => {
                              setNewVCategoriaDos(event.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      <div class="row mb-3 d-flex justify-content-center">
                        <label for="categoria3" class="col-sm-2 col-form-label">
                          Valor categoria 3
                        </label>
                        <div class="col-sm-9">
                          <input
                            disabled
                            value={val.vCategoriaTres}
                            type="number"
                            class="form-control"
                            id="categoria3 "
                          ></input>
                          <input
                            placeholder="Nuevo valor..."
                            type="text"
                            class="form-control"
                            onChange={(event) => {
                              setNewVCategoriaTres(event.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      <div class="row mb-3 d-flex justify-content-center">
                        <label for="categoria4" class="col-sm-2 col-form-label">
                          Valor categoria 4
                        </label>
                        <div class="col-sm-9">
                          <input
                            disabled
                            value={val.vCategoriaCuatro}
                            type="number"
                            class="form-control"
                            id="categoria4"
                          ></input>
                          <input
                            placeholder="Nuevo valor..."
                            type="text"
                            class="form-control"
                            onChange={(event) => {
                              setNewVCategoriaCuatro(event.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      <div class="row mb-3 d-flex justify-content-center">
                        <label for="categoria5" class="col-sm-2 col-form-label">
                          Valor categoria 5
                        </label>
                        <div class="col-sm-9">
                          <input
                            disabled
                            value={val.vCategoriaCinco}
                            type="number"
                            class="form-control"
                            id="categoria5"
                          ></input>
                          <input
                            placeholder="Nuevo valor..."
                            type="text"
                            class="form-control"
                            onChange={(event) => {
                              setNewVCategoriaCinco(event.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      {/* <Buttons/> */}
                      <div class="row mb-3 d-flex justify-content-center">
                        <div class="btn-group btn-group-justified">
                          <button class="btn btn-warning btn-lg" onChange={()=> updatePeaje(val._id)}>
                            Editar
                          </button>
                          <button class="btn btn-danger btn-lg">
                            Eliminar
                          </button>
                          <input
                            type="reset"
                            value="Limpiar formulario"
                            class="btn btn-dark"
                          ></input>
                        </div>
                      </div>
                    </form>
                    <hr />
                  </div>
                );
              })}
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
