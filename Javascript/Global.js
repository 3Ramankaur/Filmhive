const navbarTemplate = (homeLink, searchLink, topMoviesLink, aboutLink) => `
  <nav class="navbar navbar-expand-lg bg-body-tertiary px-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">FILMHIVE</a>
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

