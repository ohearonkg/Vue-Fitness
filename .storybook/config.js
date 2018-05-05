import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import MyButton from '../src/components/MyButton/MyButton.vue';

// Register custom components.
Vue.component('my-button', MyButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/components/MyButton/MyButton.story');
}

configure(loadStories, module);