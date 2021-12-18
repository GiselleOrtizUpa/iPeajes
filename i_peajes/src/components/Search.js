import React from 'react';

const Search = () => {
    return(
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Buscar..." id="searchbox" name="searchbox"></input>
            <button type="submit" class="input-group-text shadow-none px-4 btn-primary">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button type="submit" class="input-group-text shadow-none px-4 btn-dark">
                <i class="fa-solid fa-arrows-rotate"></i>
            </button>
        </div>
    );

}

export default Search;