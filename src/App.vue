<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">Pelanggan</router-link>
      <span class="separator"> / </span>
      <router-link to="/tambah-pelanggan" class="nav-link"
        :class="{ 'active': $route.path === '/tambah-pelanggan' }">Tambah Pelanggan</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}

.nav-link {
  text-decoration: none;
  color: #666;
  font-weight: bold;
}

.separator {
  color: #666;
  margin: 0 5px;
}

.active {
  color: #4caf50;
}
</style>
