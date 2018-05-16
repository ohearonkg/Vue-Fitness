import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import CategoryList from './CategoryList.vue';

storiesOf('Category List', module)
    .add('Exercise Categories', 
        () => ({
        components: {CategoryList},
        template: `<category-list 
            :categoryItems="[ 
                {
                    name: 'Back',
                    id: 1
                },
                {
                    name: 'Chest',
                    id: 2
                },
                {
                    name: 'Legs',
                    id: 3
                }
            ]"
        />`
        })
      )
 