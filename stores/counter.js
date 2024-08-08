import { defineStore } from 'pinia';

const mapping = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
]

const myObject = {
  prop1: 1,
  prop2: 2
} // pointer => 0x123DFA6

const myObject2 = myObject

const log = [
  'increment'
]

const myStore = defineStore('counter', {
  state: function() {
    return {
      count: 0
    }
  },
  actions: {
    increment() {
      this.count += 1
    }
  },
  getters: {
    countEnglish(state) {
      return mapping[state.count]
    }
  }
})

export const useCounterStore = myStore
// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0,
//   }),
//   actions: {
//     increment(value) {
//       // 注意參數的陷阱
//       this.count += value;
//     },
//     decrement() {
//       this.increment(-1);
//     }
//   },
//   getters: {
//     countEnglish: (state) => list[state.count],
//   },
// });