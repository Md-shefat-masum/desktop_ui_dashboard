import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    active_windows: [],
    AllUser_hide: false,
    AllUser_expand: false,
    AllBlog_hide: false,
    AllBlog_expand: false,
    AllContact_hide: false,
    AllContact_expand: false,
    AllSubscriber_hide: false,
    AllSubscriber_expand: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },
    push_windows: function (title) {
      this.active_windows = this.active_windows.filter(i => i != title);
      this.active_windows.push(title);
    },
    toggle_hide: function (title) {
      this[title + '_hide'] = !this[title + '_hide'];
    },
    toggle_expand: function (title) {
      this[title + '_expand'] = !this[title + '_expand'];
    },
    close_page: function (title) {
      this.active_windows = this.active_windows.filter(i => i != title);
    },
  }
})
