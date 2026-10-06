<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  to?: string
  href?: string
}>(), { variant: 'primary' })
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="btn" :class="`btn--${variant}`"><slot /></NuxtLink>
  <a v-else-if="href" :href="href" class="btn" :class="`btn--${variant}`" target="_blank" rel="noopener"><slot /></a>
  <button v-else class="btn" :class="`btn--${variant}`" type="button"><slot /></button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 12px 20px;
  border-radius: var(--radius-pill);
  font: 600 .95rem/1 var(--font-sans);
  cursor: pointer;
  border: 1px solid transparent;
  transition:
    transform var(--duration-fast) var(--ease-standard),
    background-color var(--duration-fast) var(--ease-standard),
    border-color var(--duration-fast) var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); }

.btn--primary { background: var(--text); color: var(--accent-contrast); }
.btn--primary:hover { background: #fff; }

.btn--secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border-strong);
}
.btn--secondary:hover { background: var(--surface-hover); }

/* nudge any svg icon inside on hover */
.btn :deep(svg) { width: 18px; height: 18px; transition: transform var(--duration-fast) var(--ease-standard); }
.btn:hover :deep(svg) { transform: translate(2px, -2px); }
</style>
