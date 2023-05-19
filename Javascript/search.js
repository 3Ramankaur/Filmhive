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
  let url = `https://api.themoviedb.org/3/search/movie?api_key=a871e25dfc6211adfb17ab5730e67358&query=${searchValue}`;
  let movieData = await fetch(url);
  let movieDataJson = await movieData.json();
  console.log(movieDataJson);
  
  let movieList = movieDataJson.results;
  
  let movieDetails = document.querySelector("#movieDetails");
  
  let htmlContent = `<div class="container"><div class="row">`;

  movieList.forEach(movie => {
    if(movie.poster_path){
      htmlContent += `
      <div class="col-lg-2 col-md-4 col-sm-6 mb-4">
        <div class="card h-100">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.original_title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">Release Year: ${movie.release_date}</p>
            <a href="movieDetails.html" class="btn btn-primary" onclick="storeMovieID('${movie.id}')">More details</a>
          </div>
        </div>
      </div>
    `;
    }
  });

  htmlContent += `</div></div>`;

  movieDetails.innerHTML = htmlContent;
}

function storeMovieID(id){
  localStorage.setItem('selectedMovieID', id);
}
