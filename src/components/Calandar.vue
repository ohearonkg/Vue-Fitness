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
      <div class="calandar__day-wrapper" v-for="day in dayNumbers" v-bind:key="`dayNumber-${day}`">
        <div class="calandar__day-number-wrapper">
          {{day}}
        </div> 
        <div class="calandar__day-workout-name-wrapper">
          Back And Biceps
        </div>
      </div>

    </div>
  </div>
</template>

<script>
const dayNumbers = [];
for (let i = 1; i <= 31; i++) {
  dayNumbers.push(i);
}
export default {
  name: "Calandar",
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
      dayNumbers
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calandar__wrapper {
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 50vh;
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

.calandar__day-wrapper {
  border: 1px solid black;
  cursor: pointer;
  background: white;
  transition: all 0.2s ease;
}

.calandar__day-wrapper:hover {
  transform: scale(1.1);
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
</style>
