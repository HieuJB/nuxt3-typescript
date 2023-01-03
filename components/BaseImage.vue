<template>
  <img
    v-bind="$attrs"
    :src="$attrs.src"
    loading="lazy"
    @error="replaceByDefault" />
</template>

<script setup lang="ts">
const replaceByDefault = () => '@/static/image/nope-not-here.png'
</script>
