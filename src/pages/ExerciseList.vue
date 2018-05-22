<template>
  <category-list :categoryItems="exercises" />
</template>

<script>
import CategoryList from "../components/CategoryList/CategoryList";
export default {
  name: "ExerciseList",
  props: ["muscleGroupId"], 
  components: {
    CategoryList
  },
  data: () => {
    return {
      exercises: [
        {
            name: 'Back Extension',
            linkTo: '/exercise/1',
            id: 1
        },
        {
            name: 'Lat Pull Down',
            linkTo: '/exercise/2',
            id: 2
        },
        {
            name: 'Bent Over Row',
            linkTo: '/exercise/3',
            id: 3
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
