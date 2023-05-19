async function loadTopMovies()
{
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=a871e25dfc6211adfb17ab5730e67358`);
    const movie = await response.json();
    console.log(movie);

      
  let movieList = movie.results;
  
  let topmovies = document.querySelector("#topmovies");
  
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

  topmovies.innerHTML = htmlContent;
}
function storeMovieID(id){
    localStorage.setItem('selectedMovieID', id);
    localStorage.setItem("lastPageVisited", "topMovies");
  
  }