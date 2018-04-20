<template>
  <div class="user-landing-page">
    <h2> Welcome Back {{user.firstName}} </h2>

    <div>
      SOME GREAT INFO WILL GO HERE
    </div>

    <h3> Recently... </h3>

    <div class="quick-facts__wrapper">
      
      <!-- Recently Logged Workouts -->
      <div class="quick-facts__column">
        <h4> Recent Workouts </h4>
        <div class="quick-facts__fact" v-for="workout in recentlyLogged">
          {{workout.name}} <br>
          {{workout.date.toDateString()}}
        </div>
      </div>

      <!-- Recent Maximums -->
      <div class="quick-facts__column">
        <h4> Latest Maxes </h4>
        <div class="quick-facts__fact" v-for="maximum in recordedMaxes">
          {{maximum.exerciseName}}: {{maximum.weight}} <br>
          Recorded: {{maximum.date.toDateString()}}
          </div>
      </div>

      <!-- Goals -->
      <div class="quick-facts__column">
        <h4> Your Goals </h4>
        <div class="quick-facts__fact" v-for="goal in goals">
          {{goal.text}} <br>
          {{goal.progressPercent}}% Complete <br>
          Due Date: {{goal.date.toDateString()}}
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
.quick-facts__column {
  font-family: "Montserrat", sans-serif;
}
.quick-facts__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: row-wrap;
}
.quick-facts__column {
  background: rgba(200, 230, 250, 1);
  flex: 1 1 33.33%;
  margin: 5px;
  padding: 10px;
}

.quick-facts__column > h4 {
  margin: 0;
  padding: 5px 0;
  line-height: 25px;
}

.quick-facts__fact {
  padding: 10px 0;
}
</style>
