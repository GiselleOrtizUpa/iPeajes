import React from 'react';

const Search = () => {
    return(
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Buscar..." id="searchbox" name="searchbox"></input>
            <button type="submit" className="input-group-text shadow-none px-4 btn-primary">
                <i className="fa-regular fa-rotate"></i>Buscar
            </button>
            <button type="submit" className="input-group-text shadow-none px-4 btn-dark">
                <i className="fa-solid fa-loader"></i>Refrescar
            </button>
        </div>
    );

}

export default Search;