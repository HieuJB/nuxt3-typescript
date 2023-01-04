<template>
  <div class="tw-mx-[16px] md:tw-mx-[120px] lg:tw-mx-[240px] tw-my-[40px]">
    <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2">
      <div
        class="tw-flex tw-flex-col tw-justify-items-center tw-self-center tw-items-start">
        <BaseHeading class="tw-font-bold tw-text-2xl lg:tw-text-5xl">
          Mua & Bán tiền mã hoá chỉ trong vài phút</BaseHeading
        >
        <BaseText class="tw-text-sm lg:tw-text-base"
          >Tham gia sàn giao dịch tiền mã hoá nhanh chóng và an toàn nhất Việt
          Nam</BaseText
        >
        <BaseButton
          class="tw-block tw-bg-yellow800 tw-text-grey900 tw-text-sm tw-px-[50px] tw-py-[5px] md:tw-py-[14px] md:tw-px-[78px] tw-rounded-md"
          >Khám phá</BaseButton
        >
      </div>
      <div class="tw-mt-10">
        <BaseImage :src="IlLU" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IlLU from '@/static/image/illustration.png'
</script>
