<template>
  <div id="app">
    <MyHeader />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
