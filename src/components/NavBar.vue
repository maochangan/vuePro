<template>
  <div class="nav">
      <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
      return {
          msg: 'hello'
      }
  },
  mounted: function(){

  }
}
</script>

<style scoped>
.nav{
    margin-top: 10px;
    width: 100%;
    height: 100px;
    background-color: cyan;
    opacity: 1;
}
</style>
