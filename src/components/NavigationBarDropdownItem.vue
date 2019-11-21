<template>
    <RouterLink class="dropdown-item" :to="url">{{name}}</RouterLink>
</template>

<script>
    export default {
        name: "NavigationBarDropdownItem",
        props: ['url', 'name']
    }
</script>

<style scoped>

</style>
