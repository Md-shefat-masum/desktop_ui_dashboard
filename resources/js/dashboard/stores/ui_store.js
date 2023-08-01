import { defineStore } from 'pinia'

export const ui_store = defineStore({
    id: 'ui_store',
    state: () => ({
        /* zindex increment by selecting window */
        active_windows_zindex: 50,
        active_single_window: {
            // el: 'users',
            // zindex: 50,
            // expand: false,
            // hide: false,
        },
        active_windows: [
            // {
            //     el: 'users',
            //     zindex: 50,
            //     expand: false,
            //     hide: false,
            // }
        ],
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
        init_drag: function(element){
            let el = document.getElementById(element);
            el && dragElement(el);
            function dragElement(elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                if (document.getElementById(elmnt.id + "_drag")) {
                    // if present, the header is where you move the DIV from:
                    document.getElementById(elmnt.id + "_drag").onmousedown = dragMouseDown;
                } else {
                    // otherwise, move the DIV from anywhere inside the DIV:
                    elmnt.onmousedown = dragMouseDown;
                }

                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // set the element's new position:
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }

                function closeDragElement() {
                    // stop moving when mouse button is released:
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
        },
        is_in_window_list: function(el){
            return this.active_windows.find(i=>i.el===el);
        }
    }
})
