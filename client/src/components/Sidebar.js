import { Link, NavLink } from 'react-router-dom';
import React from 'react';

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* <!-- Sidebar --> */}

            {/* <!-- Sidebar - Brand --> */}
            <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className=" ">
                <img  height="40" className="sidebar-brand-icon" src={process.env.PUBLIC_URL + '/logo.png'} alt="none" />
                </div>
                
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-home"></i>
                    <span>Inicio</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Gestión general
            </div>

            {/* <!-- Nav Item - Peajes y consorcios Collapse Menu --> */}
            <li className="nav-item">
                <NavLink className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-bicycle"></i>
                    <span>Peajes y consorcios</span>
                </NavLink>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link className="collapse-item" to="/peajes">Peajes</Link>
                        <Link className="collapse-item" to="/consorcios">Consorcios</Link>
                    </div>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Gestión de usuarios
            </div>

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/usuarios">
                <i className="fas fa-fw fa-users"></i>
                    <span>Ver usuarios</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Tarjetas RFID
            </div>

            {/* <!-- Nav Item - Tarjetas RFID Collapse Menu --> */}
            <li className="nav-item">
                <NavLink className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-credit-card"></i>
                    <span>Gestiona tu tarjeta</span>
                </NavLink>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link to="/conseguirtarjeta" className="collapse-item">Consigue tu tarjeta</Link>
                        <Link to="/recargartarjeta" className="collapse-item">Recargar tarjeta</Link>
                        <Link to="/historial" className="collapse-item">Historial de transacciones</Link>
                    </div>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* <!-- End of Sidebar --> */}
        </ul>
    );
}

export default Sidebar;