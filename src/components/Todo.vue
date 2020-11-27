<template>
    <div style="width:250px;margin:5px auto;">
        <div style="display:flex;justify-content:space-between">
      <span :class="{completed:todo.completed}" @click="toggleTodoStatus">{{todo.title}}</span>
        <button @click="deleteTodo">Delete</button>
        </div>
        </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'Todo',
    props:['todo'],
    methods:{
deleteTodo(){
    this.$store.dispatch('deleteTodo',this.todo)
},
toggleTodoStatus(){
    this.$store.dispatch('ToggleTodo',this.todo)
}
    }
})
</script>
<style scoped>
.completed{
    text-decoration: line-through;
}
</style>