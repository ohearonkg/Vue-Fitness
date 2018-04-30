<template>
  <div class="modal">

    <!-- Actual Content -->
    <div class="modal__content-wrapper">

      <!-- Header -->
      <div class="modal__header-wrapper">
        <span class="modal__title">{{title}} </span>
        <span class="modal__date-completed">{{dateCompleted}}</span>
      </div>

      <!-- Content -->
      <div class="modal__inner-content-wrapper">

        <!-- Exercise Records -->
        <div class="modal__exercise-records-wrapper">
          <div class="modal__exercise-record-wrapper" v-for="exercise in exerciseData" v-bind:key="exercise.id">
            <span class="modal__exercise-entry-name"> {{exercise.exerciseName}} </span>
            <div class="modal__exercise-entries-wrapper">
              <div class="modal__exercise-entry-wrapper" v-for="(entry,index) in exercise.data" v-bind:key="entry.id">
                <span class="modal__exercise-entry"> Set {{index + 1}}: {{entry.reps}} x {{entry.weight}} {{entry.weightType}}</span>
              </div>
            </div>
          </div> 
        </div>

      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["title", "dateCompleted"],
  data: () => {
    return {
      exerciseData: [
        {
          id: "3",
          exerciseName: "Bench Press",
          data: [
            {
              id: 1,
              weight: 205,
              weightType: "lbs.",
              reps: 6
            },
            {
              id: 2,
              weight: 205,
              weightType: "lbs.",
              reps: 6
            },
            {
              id: 3,
              weight: 215,
              weightType: "lbs.",
              reps: 3
            }
          ]
        },
        {
          id: "4",
          exerciseName: "Back Squat",
          data: [
            {
              id: 4,
              weight: 205,
              weightType: "lbs.",
              reps: 6
            },
            {
              id: 5,
              weight: 205,
              weightType: "lbs.",
              reps: 6
            },
            {
              id: 6,
              weight: 215,
              weightType: "lbs.",
              reps: 3
            }
          ]
        },
        {
          id: "5",
          exerciseName: "Shoulder Press",
          data: [
            {
              id: 4,
              weight: 5,
              weightType: "lbs.",
              reps: 6
            },
            {
              id: 5,
              weight: 5,
              weightType: "lbs.",
              reps: 6
            },
            {
              id: 6,
              weight: 15,
              weightType: "lbs.",
              reps: 3
            }
          ]
        },
        {
          id: "6",
          exerciseName: "Tricep Pushdown",
          data: [
            {
              id: 4,
              weight: 205,
              weightType: "lbs.",
              reps: 6
            },
            {
              id: 5,
              weight: 205,
              weightType: "lbs.",
              reps: 6
            },
            {
              id: 6,
              weight: 215,
              weightType: "lbs.",
              reps: 3
            }
          ]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: rgba(0, 0, 0, 0.4);

  &__content-wrapper {
    background: white;
    margin: 15% auto;
    width: 80%;
    padding: 20px;
  }

  &__header-wrapper {
    padding-bottom: 15px;
  }

  &__title {
    font-size: 24px;
    display: block;
  }

  &__date-completed {
    font-size: 16px;
    display: block;
  }

  &__exercise-records-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  &__exercise-entry-name {
    font-size: 16px;
    font-weight: bold;
  }

  &__exercise-entry {
    display: block;
  }
}
</style>
