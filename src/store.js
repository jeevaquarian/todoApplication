import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state:{
        filter:'all',
        todos:[
            {
            title:'Item A',completed:false
        },
        {
            title:'Item B',completed:false
        },
        {
            title:'Item C',completed:true
        }
    ]

    },
    getters:{
        CompletedTodos(state){
            return state.todos.filter(todo=>todo.completed===true).length
        },
        PendingTodos(state){
            return state.todos.filter(todo=>todo.completed===false).length
        },
        filtererdTodo(state){
            if(state.filter==='all'){
                return state.todos;
            } 
            else if(state.filter==='completed'){
                return state.todos.filter(todo=>todo.completed===true);
            } 
            else if(state.filter==='active'){
                return state.todos.filter(todo=>todo.completed===false);
            }
            return state.todos;

        }
    },
    mutations:{
        NEW_TODO(state,payload){
            state.todos.push({
                title:payload,
                completed:false
            })
        },
          
            DELETE_TODO(state,payload){
                var index=state.todos.indexOf(payload);
                state.todos.splice(index,1);
            },
            TOGGLE_TODO(state,payload){
                payload.completed=!payload.completed
            },
            CHANGE_FILTER(state,payload){
                state.filter=payload;
            }
    },
   
    actions:{
        newTodoItem({commit},todoitem){
            commit('NEW_TODO',todoitem)
        },
        deleteTodo({commit},todoitem){
            commit('DELETE_TODO',todoitem)

        },
        ToggleTodo({commit},todoitem){
            commit('TOGGLE_TODO',todoitem)
        },
        changeFilterValue({commit},filtervalue){
            commit('CHANGE_FILTER',filtervalue)
        }
    }

});