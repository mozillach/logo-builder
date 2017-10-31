<template>
    <p>
        <label>{{ name }}</label>
        <slot/>
    </p>
</template>

<script>
export default {
    name: 'setting',
    props: {
        name: String
    }
}
</script>

<style>

</style>
