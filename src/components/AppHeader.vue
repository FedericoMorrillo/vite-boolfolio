<!--js-->
<script>
export default {
    name: 'Header',
}
</script>
<!--/js-->

<!--html-->
<template>
    <header>
        <div class="container d-flex justify-content-between py-3">
            <!--titolo-->
            <div>
                <h1 class="text-white">Boolfolio</h1>
            </div>
            <!--/titolo-->

            <!--nav-->
            <ul class="d-flex align-items-center">
                <li class="me-3">
                    <router-link :to="{ name: 'Home' }">Home</router-link>
                </li>
                <li class="me-3">
                    <router-link :to="{ name: 'About' }">About</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Projects' }">Project list</router-link>
                </li>
            </ul>
            <!--/nav-->
        </div>

    </header>
</template>
<!--/html-->

<!--scss-->
<style scoped>
header {
    background-color: rgb(97, 112, 241);

    li {
        list-style: none;

        a {
            font-weight: 600;
            color: white;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
<!--/scss-->