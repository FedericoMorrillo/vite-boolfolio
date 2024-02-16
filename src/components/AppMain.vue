<!--js-->
<script>
import AppProjectCard from './AppProjectCard.vue'
export default {
    name: 'Main',
    props: ['projects'],

    components: {
        AppProjectCard,
    },
}
</script>
<!--/js-->

<!--html-->
<template>
    <div class="container">
        <div class="row my-5 mx-auto">
            <div class="col-md-4 g-3" v-for="project in projects">
                <AppProjectCard :project=project />
            </div>
        </div>
    </div>
</template>
<!--/html-->

<!--scss-->
<style scoped></style>
<!--/scss-->