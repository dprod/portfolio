<script setup>
import { ref, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import animation from '@/scripts/animation.js'
import AnimationOverlay from '@/components/elements/AnimationOverlay.vue'
import Cube from '@/components/elements/Cube.vue'

const content = ref(null)
const animationOverlay = ref(null)

onMounted(async () => {
  await animation.enterRoute({
    overlay: animationOverlay.value.getRef(),
    content: content.value,
  })
})

onBeforeRouteLeave((to, from, next) => {
  (async () => {
    await animation.leaveRoute({
      overlay: animationOverlay.value.getRef(),
      content: content.value,
    })
    next()
  })()
})
</script>

<template>

  <AnimationOverlay ref="animationOverlay" />

  <main class="index" ref="content">

    <Cube />
    
  </main>

</template>

<style scoped>
</style>