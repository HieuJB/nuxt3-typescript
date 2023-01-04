<template>
  <div v-bind="$attrs">
    <BaseImage :class="$attrs.classimage" :src="image" />
    <BaseHeading :class="$attrs.classlabel">{{ label }}</BaseHeading>
    <BaseText :class="$attrs.classcontent">{{ content }}</BaseText>
    <slot v-for="(_, name) in $slots" :name="name" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
})
</script>
