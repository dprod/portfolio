<script setup>
import { ref } from 'vue'
const animationOverlay = ref(null)
const getRef = () => animationOverlay.value
defineExpose({ getRef })
</script>

<template>
  <div class="animation-overlay" ref="animationOverlay"></div>
</template>

<style scoped>

.animation-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000022;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  pointer-events: none;
  transform: translateX(0%);
}
</style>