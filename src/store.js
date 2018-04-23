import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Root state object
const state = {
  sidebarOpen: false
};

// Mutations to mutate the state
const mutations = {
  toggleSidebar(state) {
    state.sidebarOpen = !state.sidebarOpen;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
