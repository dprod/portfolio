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

import screenshotSautiKitabu      from '@/assets/images/project-sauti-kitabu.png'
import screenshotGridSequencer    from '@/assets/images/project-grid-sequencer.png'
import screenshotDejaruSoundworks from '@/assets/images/project-dejaru-soundworks.png'
import screenshotPortfolio        from '@/assets/images/project-portfolio.png'
import logoVue                    from '@/assets/images/logo-vue-75x75.png'
import logoNode                   from '@/assets/images/logo-node-75x75.png'
import logoMongoDB                from '@/assets/images/logo-mongodb-75x75.png'
import logoAmazonS3               from '@/assets/images/logo-amazon-s3-75x75.png'
import logoWordPress              from '@/assets/images/logo-wordpress-75x75.png'
import logoWooCommerce            from '@/assets/images/logo-woocommerce-75x75.png'
import logoVite                   from '@/assets/images/logo-vite.svg'
import logoTailwindCSS            from '@/assets/images/logo-tailwind.svg'
import logoDigitalOcean           from '@/assets/images/logo-digitalocean.svg'

const projects = [
  {
    name: 'Sauti Kitabu MVP',
    descriptionHTML: `<p>This project is a work-in-progress MVP for an audiobook mobile application.
It is an <a href="https://vuejs.org">Vue</a> app that will be wrapped in to an Android application using <a href="https://cordova.apache.org/">Cordova</a> and later will be developed in to an web app.
</p>
<p>The back-end and API is made with <a href="https://nodejs.org">Node</a> and <a href="https://expressjs.com">Express</a>. <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> is currently used for the database and <a href="https://aws.amazon.com/s3/">Amazon S3</a> is used for storage.</p>
<p>I am also working on an admin interface where you can create and edit data (such as products) used in the application.</p>`,
    techs: [
      { 
        name: 'Vue', 
        image: logoVue,
        link: 'https://vuejs.org',
      },
      { 
        name: 'Node', 
        image: logoNode,
        link: 'https://nodejs.org',
      },
      { 
        name: 'MongoDB', 
        image: logoMongoDB,
        link: 'https://www.mongodb.com/cloud/atlas',
      },
      { 
        name: 'Amazon S3',
        image: logoAmazonS3,
        link: 'https://aws.amazon.com/s3/',
       },
    ],
    image: screenshotSautiKitabu,
    link: 'https://sautikitabu.com/proto',
  },
  {
    name: 'Grid Sequencer',
    descriptionHTML: `<p><span class="highlight">Grid Sequencer</a> is an sequencer and synthesizer created with <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a> and <a href="https://vuejs.org">Vue</a>. This version is highly experimental, suffers from some perfomance issues and works poorly on mobile. I am currently working on version 2.
<p><b>Grid Sequencer</b> features 3 different sequencers, all with their own synthesizers with switchable oscillators and filters. These 3 synth engines can be sent to two master send effects: delay and reverb. You can also change the tempo and octave of the sequencer.</p>
`,
    keywords: ['Vue JS', 'Web Audio API'],
    techs: [
      { 
        name: 'Vue JS', 
        image: logoVue,
        link: 'https://vuejs.org',
      },
      { 
        name: 'Web Audio API', 
        image: null,
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
      },
    ],
    image: screenshotGridSequencer,
    link: 'https://dejaru.com/gridseq',
  },
  {
    name: 'Dejaru Soundworks',
    descriptionHTML: `<p>I designed and developed this website using <a href="https://wordpress.org/">WordPress</a> and <a href="https://woocommerce.com/">WooCommerce</a> for the soft-launch of my sound design business. It sells <a href="https://en.wikipedia.org/wiki/Virtual_Studio_Technology">VST</a> synthesizer presets and samples used for electronic music production. This project is currently on hold as I decided to re-brand the business and finish a couple more products.</p>`,
    keywords: ['WordPress', 'Woocommerce', 'Docker'],
    techs: [
      { 
        title: 'WordPress', 
        image: logoWordPress,
        link: 'https://wordpress.org/',
      },
      { 
        title: 'Woocommerce', 
        image: logoWooCommerce,
        link: 'https://woocommerce.com/',
      },
    ],
    image: screenshotDejaruSoundworks,
    link: 'http://134.209.227.67',
  },
  {
    name: 'Portfolio',
    descriptionHTML: `<p>Yeah, this site! Made with <a href="https://vuejs.org">Vue 3</a> + <a href="https://vitejs.dev/">Vite</a> + <a href="https://tailwindcss.com/">Tailwind CSS</a> and <a href="https://github.com/jeremyckahn/shifty">Shifty</a> for the small animations. <a href="https://github.com">Github</a> <b>Actions</b> automatically deploy the build to my <a href="https://digitalocean.com">Digital Ocean Droplet</a>.</p>`,
    techs: [
      { 
        title: 'Vue', 
        image: logoVue,
        link: 'https://vuejs.org/',
      },
      { 
        title: 'Vite', 
        image: logoVite,
        link: 'https://vitejs.dev/',
      },
      { 
        title: 'Tailwind CSS', 
        image: logoTailwindCSS,
        link: 'https://tailwindcss.com/',
      },
      { 
        title: 'Digital Ocean', 
        image: logoDigitalOcean,
        link: 'https://digitalocean.com/',
      },
    ],
    image: screenshotPortfolio,
    link: 'http://dejaru.com/portfolio',
    githubUrl: 'http://github.com/dprod/portfolio',
  },

]
</script>

<template>

  <AnimationOverlay ref="animationOverlay" />

  <main id="projects" ref="content" class="w-11/12 max-w-screen-lg pt-12 md:pt-24 pb-24 mx-auto">

    <!-- <PageTitle class="pt-8 text-left" :name="$route.name" /> -->

    <section project class="mb-16" v-for="project in projects" :key="project">
      
      <div columns class="lg:flex">

        <figure image class="p-4 flex-1">

          <a :href="project.link">
            <img class="w-100 transform hover:-rotate-1 hover:scale-105 duration-100" :src="project.image" :alt="project.name">
          </a>
          
        </figure>

        <article info class="p-4 flex-1 text-left">
          
          <h2 project-name class="text-4xl uppercase">{{project.name}}</h2>

          <p description v-html="project.descriptionHTML"></p>

          <p link class="mb-0">
            <img icon-external-link class="mr-2" src="@/assets/images/icon-link-external5.svg" alt="Link: ">
            <a :href="project.link">{{project.link}}</a>
          </p>

          <p github v-if="project.githubUrl">
            <img icon-external-link class="mr-2" src="@/assets/images/icon-link-external5.svg" alt="Link: ">
            <a :href="project.githubUrl">{{project.githubUrl}}</a>
          </p>

          <div techs class="flex pt-4">

            <div tech class="mr-4" v-for="tech in project.techs" :key="tech">
              
              <a :href="tech.link">
                <img :src="tech.image" :alt="tech.name" v-if="tech.image">
              </a>

            </div>

          </div>

        </article>

      </div>

    </section>

    <div class="bottom-gradient-fade"></div>

  </main>

</template>

<style scoped>

[tech] img {
  max-width: 75px;
  width: 100%;
}

[tech] img:hover {
  transform: scale(1.1);
}

[icon-external-link] {
  display: inline;
  max-width: 30px;
}

.bottom-gradient-fade {
  background: linear-gradient(180deg, transparent 75%, #eee 100%);
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
}

</style>