<template>
  <div class="tw-mx-[16px] md:tw-mx-[120px] lg:tw-mx-[240px] tw-my-[50px]">
    <BaseHeading class="tw-text-3xl tw-font-bold tw-text-grey900"
      >Đối tác đáng tin cậy cho hành trình của bạn</BaseHeading
    >
    <BaseText class="tw-text-grey600">Giao dịch bằng VND với phí 0đ</BaseText>

    <swiper
      :slidesPerView="1.5"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      class="mySwiper">
      <swiper-slide v-for="(item, index) in SLIDER" :key="index"
        ><BaseCard
          classlabel="tw-font-bold tw-text-xl tw-mt-8"
          classcontent="tw-text-grey500 tw-text-sm tw-min-h-[100px]"
          :image="item.image"
          :label="item.label"
          :content="item.content">
          <BaseButton
            class="tw-font-bold tw-text-sm tw-bg-grey200 tw-p-3 tw-rounded-md"
            >Giao dịch ngay</BaseButton
          >
        </BaseCard></swiper-slide
      >
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { SLIDER } from '@/constants/common'
</script>
