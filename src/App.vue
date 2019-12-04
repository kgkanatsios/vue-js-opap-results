<template>
  <div id="app">
    <b-navbar>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <router-link to="/" v-slot="{ href, navigate, isActive }" exact>
            <b-nav-item :active="isActive" :href="href" @click="navigate">Home</b-nav-item>
          </router-link>
          <b-nav-item-dropdown text="Templates">
            <router-link to="/template1" v-slot="{ href, navigate, isActive }">
              <b-nav-item :active="isActive" :href="href" @click="navigate">Template 1 {{ params }}</b-nav-item>
            </router-link>
          </b-nav-item-dropdown>
          <router-link to="/joker" v-slot="{ href, navigate, isActive }">
            <b-nav-item :active="isActive" :href="href" @click="navigate">Joker</b-nav-item>
          </router-link>
          <router-link to="/lotto" v-slot="{ href, navigate, isActive }">
            <b-nav-item :active="isActive" :href="href" @click="navigate">Lotto</b-nav-item>
          </router-link>
          <router-link to="/proto" v-slot="{ href, navigate, isActive }">
            <b-nav-item :active="isActive" :href="href" @click="navigate">Proto</b-nav-item>
          </router-link>
          <router-link to="/extra5" v-slot="{ href, navigate, isActive }">
            <b-nav-item :active="isActive" :href="href" @click="navigate">Extra 5</b-nav-item>
          </router-link>
          <router-link to="/super3" v-slot="{ href, navigate, isActive }">
            <b-nav-item :active="isActive" :href="href" @click="navigate">Super 3</b-nav-item>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Didact Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d427c;
}
.navbar {
  border-bottom: 2px solid #1d427c;
  margin-bottom: 20px;
  ul.navbar-nav {
    li.nav-item {
      margin: 0px 2px;
      a.nav-link {
        color: #1d427c;
        border-radius: 4px;
        &:hover,
        &.active {
          background: #1d427c;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
