<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer,
  },

  data() {
    return {

    }
  },
}
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style lang="scss" scoped>
@use './assets/scss/app.scss';
@use './assets/scss/partials/variable.scss' as *;
</style>
