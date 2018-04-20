<template>
  <div id="app">

      <!-- Header -->      
      <div class="app-shell__header-wrapper">

        <!-- Icon -->
        <div class="app-shell__icon-wrapper"> KGSM ICON </div>

        <!-- Title -->
        <div class="app-shell__title-wrapper">KGSM Fitness Tracker</div>

        <!-- Hamburger -->
        <div class="app-shell__hamburger-wrapper">
         <svg class="app-shell__hamburger-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve">
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg> 
        </div>
      </div>

      <!-- Actual Content Rendered Via Router --> 
      <router-view/>
      
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: -8px;
}

.app-shell__header-wrapper {
  padding: 10px;
  background-color: #007fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.app-shell__icon-wrapper {
  flex: 0 0 auto;
}

.app-shell__title-wrapper {
  flex: 1 1 auto;
  text-align: center;
}

.app-shell__hamburger-wrapper {
  flex: 0 0 auto;
  cursor: pointer;
}

.app-shell__hamburger-wrapper:hover .app-shell__hamburger-icon {
  fill: white;
}
</style>
