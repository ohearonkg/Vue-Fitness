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

  </div>
</template>

<script>
import MyButton from "../MyButton/MyButton"
export default {
  name: "LogScreen",
  components: {
    MyButton
  }
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
}
</style>
