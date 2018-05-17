import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import MyButton from '../src/components/MyButton/MyButton.vue';
import Modal from '../src/components/Modal/Modal.vue';

// Register custom components.
Vue.component('my-button', MyButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/components/MyButton/MyButton.story');
  require('../src/components/Modal/Modal.story');
}

configure(loadStories, module);