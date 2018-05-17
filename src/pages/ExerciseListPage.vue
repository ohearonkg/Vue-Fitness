<template>
  <div>
    <h1> List of exercises </h1>
    <category-list :categoryItems="exercises" />
  </div>
</template>

<script>
import CategoryList from "../components/CategoryList/CategoryList"
export default {
  name: "ExerciseListPage",
  components: {
    CategoryList
  },
  data: () => {
    return {
      exercises: [
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
