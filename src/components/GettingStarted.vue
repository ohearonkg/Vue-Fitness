<template>
  <div>
    <h1> Getting Started </h1>
    <p>
      Enter your username and password below, or sign up to started
      tracking!
    </p>

    <div class="sign-in-form">
      <input class="sign-in-form__input" placeholder="Username" />
      <input class="sign-in-form__input" placeholder="Password" />
    </div>

  </div>
</template>

<script>
export default {
  name: "Getting Started"
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
}

.sign-in-form__input {
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 2px solid grey;
  transition: all 0.2s ease;
}

.sign-in-form__input:focus {
  outline: none;
  border-bottom: 2px solid #007fff;
}
</style>
