import { defineStore } from 'pinia'

export const useFiltersStore = defineStore({
  id: 'filter-store',
  state: () => ({
    filtersList: ['youtube', 'twitch'],
  }),
  actions: {},
  getters: {
    filtersList: state => state.filtersList,
  },
})
