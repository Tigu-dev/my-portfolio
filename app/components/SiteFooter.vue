<script setup lang="ts">
const year = new Date().getFullYear()
const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: 'https://github.com/Tigu-dev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tigmanshu-sh-5172601b9/?isSelfProfile=true' },
]
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer__row">
        <p class="small">© {{ year }} Tigmanshu</p>

        <nav aria-label="Footer" class="footer__nav">
          <a v-for="l in links" :key="l.label" :href="l.href" class="nav-link">{{ l.label }}</a>
        </nav>

        <a href="#top" class="nav-link">Back to top ↑</a>
      </div>
    </Container>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: var(--space-8);
}
.footer__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}
.footer__nav { display: flex; flex-wrap: wrap; gap: var(--space-6); }
.small { font-size: var(--fs-small); color: var(--text-muted); }
.nav-link {
  color: var(--text-secondary);
  font-size: .9rem;
  font-weight: 500;
  transition: color var(--duration-fast) var(--ease-standard);
}
.nav-link:hover { color: var(--text); }
</style>
