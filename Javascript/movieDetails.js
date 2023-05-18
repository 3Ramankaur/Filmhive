async function loadMovieDetails() {
    const movieId = localStorage.getItem("selectedMovieID");
    const movieDetails = document.getElementById('movieDetails');

    const response = await fetch(`http://www.omdbapi.com/?apikey=7f739014&i=${movieId}`);
    const movie = await response.json();
    console.log(movie);

    let detailsHTML = `
    <div class="container my-4">
      <div class="row">
        <div class="col-lg-4">
          <img src="${movie.Poster}" class="img-fluid" alt="${movie.Title}">
        </div>
        <div class="col-lg-8">
          <h2 class="my-3">${movie.Title} (${movie.Year}) <span class="badge bg-warning text-dark ms-3"><i class="fab fa-imdb"></i> ${movie.imdbRating}/10</span></h2>
          <p class="mb-0"><i class="bi bi-list"></i> <strong>Genre:</strong> ${movie.Genre}</p>
          <p class="mb-0"><i class="bi bi-megaphone"></i> <strong>Directed by:</strong> ${movie.Director}</p>
          <p class="mb-0"><i class="bi bi-people-fill"></i> <strong>Cast:</strong> ${movie.Actors}</p>
          <p class="mb-0"><i class="bi bi-globe2"></i> <strong>Language:</strong> ${movie.Language}</p>
          <p><i class="bi bi-geo-alt"></i> <strong>Country:</strong> ${movie.Country}</p>
          <h5 class="my-3">Plot</h5>
          <p>${movie.Plot}</p>
        </div>
      </div>
    </div>
  `;
  
      
        movieDetails.innerHTML = detailsHTML;
    }

    loadMovieDetails();

    function goBackAndSearch() {
        var lastSearchTerm = localStorage.getItem("lastSearchTerm");
        if (lastSearchTerm) {
            window.location.href = `search.html`;
        } else {
            window.location.href = "../index.html";
        }
    }
    
  