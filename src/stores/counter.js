import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    active_windows_zindex: 900,
    active_windows: [
      {
        el: 'AllUser',
        zindex: 900,
      }
    ],

    AllUser_hide: false,
    AllUser_expand: false,
    CreateUser_hide: false,
    CreateUser_expand: false,
    EditUser_hide: false,
    EditUser_expand: false,
    DetailsUser_hide: false,
    DetailsUser_expand: false,

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
      let windows = this.active_windows;
      let zindex = this.active_windows_zindex += 5;
      let check_el = windows.find(i => i.el == title);
      if(check_el){
        check_el.zindex = zindex;
        return ;
      }
      this.active_windows.push({
        el: title,
        zindex,
      });
    },
    toggle_hide: function (title) {
      this[title + '_hide'] = !this[title + '_hide'];
    },
    toggle_expand: function (title) {
      this[title + '_expand'] = !this[title + '_expand'];
    },
    close_page: function (title) {
      this.active_windows = this.active_windows.filter(i => i.el != title);
    },
  }
})
