<template>
    <input type="checkbox" :checked="isDone" />
    <label>{{label}}</label>
</template>

<script>
export default {
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean },
        id: { required: true, type: String },
    },
    data() {
        return {
            isDone: this.done,
        }
    }
};
</script>