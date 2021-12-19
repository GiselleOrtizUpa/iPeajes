import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';

import App from './pages/App';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Peajes from './pages/Peajes';
import Consorcios from './pages/Consorcios';
import Usuarios from './pages/Usuarios';
import ConseguirTarjeta from './pages/ConseguirTarjeta';
import RecargarTarjeta from './pages/RecargarTarjeta';
import Transacciones from './pages/Transacciones';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/peajes" element={<Peajes/>} />
        <Route exact path="/consorcios" element={<Consorcios/>} />
        <Route exact path="/usuarios" element={<Usuarios/>} />
        <Route exact path="/conseguirtarjeta" element={<ConseguirTarjeta/>} />
        <Route exact path="/recargartarjeta" element={<RecargarTarjeta/>} />
        <Route exact path="/historial" element={<Transacciones/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
