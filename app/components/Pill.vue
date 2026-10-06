<script setup lang="ts">
defineProps<{ dot?: boolean }>()
</script>

<template>
  <span class="pill">
    <span v-if="dot" class="pill__dot" aria-hidden="true" />
    <slot />
  </span>
</template>

<style scoped>
.pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 6px 14px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-pill);
  font-size: var(--fs-small);
  font-weight: 500;
  color: var(--text-secondary);
}
.pill__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
}
</style>
