<script setup lang="ts">
const email = 'tigush7@gmail.com' // TODO: your real email
const github = 'https://github.com/Tigu-dev'   // TODO: your real GitHub
</script>

<template>
  <section id="contact" class="cta">
    <Container>
      <BentoCard class="cta__card">
        <div class="cta__texture" aria-hidden="true" />
        <div class="cta__star" aria-hidden="true" />

        <p class="eyebrow">Let's work together</p>
        <h2>Got an idea? Let's build it.</h2>
        <p class="lead">Freelance projects, hackathon teams, or a tool that should exist. Say hi.</p>

        <div class="cta__actions">
          <BaseButton :href="email">
            Get in touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </BaseButton>
          <BaseButton variant="secondary" :href="github">See my code</BaseButton>
        </div>
      </BentoCard>
    </Container>
  </section>
</template>

<style scoped>
.cta { padding-block: var(--space-16); }
@media (min-width: 900px) { .cta { padding-block: var(--space-24); } }

.cta__card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
  padding: clamp(var(--space-8), 6vw, var(--space-24));
}
.cta__card > * { position: relative; }

.cta h2 {
  font-size: var(--fs-display-lg);
  font-weight: 700;
  line-height: .95;
  max-width: 14ch;
}
.lead { color: var(--text-secondary); font-size: var(--fs-body-lg); max-width: 44ch; }
.cta__actions { display: flex; flex-wrap: wrap; gap: var(--space-3); margin-top: var(--space-4); }

.cta__texture {
  position: absolute !important;
  inset: 0;
  background: var(--text);
  opacity: .06;
  -webkit-mask: url('/assets/plus-grid.svg') repeat;
  mask: url('/assets/plus-grid.svg') repeat;
  pointer-events: none;
}
.cta__star {
  position: absolute !important;
  top: var(--space-8);
  right: var(--space-8);
  width: 28px;
  height: 28px;
  background: var(--text-secondary);
  -webkit-mask: url('/assets/star.svg') center / contain no-repeat;
  mask: url('/assets/star.svg') center / contain no-repeat;
  pointer-events: none;
}
</style>
