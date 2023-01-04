<template>
  <div class="tw-mx-[16px] md:tw-mx-[120px] lg:tw-mx-[240px]">
    <div class="tw-text-center">
      <BaseHeading
        class="tw-text-grey900 tw-font-bold tw-text-[32px] tw-leading-[44px]"
        >Tại sao chọn VinEx?</BaseHeading
      >
      <BaseText class="tw-text-grey600"
        >Chúng tôi cung cấp cho bạn sự an toàn, hiệu quả và đa dạng.
      </BaseText>
    </div>

    <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-10">
      <div
        v-for="(item, index) in CHOOSE_VINEX"
        :key="index"
        class="tw-text-center">
        <BaseCard
          :image="item.image"
          :label="item.label"
          :content="item.content"
          classlabel="tw-text-grey900 tw-font-bold tw-text-xl"
          classcontent="tw-text-grey500"
          classimage="tw-p-5 tw-mx-auto" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CHOOSE_VINEX } from '@/constants/common'
</script>
