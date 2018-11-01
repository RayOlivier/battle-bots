
<template>
  <div class="list">
    <div>
        <h2>Bot#1: {{selectedName[0]}}</h2>
         <h2>Bot#2: {{selectedName[1]}}</h2>
         <button @click="battle" >Battle</button>
    </div>
    
    <!-- <Bot name='Harry' attack=40 hp=20 /> -->

<hr />
<div class='cards'>
    <div :key="i" v-for="(bot, i) in storeList" > 
        <Bot :bot="bot" v-on:add-bot='addBot(bot)'/>
    </div>
    </div>

  </div>
</template>

<script>
import Bot from "@/components/Bot.vue"

export default {
  name: "list",
  components: {
    Bot: Bot
  },

  data() {
    return {
      botList: this.$store.state.botList,
      selected: [],
      selectedName: []
    }
  },
  computed: {
    storeList() {
      return this.$store.state.botList
    }
  },
  methods: {
    addBot(obj) {
      //   console.log("obj from add", obj)
      this.selected.push(obj)
      this.selectedName.push(obj.name)
    },
    battle() {
      let winner = Math.round(Math.random())
      alert(this.selectedName[winner] + " wins!")
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 70%;
  background: #048a81;
}
</style>
