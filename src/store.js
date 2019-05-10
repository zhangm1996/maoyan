import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow:true
  },
  mutations: {
    TabbarMutation(state,payload){
  		state.isTabbarShow = payload;
  	}
  },
  actions: {

  }
})
