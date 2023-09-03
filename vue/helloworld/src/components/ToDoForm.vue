<template>
    <form>
        <label>What need to be done? </label>
        <input type="text" v-model.lazy.trim="label" />
        <button @click="onSubmit"> Add </button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                label: "",
            }
        },
        methods: {
            onSubmit() {
                console.log('Label value: ', this.label);
                if (this.label === "") {
                    return;
                }
                this.$emit('sendInput', this.label);
            }
        },
    };
</script>
