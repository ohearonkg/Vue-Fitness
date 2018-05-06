import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Modal from './Modal.vue';

storiesOf('Modal', module)
    .add('Basic', 
        () => ({
        components: {Modal},
        template: '<modal loading="true" closeFunction="() => {return}" />'
    }))