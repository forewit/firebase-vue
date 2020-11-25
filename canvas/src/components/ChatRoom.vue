<template>
  <main class="outline">
    <h3>ChatRoom.vue {{ chatId }}</h3>

    <router-link to="/">Back</router-link>

  </main>
</template>

<script>

export default {
  computed: {
    chatId() {
      return this.$route.params.id;
    },
  },

};
</script>