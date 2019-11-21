<template>
    <RouterLink class="nav-link active" :to="url">{{name}}</RouterLink>
</template>

<script>
    export default {
        name: "NavigationBarItem",
        props: ['url', 'name']
    }
</script>

<style scoped>

</style>
