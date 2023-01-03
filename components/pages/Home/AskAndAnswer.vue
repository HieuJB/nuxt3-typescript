<template>
  <div class="tw-mx-[16px] md:tw-mx-[120px] lg:tw-mx-[240px]">
    <BaseHeading class="tw-font-bold tw-text-grey900 tw-text-2xl tw-leading-10"
      >Hỏi & Đáp</BaseHeading
    >
    <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2">
      <BaseDropDownAsk
        v-for="(item, index) in QANDA"
        :key="index"
        :label="item">
        <div class="tw-mt-[10px] tw-text-sm">
          <BaseText>
            Chỉ mất 2 phút để đăng ký và xác minh tài khoản trên VinEX, hoàn
            toàn dễ dàng và nhanh chóng. Xem hướng dẫn chi tiết
            <strong class="tw-cursor-pointer">tại đây</strong>
          </BaseText>
          <li class="tw-ml-1">Đăng ký trên App</li>
          <li class="tw-sml-1">Xác minh tài khoản</li>
        </div>
      </BaseDropDownAsk>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QANDA } from '~/constants/common'
</script>
