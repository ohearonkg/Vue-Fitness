<template>
  <category-list :categoryItems="muscleGroups" />
</template>

<script>
import CategoryList from "../components/CategoryList/CategoryList"
export default {
  name: "MuscleGroupList",
  components: {
    CategoryList
  },
  data: () => {
    return {
      muscleGroups: [
        {
            name: 'Back',
            linkTo: '/exerciseList/1',
            id: 1
        },
        {
            name: 'Chest',
            linkTo: '/exerciseList/2',
            id: 2
        },
        {
            name: 'Legs',
            linkTo: '/exerciseList/3',
            id: 3
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
