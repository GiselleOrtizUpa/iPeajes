import React from 'react';
import { NavLink } from 'react-router-dom';



const ToTopButton = () => {
    return (
        <NavLink className="scroll-to-top rounded" to="#page-top">
            <i className="fas fa-angle-up"></i>
        </NavLink>
    );
}

export default ToTopButton;