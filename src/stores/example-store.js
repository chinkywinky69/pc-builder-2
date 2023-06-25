import { defineStore } from "pinia";

export const userPcData = defineStore("pcData", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});
