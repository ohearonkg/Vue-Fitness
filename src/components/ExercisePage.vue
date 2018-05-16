<template>
  <div class="exercise-page">
    <div v-if="exerciseId == 1">
      <category-list :categoryItems="exercises"/>
    </div>
    <div v-else>
      No exercies for body part with id {{exerciseId}} added yet
    </div>
  </div>
</template>

<script>
import CategoryList from "./CategoryList/CategoryList";
export default {
  name: "ExercisePage",
  props: ["exerciseId"],
  components: {
    CategoryList
  },
  data: () => {
    return {
      exercises: [
        {
          name: 'Lat Pull Down',
          id: 17
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
