<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ShowBoard/>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import AddBoard from './components/AddBoard.vue'
//import BoardList from './components/BoardList.vue'
//import EditBoard from './components/EditBoard.vue'
import ShowBoard from './components/ShowBoard.vue'

export default {
  name: 'app',
  components: {
//  HelloWorld,
//  BoardList,
    ShowBoard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
