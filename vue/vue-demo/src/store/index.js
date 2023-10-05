import { createStore } from "vuex"
import api from "../api/index"

// vuex的核心作用就是帮我们管理组件之间的状态的
export default createStore({
    // 所有的状态（数据）都放在这里
    state: {
        counter: 3
    },
    getters: {
        getCounter(state) {
            return state.counter > 0 ? state.counter: "counter数据异常"
        }
    },
    mutations: {
        addCounter(state, num) {
            state.counter += num
        }
    },
    // 为异步操作所准备的
    actions: {
        asyncAddCounter({ commit}) {
            api.generator().then( res => {
                console.log(res.data);
                commit("addCounter", res.data[0])
            })
        }
    }
})