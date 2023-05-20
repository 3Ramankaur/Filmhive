async function loadMovieDetails() {
    const movieId = localStorage.getItem("selectedMovieID");
    const movieDetails = document.getElementById('movieDetails');

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a871e25dfc6211adfb17ab5730e67358`);
    const movie = await response.json();
    console.log(movie);
    const genres = movie.genres;
    const hours = (movie.runtime / 60).toFixed(1);
    let detailsHTML = `
    <div class="container my-4">
      <div class="row">
        <div class="col-lg-4">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-fluid" alt="${movie.Title}">
        </div>
        <div class="col-lg-8">
          <h2 class="my-3">${movie.title} (${movie.release_date}) <span class="badge bg-warning text-dark ms-3"><i class="fab fa-imdb"></i> ${movie.vote_average.toFixed(1)}/10</span></h2>
          <p class="mb-0"><i class="bi bi-camera-reels"></i> <strong>Genre:</strong></p>
          `
          for(var i=0; i<genres.length;i++){
            const genreName = genres[i].name;
            detailsHTML += `
            <li>${genreName}</li>
          `; 
          }
          detailsHTML+= `
          <p class="mb-0"><i class="bi bi-alarm"></i> <strong>Runtime:</strong> ${hours} hours</p>
          <p class="mb-0"><i class="bi bi-globe2"></i> <strong>Homepage:</strong> <a href=${movie.homepage} target = "_blank">${movie.homepage}</a></p>
          <p><i class="bi bi-translate"></i> <strong>Language:</strong> ${movie.original_language}</p>
          <h5 class="my-3">Plot</h5>
          <p>${movie.overview}</p>
        </div>
      </div>
    </div>
  `;
        movieDetails.innerHTML = detailsHTML;
    }

    loadMovieDetails();

    function goBackAndSearch() {
      var lastSearchTerm = localStorage.getItem("lastSearchTerm");
      var lastPageVisited = localStorage.getItem("lastPageVisited");
      
      if (lastPageVisited === "index") {
          window.location.href = "../index.html";
      }
      else if(lastPageVisited === "topMovies") {
        window.location.href = "topMovies.html";
      }
      else if (lastPageVisited === "search" && lastSearchTerm) {
          window.location.href = "search.html";
      } 
      else {
          window.location.href = "../index.html";
      }
  }