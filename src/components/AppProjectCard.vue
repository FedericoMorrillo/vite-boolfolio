<!--js-->
<script>
export default {
    name: 'ProjectCard',
    props: {

        project: {
            type: Object,
        }
    }
}
</script>
<!--/js-->

<!--html-->
<template>
    <div class="card">
        <div class="card-body">
            <h5>Titolo:{{ project.title }}</h5>
            <p> descrizione:{{ project.description }}</p>
            <div class="d-flex justify-content-between">
                <div>
                    tipo: {{ project.type.title }}
                </div>
                <div>
                    ultimo commit: {{ project.last_commit }}
                </div>
            </div>
        </div>
    </div>
</template>
<!--/html-->

<!--scss-->
<style scoped>
.card {
    background-color: rgb(97, 112, 241);
}
</style>
<!--/scss-->