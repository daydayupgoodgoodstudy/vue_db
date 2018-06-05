// import Vuex from 'vuex';

// const store = new Vuex.Store({...options});

import Vue from "vue";
// import button_counter from "../component/button-counter.vue";

/**
 * 拆分模式 store
 */
import store from './store/store.js';



/**
 * 拆分模式 end
 */


/*
    import Vuex,{mapMutations,mapActions} from "vuex";
    Vue.use(Vuex)

    const store = new Vuex.Store({
        state: {
            count: 0
        },
        getters: {
            //一个参数 state
            doneTodos: state => {
                return state.todos.filter(todo => todo.done)
            },
            //两个参数 getters
            doneTodosCount: (state, getters) => {
                return getters.doneTodos.length
            },
            //通过方法访问 ps:返回一个函数
            getTodoById: (state) => (id) => {
                return state.todos.find(todo => todo.id === id)
            }
        },
        //同步 修改store
        mutations: {
            //store调用方式this.store.commit(increment(n)) or commit({type:"increment",n}),
            //第一个参数默认为state,第二个对应n
            increment(state,n) {
                console.log(n, '+++')
                state.count++
            }
        },
        //可以异步修改store
        //actions 在组件中通过store.dispatch('increment',n) or dispatch({type:"increment",n})触发
        actions:{
            increment (content) {
                content.commit('increment')
            },
            //解构赋值
            increment_es6({commit}){
                commit('increment')
            }
        }
    })
    Vue.use(Vuex);
*/

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
import App from './App.vue';
import { router } from './router/router';
import axios from "./iaxios/axios.config";

//全局ajax
Vue.prototype.$ajax = axios;

const app = new Vue({                             
    router,
    store,
    el: "#app",
    render: h => h(App)
});

