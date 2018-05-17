<template>
  <div>
    <div class="sign-in-form">
      <h1> Login </h1>
      <form>
        <input class="sign-in-form__input" placeholder="Username" />
        <input class="sign-in-form__input" placeholder="Password" />
        <my-button text="Login" />
      </form>
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton/MyButton";

export default {
  name: "GettingStarted",
  components: {
    MyButton
  } 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

.sign-in-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  border: 1px solid gray;
  padding: 10px 0;
  margin: 0 0 10px;
}

.sign-in-form__input {
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 2px solid grey;
  transition: all 0.2s ease;
  font-size: 1em;
  overflow: hidden;
  display: block;
}

.sign-in-form__input:focus {
  outline: none;
  border-bottom: 2px solid #007fff;
}
</style>
