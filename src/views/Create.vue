<template>
  <div class="create">
    <h1>Create Your Bot</h1>
    <div>
        <div> Name: 
        <input type='text' placeholder="Bot name" v-model="bot.name"/>
        </div>
        <div> Attack: 
        <input type='number' placeholder="Bot attack" v-model="bot.attack"/> 
        </div>
        <div> HP: 
        <input type='number' placeholder="Bot HP" v-model="bot.hp"/>
        </div>
        <button @click="createBot(bot)" >Submit</button>
    </div>

    <div class='preview' >
        <Bot :preview="preview" :bot="bot" /> 

    </div>    
  </div>
</template>

<script>
import Bot from "@/components/Bot.vue"

export default {
  name: "create",
  data() {
    return {
      preview: true,
      bot: {
        name: "",
        attack: "",
        hp: ""
      }
    }
  },
  components: {
    Bot
  },
  methods: {
    createBot(obj) {
      console.log("clicked")
      console.log("obj", obj)
      this.$store.commit("createBot", obj)
    }
  }
}
</script>

<style>
.create {
  background: #2dc6b2;
  width: 30%;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
