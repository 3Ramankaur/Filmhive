function indexload(containerId, currentPage) {
    loadNavigation(containerId, currentPage);
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a871e25dfc6211adfb17ab5730e67358')
    .then(response => response.json())
    .then(data => {
        var topFiveMovies = data.results.slice(0, 5);
        let carouselItemsHTML = '';
  
        for(let i = 0; i < topFiveMovies.length; i++) {

            carouselItemsHTML += `

                <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <a href = "pages/movieDetails.html">
                    <img src="https://image.tmdb.org/t/p/w500/${topFiveMovies[i].poster_path}" onclick=storeMovieID(${topFiveMovies[i].id}); loadMovieDetails() class="d-block mx-auto my-auto" alt="..." style="max-width: 500px; max-height: 500px;">
                    <h3 onclick=storeMovieID(${topFiveMovies[i].id}) style="text-align:center">${topFiveMovies[i].original_title}<h3>
                </a>
                    </div>
            `; 
            
        }
  
        document.getElementById("topmovies").innerHTML +=
        `
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style="max-width: 800px; margin: auto auto">
            <div class="carousel-inner">
                ${carouselItemsHTML}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        `;
    })
    .catch(error => console.log(error));

    
  }


  function storeMovieID(id){
  localStorage.setItem('selectedMovieID', id);
  localStorage.setItem("lastPageVisited", "index");

}
  