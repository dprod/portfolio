import { Tweenable } from 'shifty'

const animation = {

  delay (ms = 1) {
    return new Promise(resolve => setTimeout(resolve, ms))
  },

  async enterRoute({ overlay, content }) {

    // Setup

    const overlayTween = new Tweenable()
    const contentTween = new Tweenable()

    overlayTween.setConfig({
      render: ({ x, scale, opacity }) => {
        overlay.style.transform = `translateX(${x}%) scale(${scale})`
        overlay.style.opacity = opacity
      },
      easing: 'linear',
      duration: 369,
      from: { x: 0,     scale: 1,   opacity: 1 },
    })

    contentTween.setConfig({
      render: ({ opacity }) => {
        content.style.opacity = opacity
      },
      easing: 'linear',
      duration: 369,
      from: { opacity: 0 },
    })

    // Tweens

    contentTween.tween({
      from: { opacity: 0 },
      to:   { opacity: 1 },
    })

    await overlayTween.tween({
      from: { x: 0,     scale: 1,   opacity: 1 },
      to:   { x: -100,   scale: 1,   opacity: 0 },
    })

  },

  async leaveRoute({ overlay, content }) {

    // Setup

    const overlayTween = new Tweenable()
    const contentTween = new Tweenable()

    overlayTween.setConfig({
      render: ({ x, scale, opacity }) => {
        overlay.style.transform = `translateX(${x}%) scale(${scale})`
        overlay.style.opacity = opacity
      },
      easing: 'linear',
      duration: 369,
    })

    contentTween.setConfig({
      render: ({ opacity }) => {
        content.style.opacity = opacity
      },
      easing: 'linear',
      duration: 369,
    })

    // Tweens

    contentTween.tween({
      from: { opacity: 1 },
      to:   { opacity: 0 },
    })

    await overlayTween.tween({
      from: { x: 100, scale: 1,   opacity: 0 },
      to:   { x: 0,   scale: 1,   opacity: 1 },
    })

  },
  
}

export default animation