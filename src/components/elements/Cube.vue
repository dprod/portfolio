<template>
  <div class="scene" :class="{'launched': launched}">
    <div class="cube front">
      <div class="side front"   @click="clickSide('history')">History</div>
      <div class="side back"    @click="clickSide('history')">History</div>
      <div class="side right"   @click="clickSide('projects')">Projects</div>
      <div class="side left"    @click="clickSide('projects')">Projects</div>
      <div class="side top"     @click="clickSide('jussi')">Jussi</div>
      <div class="side bottom"  @click="clickSide('jussi')">Jussi</div>
    </div>
  </div>
</template>

<script>
/**
 * #TODO: Update this component to <script setup> format.
 */
export default {
  name: 'Cube',
  data() {
    return { launched: false }
  },
  methods: {
    launch () {
      this.launched = true
    },
    clickSide (side) {
      this.launch()
      if (side === 'history')
        this.$router.push('/history')
      if (side === 'projects')
        this.$router.push('/projects')
      if (side === 'jussi')
        this.$router.push('/jussi')
    }
  }
}
</script>

<style scoped>

/**
 * Scene
 */
.scene {
  width: 200px;
  height: 200px;
  border: 0px solid #CCC;
  margin: 16rem auto 0rem auto;
  perspective: 400px;
  opacity: 1.0;
  transition: 1.5s;
  transform: scale(1.7);
}
.scene:hover {
  cursor: pointer;
}
.scene.launched {
  animation: sceneLaunch 2s linear 1;
  animation-fill-mode: forwards;
}

/**
 * Cube
 */
.cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;
  animation: cubeSpin 10s linear infinite;
}
.cube.front  { transform: translateZ(-100px) rotateY(.  0deg); }
.cube.right  { transform: translateZ(-100px) rotateY( -90deg); }
.cube.back   { transform: translateZ(-100px) rotateY(-180deg); }
.cube.left   { transform: translateZ(-100px) rotateY(  90deg); }
.cube.top    { transform: translateZ(-100px) rotateX( -90deg); }
.cube.bottom { transform: translateZ(-100px) rotateX(  90deg); }

/**
 * Cube sides
 */
.side {
  font-size: 20px;
  font-weight: light;
  /*font-family: 'Courier', 'Consolas', monospace;*/
  color: white;
  text-align: center;
  text-shadow: none;
  text-transform: uppercase;
  background: hsla(0, 0%, 0%, 0.99);
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  line-height: 200px;
  transition: all 0.3s ease;
}
.side:hover {
  /*background: black !important;*/
  color: black;
  background: hsla(255, 255%, 255%, 1);
  transition: all 0.3s ease;
}
/*.side.front  { background: hsla(0, 0%, 20%, 0.7); }
.side.right  { background: hsla(0, 4%, 20%, 0.7); }
.side.back   { background: hsla(0, 8%, 20%, 0.7); }
.side.left   { background: hsla(0, 12%, 20%, 0.7); }
.side.top    { background: hsla(0, 16%, 20%, 0.7); }
.side.bottom { background: hsla(0, 20%, 20%, 0.7); }*/
.side.front  { transform: rotateY(  0deg) translateZ(100px); }
.side.right  { transform: rotateY( 90deg) translateZ(100px); }
.side.back   { transform: rotateY(180deg) translateZ(100px); }
.side.left   { transform: rotateY(-90deg) translateZ(100px); }
.side.top    { transform: rotateX( 90deg) translateZ(100px); }
.side.bottom { transform: rotateX(-90deg) translateZ(100px); }

/**
 * Animation keyframes
 */
@keyframes cubeSpin {
  0% { 
    transform: translateZ(0px) rotateY( 0deg ) rotateX( 0deg );
  }
  50% { 
    transform: translateZ(-300px) rotateY( 180deg ) rotateX( 360deg );
  }
  100% {
    transform: translateZ(0px) rotateY( 360deg ) rotateX( 720deg );
  }
}

@keyframes sceneLaunch {
  0% { 
    opacity: 1;
    transform: translateY(0) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translateY(-5000px) scale(32.0);
  }
}

</style>