<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{name}}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <slot/>
        </div>
    </li>
</template>

<script>
    export default {
        name: "NavigationBarDropdown",
        props: ['name']
    }
</script>

<style scoped>

</style>
