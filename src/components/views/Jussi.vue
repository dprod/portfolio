<script setup>
import { ref, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import animation from '@/scripts/animation.js'
import AnimationOverlay from '@/components/elements/AnimationOverlay.vue'
// import PageTitle from '@/components/elements/PageTitle.vue'

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

  <main id="jussi" ref="content" class="w-11/12 max-w-screen-lg pt-12 md:pt-24 pb-24 mx-auto">

    <section columns class="md:flex">
        
      <figure picture class="p-4">
        <img jussi src="@/assets/images/jussi-2020.png" alt="Me">
      </figure>

      <article info class="p-4">
        <h2 name class="text-4xl">Jussi Lehtinen</h2>
        <h3 title class="text-2xl">Web Developer</h3>
        <p links>
          <a href="mailto:dejaru@gmail.com">dejaru@gmail.com</a><span class="text-red-500">&nbsp;• </span>
          <a href="https://www.linkedin.com/in/jussi-lehtinen-664620203/">LinkedIn</a><span class="text-red-500">&nbsp;• </span>
          <a href="https://github.com/dprod">Github</a>
        </p>
      </article>

    </section>
    
  </main>

</template>

<style scoped>
[picture] img {
  filter: grayscale(50%) contrast(120%);
  transition: all 1s;
}
[picture] img:hover {
  filter: grayscale(0%) contrast(120%);
  transition: all 1s;
}
</style>
