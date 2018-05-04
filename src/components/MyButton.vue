<template>
    <button class="button" v-bind:class="{'button--warning' : this.warning, 'button--danger' : this.danger, 'button--success': this.success}">
     {{text}} 
    </button>
</template>

<script>
export default {
    name: "MyButton",
    props: ["text", "warning", "danger", "success"]
};
</script>

 <style lang="scss" scoped>
    .button {
        padding: 5px;
        border: 1px solid black;

        &--warning {
            background: orange;
        }

        &--danger {
            background: red;
        }

        &--success {
            background: green;
        }
    }
</style>
