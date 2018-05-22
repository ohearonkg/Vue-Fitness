<template>
  <div class="log-screen">

    <!-- Weight Field -->
    <div class="log-screen__input-wrapper log-screen__input-wrapper--first">
      <input type="text" class="log-screen__input">
    </div>

    <!-- Reps Field -->
    <div class="log-screen__input-wrapper">
      <input type="number" class="log-screen__input">
    </div>

    <!-- Buttons -->
    <div class="log-screen__buttons-wrapper">
      <div class="log-screen__button-wrapper log-screen__button-wrapper--first">
        <my-button success="true" text="LOG" />
      </div>

      <div class="log-screen__button-wrapper log-screen__button-wrapper--last">
        <my-button danger="true" text="DELETE" />
      </div>
    </div>

    <!-- Entered Data -->
    <table class="log-screen__records-table">
      <tr class="log-screen__record-row" v-for="(record,index) in this.recorded" v-bind:key="record.id">
        <td v-if="record.notes" class="log-screen__record-entry log-screen__record-entry--text-align-left"> 
          <svg class="log-screen__notes-icon log-screen__notes-icon--blue-fill" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1528 1280h-248v248q29-10 41-22l185-185q12-12 22-41zm-280-128h288v-896h-1280v1280h896v-288q0-40 28-68t68-28zm416-928v1024q0 40-20 88t-48 76l-184 184q-28 28-76 48t-88 20h-1024q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1344q40 0 68 28t28 68z"/>
          </svg>
        </td>
        <td v-else class="log-screen__record-entry log-screen__record-entry--text-align-left"> 
          <svg class="log-screen__notes-icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1528 1280h-248v248q29-10 41-22l185-185q12-12 22-41zm-280-128h288v-896h-1280v1280h896v-288q0-40 28-68t68-28zm416-928v1024q0 40-20 88t-48 76l-184 184q-28 28-76 48t-88 20h-1024q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1344q40 0 68 28t28 68z"/>
          </svg>
        </td>

        <td class="log-screen__record-entry"> {{ index + 1 }} </td>
        <td class="log-screen__record-entry"> {{ record.weight }} lbs</td>
        <td class="log-screen__record-entry"> {{ record.reps }} reps </td>
      </tr>
    </table>

  </div>
</template>

<script>
import MyButton from "../MyButton/MyButton"
export default {
  name: "LogScreen",
  components: {
    MyButton
  },
  data: () => ({
    recorded: [
      {
        reps: 2,
        weight: 55,
        notes: "Felt Heavy",
        id: 1
      },

      {
        reps: 3,
        weight: 45,
        notes: null,
        id: 2
      },
      {
        reps: 4,
        weight: 35,
        notes: "Litte too easy",
        id: 3
      },
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.log-screen {
  padding-top: 40px;

  &__buttons-wrapper {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
  }

  &__button-wrapper {
    flex: 0 0 25%;

    &--first{
      padding-right: 5px;
    }

    &--last{
      padding-left: 5px;
    }
  }

  &__input-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    &--first {
      padding-bottom: 80px;
    }
  }

  &__input {
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 32px;
    text-align: center;

    &:focus {
      outline: none;
      border-bottom: 2px solid blue;
    }
  }

  &__records-table {
    width: calc(100% - 80px);
    margin: 0 40px;
    border-collapse: collapse;
  }

  &__record-row {
    padding: 20px 0;
    border-bottom: 0.5px solid grey;
  }

  &__record-entry {
    text-align: right;
    padding: 10px 0;

    &--text-align-left {
      text-align: left;
    }
  }

  &__notes-icon {
    width: 20px;
    height: 20px;

    &--blue-fill {
      fill: blue;
      cursor: pointer;
    }
  }
}
</style>
