import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import MyButton from './MyButton.vue';

storiesOf('Button', module)
    .add('Regular', 
        () => ({
        components: {MyButton},
        template: '<my-button text="Button"></my-button>'
    }))
    .add('Warning', 
        () => ({
        components: {MyButton},
        template: '<my-button warning="true" text="Button"></my-button>'
    }))
    .add('Danger', 
        () => ({
        components: {MyButton},
        template: '<my-button danger="true" text="Button"></my-button>'
    }))
    .add('Success', 
        () => ({
        components: {MyButton},
        template: '<my-button success="true" text="Button"></my-button>'
    }));