<template>
  <BuySellSection />
  <ChooseVinexSection />
  <PartnerSection />
  <AskAndAnswer />
  <Transaction />
  <BannerImage />
</template>

<script lang="ts" setup>
import { useFiltersStore } from '~/store/filters'
const filtersStore = useFiltersStore()
// eslint-disable-next-line no-console
console.log(filtersStore)
</script>
