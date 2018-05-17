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
        padding: 10px;
        border: 1px solid gray;
        border-radius: 5px;
        font-size: 1em;
        width: 100%;
        margin-top: 10px;

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

    .button:hover {
        background: #eee;
    }
</style>
