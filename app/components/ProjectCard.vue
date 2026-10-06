<script setup lang="ts">
defineProps<{
  category: string
  title: string
  description?: string
  href: string
  image?: string
}>()
</script>

<template>
  <BentoCard tag="a" :href="href" interactive flush class="project">
    <div class="media">
      <img v-if="image" :src="image" :alt="title" class="media__inner" loading="lazy">
      <div v-else class="media__inner tile" aria-hidden="true">
        <span class="tile__mark">{{ title.charAt(0) }}</span>
      </div>
    </div>

    <div class="body">
      <div class="meta">
        <p class="eyebrow">{{ category }}</p>
        <h3>{{ title }}</h3>
        <p v-if="description" class="desc">{{ description }}</p>
      </div>
      <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </div>
  </BentoCard>
</template>

<style scoped>
.project { display: flex; flex-direction: column; height: 100%; }

.media { aspect-ratio: 16 / 10; overflow: hidden; background: var(--surface-2); }
.media__inner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-standard);
}
.project:hover .media__inner { transform: scale(1.03); }

/* placeholder tile: tonal surface + plus-grid texture */
.tile {
  position: relative;
  display: grid;
  place-items: center;
  background: var(--surface-2);
}
.tile::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--text);
  opacity: .08;
  -webkit-mask: url('/assets/plus-grid.svg') repeat;
  mask: url('/assets/plus-grid.svg') repeat;
}
.tile__mark {
  position: relative;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  color: var(--text-muted);
  opacity: .5;
}

.body {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-6);
}
.meta { display: grid; gap: var(--space-2); }
h3 { font-size: var(--fs-h3); font-weight: 600; line-height: 1.1; }
.desc { color: var(--text-secondary); font-size: var(--fs-small); max-width: 42ch; }

.arrow {
  flex: none;
  width: 24px;
  height: 24px;
  color: var(--text-secondary);
  transition: transform var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard);
}
.project:hover .arrow { transform: translate(3px, -3px); color: var(--text); }
</style>
