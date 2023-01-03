<template>
  <p v-bind="$attrs">
    <slot v-for="(_, name) in $slots" :name="name" />
  </p>
</template>
