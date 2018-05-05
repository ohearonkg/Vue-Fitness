import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Modal from './Modal.vue';

storiesOf('Modal', module)
    .add('Loading', 
        () => ({
        components: {Modal},
        template: '<modal title="Sample Modal" dateCompleted="May 27 2017" loading="true"/>'
    }))
    .add('With Content', 
        () => ({
        components: {Modal},
        template: '<modal title="Sample Modal" dateCompleted="May 27 2017" />'
    }));