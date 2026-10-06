<script setup lang="ts">
const socials = [
  { label: 'GitHub', href: 'https://github.com/Tigu-dev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tigmanshu-sh-5172601b9/?isSelfProfile=true' },
  { label: 'Email', href: 'tigush7@gmail.com' },
]
const focus = ['Full-stack web', 'Game development', 'Developer tools']
</script>

<template>
  <section class="hero">
    <Container>
      <div class="bento">
        <!-- intro -->
        <BentoCard class="span-8 intro">
          <div class="ring" aria-hidden="true" />
          <p class="eyebrow">Developer</p>
          <h1>Hi, I'm Tigmanshu. I build things from scratch.</h1>
          <p class="lead">Web apps, games and tools. Small, sharp, and shipped.</p>
        </BentoCard>

        <!-- availability + CTA -->
        <BentoCard class="span-4 avail">
          <Pill dot>Available for work</Pill>
          <p class="muted">Open to freelance projects and hackathon teams.</p>
          <BaseButton href="mailto:you@example.com">
            Let's talk
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </BaseButton>
        </BentoCard>

        <!-- focus -->
        <BentoCard v-reveal class="span-6">
          <p class="eyebrow">What I do</p>
          <ul class="focus">
            <li v-for="f in focus" :key="f">{{ f }}</li>
          </ul>
        </BentoCard>

        <!-- socials -->
        <BentoCard v-reveal class="span-6">
          <p class="eyebrow">Find me</p>
          <ul class="socials">
            <li v-for="s in socials" :key="s.label">
              <a :href="s.href" target="_blank" rel="noopener">
                {{ s.label }}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </a>
            </li>
          </ul>
        </BentoCard>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.hero { padding-block: var(--space-16) var(--space-24); }
@media (min-width: 900px) { .hero { padding-block: var(--space-24) var(--space-32); } }

.intro { display: flex; flex-direction: column; justify-content: flex-end; min-height: 380px; gap: var(--space-4); }
.intro h1 {
  position: relative;
  font-size: var(--fs-display-lg);
  font-weight: 700;
  line-height: .95;
  max-width: 14ch;
}
.lead { position: relative; color: var(--text-secondary); font-size: var(--fs-body-lg); max-width: 40ch; }

.ring {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 280px;
  height: 280px;
  background: var(--text);
  opacity: .1;
  -webkit-mask: url('/assets/ring.svg') center / contain no-repeat;
  mask: url('/assets/ring.svg') center / contain no-repeat;
  pointer-events: none;
}

.avail { display: flex; flex-direction: column; align-items: flex-start; justify-content: space-between; gap: var(--space-6); }
.muted { color: var(--text-secondary); }

.focus, .socials { list-style: none; margin: var(--space-4) 0 0; padding: 0; display: grid; gap: var(--space-3); }
.focus li { font-size: var(--fs-h3); font-weight: 600; line-height: 1.1; }

.socials a {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-h3);
  font-weight: 600;
  color: var(--text-secondary);
  transition: color var(--duration-fast) var(--ease-standard);
}
.socials a:hover { color: var(--text); }
.socials svg { width: 20px; height: 20px; transition: transform var(--duration-fast) var(--ease-standard); }
.socials a:hover svg { transform: translate(2px, -2px); }
</style>
