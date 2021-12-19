import React from 'react';

const Search = () => {
    return(
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Buscar..." id="searchbox" name="searchbox"></input>
            <button type="submit" class="input-group-text shadow-none px-4 btn-primary">
                <i class="fa-regular fa-rotate"></i>Buscar
            </button>
            <button type="submit" class="input-group-text shadow-none px-4 btn-dark">
                <i class="fa-solid fa-loader"></i>Refrescar
            </button>
        </div>
    );

}

export default Search;