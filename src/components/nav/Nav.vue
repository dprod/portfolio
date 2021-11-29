<script setup>
</script>

<template>

  <nav class="h-auto sm:h-12 px-4 sm:flex items-center w-full sm:fixed z-30 top-0 bg-white">

    <h1 title class="font-bold mb-0 sm:block pt-2 sm:pt-0 text-center cursor-pointer" @click="$router.push('/')">
      PORTFOLIO JUSSI&nbsp;LEHTINEN
    </h1>

    <ul menu class="flex justify-between ml-auto py-4">
      <li><router-link class="mx-1" to="/">Index</router-link></li>
      <li><router-link class="mx-1" to="/history">History</router-link></li>
      <li><router-link class="mx-1" to="/projects">Projects</router-link></li>
      <li><router-link class="mx-1" to="/jussi">Jussi</router-link></li>
    </ul>

  </nav>

</template>

<style scoped>
a {
  @apply p-1;
}

a.router-link-active {
  @apply rounded;
  @apply text-white;
  @apply bg-black;
}
</style>