<template>
  <div
    class="tw-flex tw-mt-16 lg:tw-mt-0 tw-flex-col-reverse lg:tw-flex-row tw-mx-auto tw-max-w-[1200px] tw-items-center">
    <BaseImage :src="Transaction" />
    <div
      class="tw-flex tw-flex-col tw-align-middle tw-max-w-[90%] lg:tw-max-w-[586px]">
      <BaseHeading class="tw-grey900 tw-font-bold tw-text-3xl">
        Giao dịch mọi lúc, mọi nơi.
      </BaseHeading>
      <BaseText class="tw-mt-3"
        >Tương thích với nhiều thiết bị, bắt đầu giao dịch an toàn và tiện lợi.
        Toàn bộ sức mạnh của sàn giao dịch tiền mã hoá VinEX giờ nằm gọn trong
        bàn tay của bạn.</BaseText
      >
    </div>
  </div>
  <div class="tw-text-center tw-my-[30px] lg:tw-my-[64px]">
    <BaseHeading
      class="tw-font-bold tw-text-2xl lg:tw-text-[48px] tw-leading-[59px]"
      >Bắt đầu giao dịch ngay</BaseHeading
    >
    <BaseButton
      class="tw-mt-10 tw-bg-yellow800 tw-px-[85px] tw-py-[14px] tw-rounded-lg tw-font-bold tw-text-sm"
      >Bắt đầu</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import Transaction from '@/static/image/transaction.png'
</script>
