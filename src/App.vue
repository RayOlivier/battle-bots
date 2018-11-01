<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |  -->
      
      <router-link to="/create">Create</router-link> |
      <h1>Battle Bots</h1> |
      <router-link to="/list">Bot List</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// export default {
//   data() {
//     botList: [
//       {
//         name: "Harry",
//         attack: 40,
//         hp: 10
//       },
//       { name: "Pearl", attack: 20, hp: 30 }
//     ]
//   }
// }
</script>


<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #99ddd4;

  min-height: 98vh;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 50%;
  margin: auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #048a81;
}
</style>
