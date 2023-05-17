function loadNavigation()
{
    document.getElementById('navigation').innerHTML = `    
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
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/search.html">Search</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/topMovies.html">Top Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/About.html">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`
}
function loadNavigation1()
{
    document.getElementById('navigation1').innerHTML = `    
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
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="../index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="search.html">Search</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="topMovies.html">Top Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="About.html">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`
}