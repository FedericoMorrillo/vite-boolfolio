<!-- js -->
<script>
import AppProjectCard from '../components/AppProjectCard.vue'
import axios from 'axios';
export default {
    name: 'ProjectList',

    data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000',
            apiUrls: {
                projects: '/api/projects'
            },
        }
    },
    components: {
        AppProjectCard,
    },
    methods: {
        getprojects() {
            axios.get(this.baseUrl + this.apiUrls.projects).then(response => {
                this.projects = response.data.data;
                console.log(response)
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.getprojects();
    },
}
</script>
<!-- /js -->

<!-- html -->
<template>
    <div class="container">
        <div class="row my-5 mx-auto">
            <div class="col-md-4 g-3" v-for="project in projects">
                <AppProjectCard :project=project />
            </div>
        </div>
    </div>
</template>
<!-- /html -->

<!-- scss -->
<style scoped lang="scss"></style>
<!-- /scss -->