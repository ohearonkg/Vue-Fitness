<template>
  <div class="calandar">
    <h1> Calander </h1>
    <div class="calandar__month-indicator-wrapper">
      <div class="calandar__month-arrow-wrapper"> Previous </div>

      <div class="calandar__month-title-wrapper"> September </div>

      <div class="calandar__month-arrow-wrapper"> Next </div>
      
    </div>

    <div class="calandar__wrapper">

      <!-- Day Names -->
      <div class="calandar__day-name-wrapper" v-for="day in daysOfWeek" v-bind:key="day.key">
        {{day.name}}
      </div>

      <!-- Days -->
        <div 
          class="calandar__day-wrapper" 
          v-for="day in dayNumbers" 
          v-bind:key="`dayNumber-${day}`"
          @click="openModalFunction"
        >

          <div class="calandar__day-number-wrapper">
            {{day}}
          </div> 
          <div class="calandar__day-workout-name-wrapper">
            Back And Biceps
          </div>
        </div>
    </div>

    <!-- Modal To Show Data From Particular Day -->
    <modal v-if="dayModalOpen" title="Push Day" dateCompleted="24 May 2018" v-bind:closeFunction="closeModalFunction"/>
  </div>
</template>

<script>
import Modal from "./Modal";
import MyButton from "./MyButton";
import { mapMutations } from "vuex";

const dayNumbers = [];
for (let i = 1; i <= 31; i++) {
  dayNumbers.push(i);
}
export default {
  name: "Calandar",
  components: {
    Modal,
    MyButton
  },
  data() {
    return {
      daysOfWeek: [
        {
          name: "Sunday",
          key: 0
        },
        {
          name: "Monday",
          key: 1
        },
        {
          name: "Tuesday",
          key: 2
        },
        {
          name: "Wednesday",
          key: 3
        },
        {
          name: "Thrusday",
          key: 4
        },
        {
          name: "Friday",
          key: 5
        },
        {
          name: "Saturday",
          key: 6
        }
      ],
      dayNumbers,
      dayModalOpen: false
    };
  },
  methods: {
    ...mapMutations(["toggleModalOpen"]),
    openModalFunction() {
      this.dayModalOpen = true;
    },
    closeModalFunction() {
      this.dayModalOpen = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calandar__wrapper {
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calandar__month-indicator-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 25px;
}

.calandar__month-arrow-wrapper {
  flex: 0 0 auto;
}

.calandar__month-title-wrapper {
  flex: 1 1 auto;
  font-size: 26px;
  text-align: center;
}

.calandar {
  &__day-wrapper {
    border: 1px solid black;
    cursor: pointer;
    transition: all 0.1s ease;
    background: white;

    &:hover {
      transform: scale(1.1);
      box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
  }
}

.calandar__day-name-wrapper {
  text-align: center;
  border: 1px solid black;
}
.calandar__day-number-wrapper {
  display: inline-block;
  padding: 5px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}
.calandar__day-workout-name-wrapper {
  padding: 5px;
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.75s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
