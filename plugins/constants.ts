export default defineNuxtPlugin(() => ({
  provide: {
    hello: (msg: string) => `Hello ${msg}!`,
  },
}))
