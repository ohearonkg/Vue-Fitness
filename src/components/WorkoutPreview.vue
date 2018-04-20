<template>
  <div class="workout-preview">
    
    <span class="workout-preview__heading"> 
      Today's Workout <br>
      <span class="workout-preview__workout-name"> {{name}} </span>
    </span>

    <div class="workout-preview__exercises-preview-wrapper">
      <div class="workout-preview__exercise" v-for="exercise in exercises">
        Name: {{exercise.name}} <br>
        Sets: {{exercise.sets}}
      </div>
      <div class="workout-preview__exercise"> ... </div>
    </div>
    <span class="workout-preview__heading">
      START WORKOUT 
    </span>
  </div>
</template>

<script>
export default {
  name: "GettingStarted",
  data: () => {
    return {
      name: "Shoulders and Legs",
      estimatedTime: "65 min",
      exercises: [
        {
          name: "Leg Press",
          sets: "5 x 3"
        },
        {
          name: "Back Squat",
          sets: "5 x 3"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.workout-preview {
  background: lavender;
  display: inline-block;
  padding: 10px;
}

.workout-preview__heading {
  font-size: 18px;
  font-weight: bold;
}

.workout-preview__workout-name {
  font-weight: normal;
  display: inline-block;
  border-bottom: 1px solid grey;
  margin-top: 5px;
}

.workout-preview__exercise {
  padding: 10px 0;
}
</style>
