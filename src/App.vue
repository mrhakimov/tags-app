<template>
  <div id="app" class="id">
      <div class="head_logo">
          <div class="logo">
          <router-link :to="{name: 'mainPage'}">
<!--              <img src="./assets/images/logo.png">-->
          </router-link>
        </div>
      </div>
      <Main/>

  </div>

</template>

<script>
   import Main from "./components/Main";
    export default {
      name: 'App',
        components: {Main},
        computed: {

      }

}
</script>

<style lang="scss">

</style>
