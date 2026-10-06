<script setup lang="ts">
const links = [
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

const active = ref<string>('')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) active.value = e.target.id
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )
  links.forEach((l) => {
    const el = document.getElementById(l.id)
    if (el) observer.observe(el)
  })
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <header class="nav">
    <Container>
      <div class="nav__row">
        <a href="#top" class="nav__brand">Tigmanshu</a>

        <nav aria-label="Primary" class="nav__links">
          <a
            v-for="l in links"
            :key="l.id"
            :href="`#${l.id}`"
            class="nav-link"
            :class="{ active: active === l.id }"
            :aria-current="active === l.id ? 'true' : undefined"
          >{{ l.label }}</a>
        </nav>

        <BaseButton href="tigush7@gmail.com" class="nav__cta">Let's talk</BaseButton>
      </div>
    </Container>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(11, 11, 11, .72);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  height: 64px;
}
.nav__brand { font-weight: 600; font-size: 1.05rem; letter-spacing: .01em; }

.nav__links { display: none; gap: var(--space-8); }
@media (min-width: 640px) { .nav__links { display: flex; } }

.nav-link {
  color: var(--text-secondary);
  font-size: .9rem;
  font-weight: 500;
  transition: color var(--duration-fast) var(--ease-standard);
}
.nav-link:hover,
.nav-link.active { color: var(--text); }

/* compact CTA inside the nav */
.nav__cta { padding: 8px 16px; font-size: .875rem; }
</style>
