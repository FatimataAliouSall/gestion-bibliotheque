<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">Gestion Bibliotheque</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 custom-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" routerLink="/">Acceuil</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gestion des livres
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" routerLink="/livres">Affichier listes livre</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" routerLink="/livres/ajout">Ajout un livre</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" routerLink="/livres/modifier">Modifier un livre</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" routerLink="/livres/supprimer">Supprimer un livre</a></li>
              </ul>
            </li>
  
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gestion des membres
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" routerLink="/membres">Affichier listes membres</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" routerLink="/membres/ajout">Ajout un membre</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" routerLink="/membres/modifier">Modifier un membre</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" routerLink="/membres/supprimer">Supprimer un membre</a></li>
              </ul>
            </li>
  
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gestion des prêts
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" routerLink="/prets">Affichier listes prêts</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" routerLink="/prets/ajout">Ajout un prêt</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" routerLink="/prets/modifier">Modifier un prêt</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" routerLink="/prets/supprimer">Supprimer un prêt</a></li>
              </ul>
            </li>
          </ul>
  
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  .custom-nav .nav-item {
    margin-right: 20px;
  }
  
  .navbar {
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .nav-item {
    margin-right: 20px;
  }
  </style>
  