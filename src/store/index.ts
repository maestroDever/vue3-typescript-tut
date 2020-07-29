import { createStore } from "vuex";

export type State = { couter: number };

export default createStore({
  state: {
    counter: 0
  },
  mutations: {},
  actions: {},
  modules: {}
});
