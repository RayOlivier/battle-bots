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
    createBot(state, newBot) {
      console.log("state, newBot", state, newBot)
      state.botList.push(newBot)
    },
    deleteBot(state, oldBot) {
      console.log("state, oldBot", state, oldBot)
      let newState = state.botList.filter((e, i, arr) => {
        return e.name !== oldBot.name
      })

      state.botList = newState
    }
  },
  actions: {}
})
