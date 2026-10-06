// Usage: <div v-reveal> or <div v-reveal="120"> (delay in ms for staggering)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // already on screen at load: leave it visible, no flash
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return

      el.classList.add('reveal')
      const delay = Number(binding.value) || 0

      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return
          el.style.animationDelay = `${delay}ms`
          el.classList.add('reveal--in')
          io.disconnect()
        },
        { threshold: 0.15 },
      )
      io.observe(el)
      ;(el as any)._revealIO = io
    },
    unmounted(el: HTMLElement) {
      ;(el as any)._revealIO?.disconnect()
    },
    getSSRProps: () => ({}),
  })
})