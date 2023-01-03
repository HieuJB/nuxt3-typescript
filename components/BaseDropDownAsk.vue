<template>
  <div v-bind="$attrs" class="tw-p-6">
    <div
      class="tw-w-full tw-flex tw-justify-between hover:tw-bg-grey100 tw-cursor-pointer"
      @click="handleShownDetail">
      <label class="tw-text-grey900 tw-font-bold tw-leading-6 tw-cursor-pointer"
        >{{ $attrs.label }}
      </label>

      <BaseImage :src="isShownDetail ? Up : Down" />
    </div>

    <Transition>
      <div v-show="isShownDetail">
        <slot v-for="(_, name) in $slots" :name="name" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Down from '@/static/svg/down.svg'
import Up from '@/static/svg/up.svg'
let isShownDetail = ref(false)

const handleShownDetail = () => {
  isShownDetail.value = !isShownDetail.value
}
</script>
