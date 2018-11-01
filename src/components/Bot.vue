<template>
  <div class="bot">
    <!-- <h1>This is a bot card</h1> -->
    
    <h2>{{bot.name}}</h2>
        <div class='bottom'>
            <img :src="'https://robohash.org/'+ bot.name +'?set=set3'" alt='' />
                <div class='stats'> 
                    <h3>Attack: {{bot.attack}}</h3>
                    <h3>HP: {{bot.hp}}</h3>
                </div>
        </div>
        <div class='buttons' v-show="!preview" >
            <button @click="$emit('add-bot')" >Select</button>
            <button @click="deleteBot(bot)" >Retire</button>
        </div>
  </div>
</template>

<script>
export default {
  name: "Bot",
  props: {
    bot: Object,
    preview: Boolean
    // name: String,
    // attack: String,
    // hp: String
  },
  data() {
    return {
      //   imgurl: "https://robohash.org/" + {{name}} + "?set=set3"
    }
  },
  methods: {
    deleteBot(obj) {
      this.$store.commit("deleteBot", obj)
    }
  }
}
</script>

<style>
img {
  width: 130px;
  height: 130px;
}
.bot {
  background: #efefd0;
  width: 300px;
  padding: 5px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.bottom {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: black solid 1px; */
  width: 90%;
}

.buttons {
  width: 50%;

  display: flex;
  justify-content: space-between;
}

.stats {
  text-align: left;
}
</style>