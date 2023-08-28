<template>
    <form>
        <label for="new-todo-input">What need to be done? </label>
        <input 
            type="text" 
            id="new-todo-input" 
            name="new-todo" 
            autocomplete="off"
            v-model.lazy.trim="label" />
        <button type="submit" @submit.prevent="onSubmit"> Add </button>
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
                this.$emit('todo-added', this.label);
                this.label = "";
            }
        },
    };
</script>
