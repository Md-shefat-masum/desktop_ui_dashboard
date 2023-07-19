import { defineStore } from 'pinia'

export const ui_store = defineStore({
    id: 'ui_store',
    state: () => ({
        /* zindex increment by selecting window */
        active_windows_zindex: 10,
        active_single_window: {},
        active_windows: [],
    }),
    getters: {

    },
    actions: {
        push_windows: function (title) {
            let windows = this.active_windows;
            let zindex = this.active_windows_zindex += 5;
            let check_el = windows.find(i => i.el == title);
            if (check_el) {
                check_el.zindex = zindex;
                this.active_single_window = check_el;
                return;
            }
            this.active_single_window = {
                el: title,
                zindex: zindex,
                expand: false,
                hide: false,
            };
            this.active_windows.push({ ...this.active_single_window });
        },
        toggle_hide: function (title) {
            let windows = this.active_windows;
            let check_el = windows.find(i => i.el == title);
            if(check_el){
                check_el.hide = !check_el.hide;
            }
        },
        toggle_expand: function (title) {
            let windows = this.active_windows;
            let check_el = windows.find(i => i.el == title);
            if(check_el){
                check_el.expand = !check_el.expand;
            }
        },
        close_page: function (title) {
            this.active_windows = this.active_windows.filter(i => i.el != title);
            if(this.active_single_window.el == title){
                this.active_single_window = {};
            }
        },
    }
})
