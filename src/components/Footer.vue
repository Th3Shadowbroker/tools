<template>
    <footer class="footer text-muted text-center">
        <div class="container">
            <slot/>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer {
        text-align: center;
        width: 100%;
    }
</style>
