
<template>
  <div class="list">
    <div>
        <div>Bot#1: {{selected[0]}}</div>
         <div>Bot#2: {{selected[1]}}</div>
    </div>
    
    <!-- <Bot name='Harry' attack=40 hp=20 /> -->

<hr />
<div class='cards'>
    <div :key="i" v-for="(bot, i) in storeList" > 
        <Bot :name="bot.name" :attack="bot.attack" :hp="bot.hp" />
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
      selected: []
    }
  },
  computed: {
    storeList() {
      return this.$store.state.botList
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
