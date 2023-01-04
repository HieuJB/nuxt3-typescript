import { defineNuxtPlugin } from '#app'
import Constants, { ConstantsProps } from '@/constants'

declare module '#app' {
  // eslint-disable-next-line no-unused-vars
  interface NuxtApp {
    $constants: ConstantsProps
  }
}

declare module '@vue/runtime-core' {
  // eslint-disable-next-line no-unused-vars
  interface ComponentCustomProperties {
    $constants: ConstantsProps
  }
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('constants', Constants)
})
