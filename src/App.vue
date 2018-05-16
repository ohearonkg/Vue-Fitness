<template>
  <div class="app">

      <!-- Header -->      
      <div class="app-shell__header-wrapper">

        <!-- Icon -->
        <div class="app-shell__icon-wrapper"> </div>

        <!-- Title -->
        <div class="app-shell__title-wrapper">VueFIT</div>

        <!-- Hamburger -->
        <div class="app-shell__hamburger-wrapper" v-on:click="toggleSidebar"> 
          <svg 
          class="app-shell__hamburger-icon" 
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          height="32px" style="enable-background:new 0 0 32 32;" 
          version="1.1" 
          viewBox="0 0 32 32" 
          width="32px" 
          xml:space="preserve">
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
          </svg> 
          <sidebar :nav-items="navigationItems" />
        </div>
      </div>

      <!-- Actual Content Rendered Via Router --> 
      <div class="app__content-container">
        <router-view/>
      </div>
      
  </div>
</template>

<script>
import Sidebar from "./components/sidebar";
import { mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      navigationItems: [
        {
          text: "Home",
          location: "/user",
          id: "1"
        },
        {
          text: "Calandar",
          location: "/calandar",
          id: "2"
        },
        {
          text: "Logout",
          location: "/",
          id: "3"
        },
        {
          text: "Exercises",
          location: "/exercises",
          id: "4"
        }
      ]
    };
  },
  components: {
    Sidebar
  },
  methods: {
    ...mapMutations(["toggleSidebar"])
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  width: 100%;
  height: 100%;
  background: #eee;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Open Sans", sans-serif;

  &__content-container {
    padding: 10px;
  }
}

.app-shell {
  &__header-wrapper {
    padding: 10px;
    background-color: #007fff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__icon-wrapper {
    flex: 0 0 auto;
  }

  &__title-wrapper {
    flex: 1 1 auto;
    text-align: center;
    font-size: 2em;
  }

  &__hamburger-wrapper {
    flex: 0 0 auto;
    cursor: pointer;
  }

  &__hamburger-wrapper:hover &__hamburger-icon {
    fill: white;
  }
}
</style>
