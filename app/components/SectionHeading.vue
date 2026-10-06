<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string }>()
</script>

<template>
  <div class="heading">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2><slot>{{ title }}</slot></h2>
  </div>
</template>

<style scoped>
.heading { display: grid; gap: var(--space-3); margin-bottom: var(--space-12); }
h2 {
  font-size: var(--fs-h2);
  font-weight: 600;
  line-height: 1;
}
</style>
