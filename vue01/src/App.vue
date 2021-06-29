<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/event">Event</router-link> |
    <router-link to="/form01">Form01</router-link> |
    <router-link to="/form02">Form02</router-link> |
    <router-link to="/cond01">Cond01</router-link> |
    <router-link to="/cond02">Cond02</router-link> |
    <router-link to="/cond03">Cond03</router-link> |
    <router-link to="/cond04">Cond04</router-link> |
    <router-link to="/cond05">Cond05</router-link> |
    <router-link to="/cond06">Cond06</router-link> |
    <router-link to="/vuex01">Vuex01</router-link> |
    <router-link to="/article/110">Article</router-link> |
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
