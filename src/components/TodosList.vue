<template>
<div>
<div class="extra-container">
    <div>
    <button :class="{active:filter==='all'}" @click="changeFilter('all')">All</button>
    <button :class="{active:filter==='active'}" @click="changeFilter('active')">Active</button>
    <button :class="{active:filter==='completed'}" @click="changeFilter('completed')">Completed</button>
  </div>
  </div><br><br>
   <Todo v-for="(todo,index) in filtererdTodo" :key="index" :todo="todo" />
</div>
</template>
<script>
import Todo from './Todo'
import {mapState} from 'vuex'
export default {
    name:'TodosList',
    components:{
        Todo
    },
    computed:{
        ...mapState({
            todos:"todos",
        }),
        filtererdTodo(){
            return this.$store.getters.filtererdTodo;
        },
        filter(){
            return this.$store.state.filter;
        }
    },
    methods:{
changeFilter(filter){
    this.$store.dispatch('changeFilterValue',filter);
}
    }
}
</script>
<style scoped>
.active{
    background-color:greenyellow;
}
</style>