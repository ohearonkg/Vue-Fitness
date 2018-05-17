import Vue from 'vue';
import Router from 'vue-router';
import GettingStarted from '@/components/GettingStarted';
import Calandar from '@/components/Calandar';
import Modal from '@/components/Modal/Modal';
import CategoryList from '@/components/CategoryList/CategoryList';

import UserLandingPage from '@/pages/UserLandingPage';
import MuscleGroupList from '@/pages/MuscleGroupList';
import ExercisePage from '@/pages/ExercisePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GettingStarted',
      component: GettingStarted,
    },
    {
      path: '/user',
      name: 'UserLandingPage',
      component: UserLandingPage,
    },
    {
      path: '/calandar',
      name: 'Calandar',
      component: Calandar,
    },
    {
      path: '/modal/:workoutId',
      name: 'CalandarWorkoutModal',
      component: Modal,
    },
    {
      path: '/muscleGroupList',
      name: 'MuscleGroupList',
      component: MuscleGroupList
    },
    {
      path: '/exercise/:exerciseId',
      name: 'Exercise',
      component: ExercisePage,
      props: route => ({exerciseId: route.params.exerciseId})
    }
  ],
});
