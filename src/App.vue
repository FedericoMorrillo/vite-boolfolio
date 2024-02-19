<!--js-->
<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'boolfolio',

  components: {
    AppHeader,
    AppFooter,
  },

};
</script>
<!--/js-->

<!--html-->
<template>
  <AppHeader />
  <!-- <AppMain :projects=projects /> -->
  <router-view></router-view>
  <AppFooter />
</template>
<!--/html-->

<!--scss-->
<style scoped></style>
<!--/scss-->