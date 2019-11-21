<template>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                    {{name}}
                </button>
            </h2>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
            <div class="card-body">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CollapseCard",
        props: ['name']
    }
</script>

<style scoped>

</style>
