<template>
  <div class="modal">

    <div class="modal__content-wrapper">

      <!-- Header -->
      <div class="modal__header-wrapper">

        <!-- Title And Date Completed -->
        <div class="modal__workout-information-wrapper">

          <!-- Title or Loading Grey Bar -->
          <div v-if="loading" class="modal__loading-title"></div>
          <span v-else class="modal__title"> {{title}} </span>

          <!-- Date Completed or loading grey bar -->
          <div v-if="loading" class="modal__loading-date-completed"></div>
          <span class="modal__date-completed">{{dateCompleted}}</span>
        </div>

        <!-- Close Icon -->
        <div class="modal__close-icon-wrapper" v-on:click="closeFunction">
          <svg class="modal__close-icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/>
          </svg>
        </div>
        
      </div>

      <!-- Content -->
      <div class="modal__inner-content-wrapper">

        <!-- Exercise Records -->
        <div class="modal__exercise-records-wrapper">
          
          <div class="modal__exercise-record-wrapper" v-for="exercise in exerciseData" v-bind:key="exercise.id">

            <!-- Name -->
            <span class="modal__exercise-entry-name"> {{exercise.exerciseName}} </span>

            <!-- Sets Information -->
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
  props: ["title", "dateCompleted", "closeFunction", "loading"],
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@keyframes fadeInFromTop {
   0% {
      opacity: 0;
      transform: translateY(-40px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
} 

@keyframes loadContent {
  0% {
    opacity: 1;
  }
  50%{
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);

  &__content-wrapper {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 4px 20px 0 rgba(0, 0, 0, 0.19);
    background: white;
    margin: 15% auto;
    width: 80%;
    padding: 20px;
    animation: fadeInFromTop 0.4s cubic-bezier(0.465, 0.183, 0.153, 0.946);

  }

  &__header-wrapper {
    padding-bottom: 15px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  &__workout-information-wrapper {
    flex: 0 0 auto;
  }

  &__title {
    font-size: 24px;
    display: block;
    margin-bottom: 5px;
  }

  &__loading-title{
    margin-bottom: 5px;
    height: 27.6px;
    width: 200px;
    background-color: rgb(217, 217, 217);
    animation: loadContent 1.75s ease infinite;
  }

  &__date-completed {
    font-size: 16px;
    display: block;
  }

  &__loading-date-completed{
    height: 27.6px;
    width: 100px;
    background-color: rgb(217, 217, 217);
    animation: loadContent 1.75s ease infinite;
  }


  &__close-icon-wrapper {
    flex: 1 1 auto;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
  }

  &__close-icon {
    width: 20px;
    height: 20px;
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
