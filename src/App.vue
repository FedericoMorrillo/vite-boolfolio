<!--js-->
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'boolfolio',
  components: {
    AppHeader,
    AppMain,
    AppFooter,

  },

};
</script>
<!--/js-->

<!--html-->
<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>
<!--/html-->

<!--scss-->
<style scoped></style>
<!--/scss-->