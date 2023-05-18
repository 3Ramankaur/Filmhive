document.addEventListener("DOMContentLoaded", function() {
  const searchFocus = document.getElementById('search-focus');

  const lastSearchTerm = localStorage.getItem("lastSearchTerm");
  if (lastSearchTerm) {
      searchFocus.value = lastSearchTerm;
      loading(lastSearchTerm);
  }
});

function searchMovie(){
  var searchValue = document.getElementById("search-focus").value;
  loading(searchValue);
  localStorage.setItem("lastSearchTerm", searchValue);
}

async function loading(searchValue){
  let url = `http://www.omdbapi.com/?apikey=7f739014&s=${searchValue}`;
  let movieData = await fetch(url);
  let movieDataJson = await movieData.json();
  
  let movieList = movieDataJson.Search;
  
  let movieDetails = document.querySelector("#movieDetails");
  
  let htmlContent = `<div class="container"><div class="row">`;

  movieList.forEach(movie => {
    htmlContent += `
      <div class="col-lg-2 col-md-4 col-sm-6 mb-4">
        <div class="card h-100">
          <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">Release Year: ${movie.Year}</p>
            <a href="movieDetails.html" class="btn btn-primary" onclick="storeMovieID('${movie.imdbID}')">More details</a>
          </div>
        </div>
      </div>
    `;
  });

  htmlContent += `</div></div>`;

  movieDetails.innerHTML = htmlContent;
}

function storeMovieID(imdbID){
  localStorage.setItem('selectedMovieID', imdbID);
}
