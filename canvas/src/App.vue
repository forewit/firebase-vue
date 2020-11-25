<template>
  <div class="outline" id="app">
    <header>
      <h1>App.vue</h1>
      <p>Realtime voice chat app</p>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>

import {auth} from './firebase'
console.log(auth);

export default {
  name: 'App',
  components: {

  }
}

</script>

<style>
.outline {border: solid black 2px}
</style>
