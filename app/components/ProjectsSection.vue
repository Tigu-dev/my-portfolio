<script setup lang="ts">
// Swap these for real projects. Add `image: '/projects/foo.jpg'` (in /public/projects) when ready.
const projects = [
  { category: 'Development', title: 'Prelude', description: 'an ai interviewer who can scold you for rambling', href: 'https://github.com/Tigu-dev/Prelude', span: 'span-8' },
  { category: 'Game', title: 'Project two', description: 'Built for a hackathon.', href: '#', span: 'span-4' },
  { category: 'Development', title: 'Project three', description: 'A tool I wanted to exist.', href: '#', span: 'span-4' },
  { category: 'Design', title: 'Project four', description: 'Interface and branding exploration.', href: '#', span: 'span-8' },
]
</script>

<template>
  <section id="projects" class="projects">
    <Container>
      <SectionHeading eyebrow="Selected work" title="Projects" />
      <div class="bento">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          :class="p.span"
          v-bind="{ category: p.category, title: p.title, description: p.description, href: p.href }"
          v-reveal="500"
        />
      </div>
    </Container>
  </section>
</template>

<style scoped>
.projects { padding-block: var(--space-16); }
@media (min-width: 900px) { .projects { padding-block: var(--space-24); } }
</style>
