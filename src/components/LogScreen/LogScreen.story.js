import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import LogScreen from './LogScreen.vue';

storiesOf('Log Screen', module)
    .add('Basic', 
        () => ({
        components: {LogScreen},
        template: '<log-screen />'
        })
      )
 