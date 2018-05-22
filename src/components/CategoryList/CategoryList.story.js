import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import CategoryList from './CategoryList.vue';

storiesOf('Category List', module)
    .add('Basic', 
        () => ({
        components: {CategoryList},
        template: '<category-list />'
        })
      )
 