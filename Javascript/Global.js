

const navbarTemplate = (homeLink, searchLink, topMoviesLink, aboutLink) => `
  <nav class="navbar navbar-expand-lg bg-body-tertiary px-4">
    <div class="container-fluid">
      
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <a class="navbar-brand mx-auto" href="${homeLink}"><img src="/Assets/images/Filmhive_logo.png" width=180vh></a>
      <div class="search-icon-link d-lg-none d-xl-none">
      <a href="${searchLink}" class="search-icon-link d-lg-none d-xl-none">
        <i class="bi bi-search"></i> 
      </a>
     </div>
      <div class="offcanvas offcanvas-end " tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
      <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="navbarOffcanvasLgLabel">FILMHIVE</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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



var appleTouchIcon = document.createElement("link");
appleTouchIcon.rel = "apple-touch-icon";
appleTouchIcon.sizes = "180x180";
appleTouchIcon.href = "/Assets/Favicon/apple-touch-icon.png";
document.head.appendChild(appleTouchIcon);

var favicon32x32 = document.createElement("link");
favicon32x32.rel = "icon";
favicon32x32.type = "image/png";
favicon32x32.sizes = "32x32";
favicon32x32.href = "/Assets/Favicon/favicon-32x32.png";
document.head.appendChild(favicon32x32);


var favicon16x16 = document.createElement("link");
favicon16x16.rel = "icon";
favicon16x16.type = "image/png";
favicon16x16.sizes = "16x16";
favicon16x16.href = "/Assets/Favicon/favicon-16x16.png";
document.head.appendChild(favicon16x16);


var siteManifest = document.createElement("link");
siteManifest.rel = "manifest";
siteManifest.href = "/Assets/Favicon/site.webmanifest";
document.head.appendChild(siteManifest);
