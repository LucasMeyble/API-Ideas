import { defineStore } from "pinia";
import state from './state'
import getters from './getters'
import actions from './actions'


export const useBin2decStore = defineStore('bin2decStore', {
  state,
  getters,
  actions
})