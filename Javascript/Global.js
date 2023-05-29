const navbarTemplate = (homeLink, searchLink, topMoviesLink, aboutLink, logoLink) => `
  <nav class="navbar navbar-expand-lg px-4" style="background-color: #f9edfa;">
  <div class="container-fluid no-padding">
  
    <button class="navbar-toggler custom-icon-size custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <a class="navbar-brand mx-auto" href="${homeLink}"><img src="${logoLink}" width=180vh></a>
      <div class="search-icon-link d-lg-none d-xl-none">
      <a href="${searchLink}" class="search-icon-link d-lg-none d-xl-none custom-icon-size">
        <i class="bi bi-search"></i> 
      </a>
     </div>
      <div class="offcanvas offcanvas-start " tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
      <div class="offcanvas-header">
      <a class="navbar-brand" href="${homeLink}"><img src="${logoLink}" width=180vh></a>
      <button type="button" class="btn-close text-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body justify-content-end">
        <ul class="navbar-nav justify-content-end">
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
  let homeLink, searchLink, topMoviesLink, aboutLink, logoLink ;

  if (currentPage === 'home') {
    homeLink = 'index.html';
    searchLink = 'pages/search.html';
    topMoviesLink = 'pages/topMovies.html';
    aboutLink = 'pages/About.html';
    logoLink = `Assets/images/Filmhive_logo.png`
  } else {
    homeLink = '../index.html';
    searchLink = 'search.html';
    topMoviesLink = 'topMovies.html';
    aboutLink = 'About.html';
    logoLink = `../Assets/images/Filmhive_logo.png`
  }

  document.getElementById(containerId).innerHTML = navbarTemplate(homeLink, searchLink, topMoviesLink, aboutLink, logoLink);

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
