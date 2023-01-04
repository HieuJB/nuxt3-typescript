<template>
  <div
    class="tw-px-6 tw-py-4 tw-flex tw-items-center tw-border tw-border-grey100">
    <div class="tw-flex">
      <BaseImage
        class="tw-block md:tw-hidden tw-w-6 tw-h-6 tw-mr-2"
        :src="MENU" />
      <BaseImage class="tw-h-6 md:tw-h-8" :src="LOGO" />
    </div>
    <div class="tw-w-full tw-flex tw-justify-between">
      <div class="tw-flex tw-items-center">
        <BaseDropDownAsk
          class="tw-mx-20 tw-w-[90px] tw-hidden md:tw-block"
          label="Giao dịch">
        </BaseDropDownAsk>
        <BaseDropDownAsk
          class="tw-hidden tw-w-[90px] md:tw-block"
          label="Hỗ trợ">
        </BaseDropDownAsk>
      </div>

      <BaseButton
        class="tw-bg-yellow800 tw-py-[5px] tw-px-[28px] tw-text-[#ffffff] md:tw-text-grey900 md:tw-py-[14px] md:tw-px-12 tw-rounded-md tw-text-sm"
        >Liên kết ví</BaseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import LOGO from '@/static/image/logo.png'
import MENU from '@/static/image/menu.png'
</script>
