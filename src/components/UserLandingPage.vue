<template>
  <div>
    <h2> Welcome Back {{user.firstName}} </h2>

    <div class="recently-logged__wrapper">

      <!-- Recently Logged Workouts -->
      <div class="recently-logged__column">
        <div v-for="workout in recentlyLogged">
          {{workout.name}} 
          {{workout.date.toDateString()}}
        </div>
      </div>

      <!-- Recent Maximums -->
      <div class="recently-logged__column">
        <div v-for="maximum in recordedMaxes">
          {{maximum.exerciseName}} 
          {{maximum.weight}}
          {{maximum.date.toDateString()}}
          </div>
      </div>

      <!-- Goals -->
      <div class="recently-logged__column">
        <div v-for="goal in goals">
          {{goal.text}} 
          {{goal.progressPercent}}
          {{goal.date.toDateString()}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "GettingStarted",
  data: () => {
    return {
      user: {
        firstName: "Kevin",
        lastName: "O'Hearon"
      },
      recentlyLogged: [
        {
          name: "Back & Biceps",
          date: new Date()
        },
        {
          name: "Shoulder & Legs",
          date: new Date()
        }
      ],
      recordedMaxes: [
        {
          exerciseName: "Bench Press",
          weight: "105 lbs",
          date: new Date()
        },
        {
          exerciseName: "Back Squat",
          weight: "225 lbs",
          date: new Date()
        }
      ],
      goals: [
        {
          text: "Run 45 min without stopping",
          progressPercent: 25,
          date: new Date()
        },
        {
          text: "5 Strict Pull Ups",
          progressPercent: 35,
          date: new Date()
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recently-logged__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: row-wrap;
}
.recently-logged__column {
  flex: 1 1 33.33%;
}
</style>
