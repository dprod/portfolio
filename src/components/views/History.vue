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

const jobs = [
  { 
    employer: 'Sauti Kitabu Oy', 
    url: 'https://www.sautikitabu.com',
    title: 'Full Stack Developer',
    date: {
      from: '11/2020',
      to: 'NOW',
    },
  },
  { 
    employer: 'Freelancer', 
    title: 'Web Developer',
    url: '',
    date: {
      from: '2017',
      to: '2019',
    },
  },
  { 
    employer: 'Lahtinen Mantere Saatchi & Saatchi', 
    url: 'https://www.lmsomeco.fi',
    title: 'Full Stack Developer',
    date: {
      from: '2013',
      to: '2016',
    },
  },
  { 
    employer: 'doop Oy', 
    url: 'https://www.doop.fi',
    title: 'Web Developer',
    date: {
      from: '2011',
      to: '2013',
    },
  },
  { 
    employer: 'Media<wbr>osuuskunta Uusi Å', 
    title: 'Freelancer Web Developer',
    url: '',
    date: {
      from: '2009',
      to: '2011',
    },
  },
]
</script>

<template>

  <AnimationOverlay ref="animationOverlay" />

  <main id="history" ref="content" class="w-11/12 max-w-screen-lg pt-12 md:pt-24 pb-24 mx-auto">

    <!-- <PageTitle :name="$route.name" /> -->

    <article jobs class="text-center md:text-left">

      <div job v-for="job in jobs" :key="job" class="mb-2 py-4 px-4 hover:bg-black hover:bg-opacity-5 rounded">
        
        <a :href="job.url">
          <h2 employer class="text-3xl mb-1 font-semibold uppercase" v-html="job.employer"></h2>
        </a>
        <h2 job-title class="text-2xl mb-1">{{job.title}}</h2>
        <h3 date class="mb-0">{{job.date.from}} &mdash; {{job.date.to}}</h3>

      </div>

    </article>
    
  </main>

</template>

<style scoped>
</style>