<template>
    <div>
        <input type="text" v-model="newTodoItem" />
        <button @click="addTodo"> Add Todo</button>
    </div>
</template>
<script>
export default {
    name:'TodoForm',
    data(){
        return{newTodoItem:''}
    },
    methods:{
        addTodo(){
            if(this.newTodoItem!=""){
            this.$store.dispatch('newTodoItem',this.newTodoItem)
            this.newTodoItem="";
            }
        }
    }
}
</script>