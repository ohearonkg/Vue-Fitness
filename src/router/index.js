import Vue from 'vue';
import Router from 'vue-router';
import GettingStarted from '@/components/GettingStarted';
import UserLandingPage from '@/components/UserLandingPage';
import Calandar from '@/components/Calandar';
import Modal from '@/components/Modal/Modal';
import CategoryList from '@/components/CategoryList/CategoryList';
import ExerciseListPage from '@/components/ExerciseListPage';
import ExercisePage from '@/components/ExercisePage';

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
      path: '/exercises',
      name: 'ExerciseListPage',
      component: ExerciseListPage
    },
    {
      path: '/exercise/:exerciseId',
      name: 'Exercise',
      component: ExercisePage,
      props: route => ({exerciseId: route.params.exerciseId})
    }
  ],
});
