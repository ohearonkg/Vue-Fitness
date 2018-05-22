import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import MyButton from '../src/components/MyButton/MyButton.vue';
import Modal from '../src/components/Modal/Modal.vue';
import CategoryList from '../src/components/CategoryList/CategoryList.vue';
import LogScreen from '../src/components/LogScreen/LogScreen.vue';

// Register custom components.
Vue.component('my-button', MyButton);
Vue.component('modal', Modal);
Vue.component('category-list', CategoryList);
Vue.component('log-screen', LogScreen);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/components/MyButton/MyButton.story');
  require('../src/components/Modal/Modal.story');
  require('../src/components/CategoryList/CategoryList.story');
  require('../src/components/LogScreen/LogScreen.story');
}

configure(loadStories, module);