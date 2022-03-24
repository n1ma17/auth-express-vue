<template>
  <Login />
</template>


<script>
import Login from "./components/Login.vue";
export default {
components:{
  Login
}
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
