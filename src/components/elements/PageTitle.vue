<script setup>
defineProps({ name: String })
</script>

<template>
  <header>
    <h1 heading class="text-5xl mb-16">
      {{name}}
    </h1>
  </header>
</template>