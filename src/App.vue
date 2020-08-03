<template>
  <div id="app" class="id">
      <div></div>
      <keep-alive>
          <router-view>
          </router-view>
      </keep-alive>
      <div></div>
      <notifications group="foo" />
  </div>
</template>

<script>
  export default {
    name: 'App',
      components: {},
      computed: {}
  }
</script>

<style >
</style>
