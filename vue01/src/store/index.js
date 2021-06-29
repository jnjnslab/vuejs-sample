import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    // ceiling(state) {
    //   const round = 10;
    //   return Math.ceil(state.count / round) * round;
    // }

    // 引数付きのゲッター
    ceiling(state) {
      return function (round) {
        return Math.ceil(state.count / round) * round;
      }
    }
  },
  mutations: {
    update(state, payload) {
      state.count += payload.step
    }    
  },
  actions: {
  },
  modules: {
  }
})
