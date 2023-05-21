const navbarTemplate = (homeLink, searchLink, topMoviesLink, aboutLink) => `
  <nav class="navbar navbar-expand-lg bg-body-tertiary px-4">
    <div class="container-fluid">
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand mx-auto" href="${homeLink}">FILMHIVE</a>
      <div class="search-icon-link d-lg-none d-xl-none">
      <a href="${searchLink}" class="search-icon-link d-lg-none d-xl-none">
        <i class="bi bi-search"></i> 
      </a>
     </div>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      
        <ul class="navbar-nav">
          <li class="nav-item" data-page="home">
            <a class="nav-link" href="${homeLink}">Home</a>
          </li>
          <li class="nav-item" data-page="search">
            <a class="nav-link" href="${searchLink}">Search</a>
          </li>
          <li class="nav-item" data-page="topmovies">
            <a class="nav-link" href="${topMoviesLink}">Popular Movies</a>
          </li>
          <li class="nav-item" data-page="about">
            <a class="nav-link" href="${aboutLink}">About</a>
          </li>
        </ul>
                 
      </div>
      
    </div>
    </div>
  </nav>


`;


function loadNavigation(containerId, currentPage) {
  let homeLink, searchLink, topMoviesLink, aboutLink;

  if (currentPage === 'home') {
    homeLink = 'index.html';
    searchLink = 'pages/search.html';
    topMoviesLink = 'pages/topMovies.html';
    aboutLink = 'pages/About.html';
  } else {
    homeLink = '../index.html';
    searchLink = 'search.html';
    topMoviesLink = 'topMovies.html';
    aboutLink = 'About.html';
  }

  document.getElementById(containerId).innerHTML = navbarTemplate(homeLink, searchLink, topMoviesLink, aboutLink);

  setActiveNavItem(currentPage);
}


function setActiveNavItem(currentPage) {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((navItem) => {
    const navLink = navItem.querySelector('.nav-link');
    if (navItem.dataset.page === currentPage) {
      navLink.classList.add('active');  
    }
  });
}
function storeSearchTerm() {
  var searchTerm = document.getElementById('search-input').value;
  localStorage.setItem('lastSearchTerm', searchTerm);
}


