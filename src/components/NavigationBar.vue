<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <a class="navbar-brand" href="/">{{title}}</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Show navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbar" class="navbar-collapse collapse">
                <ul class="navbar-nav mr-auto">
                    <slot/>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "NavigationBar",
        props: ['title']
    }
</script>

<style scoped>
    header {
        height: 70px;
    }
</style>
