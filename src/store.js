import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    botList: [
      {
        name: "Larry",
        attack: "40",
        hp: "10"
      },
      { name: "Pearl", attack: "20", hp: "30" }
    ]
  },
  mutations: {
    addBot(state, newBot) {
      console.log("state, newBot", state, newBot)
      state.botList.push(newBot)
    }
  },
  actions: {}
})
