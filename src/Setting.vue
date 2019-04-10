<template>
    <p>
        <label :for="inputId">{{ name }}</label>
        <slot/>
    </p>
</template>

<script>
export default {
    name: 'setting',
    props: {
        name: String,
        inputId: String
    }
}
</script>

<style>

</style>
