<template>
  <div id="app">
    <h1>Todo App</h1>
    <h3>Completed:{{CompletedTodos}}</h3>
      <h3>Remaining:{{PendingTodos}}</h3>
   <TodoForm /><br>
  <TodosList />
 
  </div>
</template>

<script>
import TodosList from './components/TodosList'
import TodoForm from './components/TodoForm'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    TodosList,
    TodoForm
  },
  data(){
    return{filter:'all'}
  },
  computed:{
    ...mapGetters(["CompletedTodos","PendingTodos"])
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
