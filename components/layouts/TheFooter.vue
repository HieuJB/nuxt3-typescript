<template>
  <div class="tw-mt-[40px] md:tw-mt-[120px]">
    <div class="tw-mx-[16px] md:tw-mx-[120px] lg:tw-mx-[240px]">
      <div class="tw-grid lg:tw-grid-cols-4 tw-grid-cols-2 information">
        <div>
          <p v-for="(item, index) in FOOTER.about" :key="index">{{ item }}</p>
        </div>
        <div>
          <p v-for="(item, index) in FOOTER.product" :key="index">{{ item }}</p>
        </div>
        <div class="tw-mt-[24px] lg:tw-mt-0">
          <p v-for="(item, index) in FOOTER.service" :key="index">{{ item }}</p>
        </div>
        <div class="tw-mt-[24px] lg:tw-mt-0">
          <p v-for="(item, index) in FOOTER.support" :key="index">{{ item }}</p>
        </div>
      </div>
    </div>
    <div
      class="tw-text-center tw-mt-10 tw-py-5 tw-border-t tw-border-grey100 tw-text-grey600">
      {{ FOOTER.detail }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { FOOTER } from '~/constants/common'
</script>

<style scoped lang="scss" src="@/assets/styles/layouts/TheFooter.scss"></style>
