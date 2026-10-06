<script setup lang="ts">
withDefaults(defineProps<{
  tag?: string
  interactive?: boolean
  flush?: boolean
}>(), { tag: 'div', interactive: false, flush: false })
</script>

<template>
  <component
    :is="tag"
    class="card"
    :class="{ 'card--interactive': interactive, 'card--flush': flush }"
  >
    <slot />
  </component>
</template>

<style scoped>
.card {
  position: relative;
  display: block;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  padding: var(--space-8);
  transition:
    transform var(--duration-normal) var(--ease-standard),
    background-color var(--duration-normal) var(--ease-standard),
    border-color var(--duration-normal) var(--ease-standard);
}
.card--flush { padding: 0; }
.card--interactive:hover,
.card--interactive:focus-visible {
  background: var(--surface-hover);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}
</style>
