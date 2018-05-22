<template>
    <button @click="this.clickFunction" class="button" v-bind:class="{'button--warning' : this.warning, 'button--danger' : this.danger, 'button--success': this.success}">
     {{text}} 
    </button>
</template>

<script>
export default {
    name: "MyButton",
    props: ["text", "warning", "danger", "success", "clickFunction"]
};
</script>

 <style lang="scss" scoped>
.button {
    padding: 10px;
    border:none;
    border-radius: 5px;
    font-size: 1em;
    width: 100%;
    margin-top: 10px;
    cursor: pointer;
    color: white;

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
