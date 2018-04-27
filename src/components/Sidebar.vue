<template>
  <div class="sidebar" 
    v-bind:class="{'sidebar--open' : this.sidebarOpen, 'sidebar--closed' : !this.sidebarOpen }">
    <!-- Header Wrapper -->
    <div class="sidebar__header-wrapper">

      <div class="sidebar__close-icon-wrapper" v-on:click.stop="toggleSidebar">
        <svg class="sidebar__close-icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/>
        </svg>
      </div>

      <div class="sidebar__title-wrapper">
        MENU
      </div>

    </div>

    <!-- List of Items -->
    <div class="sidebar__list-wrapper">
      <div class="sidebar__list-item" v-for="navItem in navItems" v-bind:key="navItem.id">
        <router-link v-bind:to="navItem.location"> {{navItem.text}} </router-link>
       </div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "GettingStarted",
  props: ["navItems"],
  computed: {
    sidebarOpen() {
      return this.$store.state.sidebarOpen;
    }
  },
  methods: {
    ...mapMutations(["toggleSidebar"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  width: 20vw;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.3);
  z-index: 1;
  overflow: hidden;
  transition: all 0.2s ease;
}

.sidebar--open {
  opacity: 1;
}
.sidebar--closed {
  opacity: 0;
}

.sidebar__header-wrapper {
  width: 100%;
  background-color: #e6e8ec;
  display: flex;
  align-items: center;
}

.sidebar__close-icon-wrapper {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar__close-icon {
  width: 22px;
  height: 22px;
}

.sidebar__title-wrapper {
  font-size: 22px;
}

.sidebar__title-wrapper {
  flex: 1 1 auto;
  text-align: center;
}

.sidebar__list-wrapper {
  font-size: 20px;
  padding: 15px;
}

.sidebar__list-item {
  padding: 10px 0;
}
</style>
