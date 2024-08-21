<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Gestion Bibliotheque</router-link>
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
            <router-link class="nav-link active" aria-current="page" to="/">Accueil</router-link>
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
              <li><router-link class="dropdown-item" to="/livres">Afficher listes livres</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/livres/ajout">Ajouter un livre</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/livres/modifier">Modifier un livre</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/livres/supprimer">Supprimer un livre</router-link></li>
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
              <li><router-link class="dropdown-item" to="/membres">Afficher listes membres</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/membres/ajout">Ajouter un membre</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/membres/modifier">Modifier un membre</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/membres/supprimer">Supprimer un membre</router-link></li>
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
              Gestion des Prêts
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/prets">Afficher liste des prêts</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/prets/ajout">Ajouter un prêt</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/prets/modifier">Modifier un prêt</router-link></li>
              <li><router-link class="dropdown-item" to="/prets/supprimer">Supprimer un prêt</router-link></li>
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
  margin-right: 50px;
}

.navbar {
  padding-left: 100px;
  padding-right: 100px;
}

.nav-item {
  margin-right: 20px;
}

.navbar-brand{
  margin-right:60px;
}
</style>
