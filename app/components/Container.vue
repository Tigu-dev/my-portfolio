<script setup lang="ts">
withDefaults(defineProps<{ tag?: string }>(), { tag: 'div' })
</script>

<template>
  <component :is="tag" class="container"><slot /></component>
</template>
