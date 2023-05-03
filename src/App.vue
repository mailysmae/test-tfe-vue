<script setup>
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <router-view />
</template>

<style scoped lang="scss">
.container {
  max-width: 1440px;
  margin-inline: auto;
  padding: 5rem;
}
</style>
