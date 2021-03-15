import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// define your typings for the store state
interface State {
  count: number;
  loading: boolean;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    loading: false
  },
  mutations: {
    inc(state) {
      state.count++;
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    }
  }
});
