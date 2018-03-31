<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    }
  },
  mounted:function(){
    return false;
  }
}
</script>

<style>
  #app {
    text-align: center;
  }
</style>
