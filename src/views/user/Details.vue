<template>
    <div :class="`explore_window ${this[page+'_expand'] && 'expand'} ${this[page+'_hide'] && 'hide'}`" 
        @click="push_windows(page)" 
        :style="{zIndex: el.zindex}"
        :id="page">
        <div class="action_bar">
            <div class="navigation">
                <ul>
                    <!-- <li><a href="#"><span class="material-symbols-outlined fill">arrow_back</span></a></li> -->
                </ul>
            </div>
            <div class="title" :id="`${page}_drag`">
                <h2>{{page}} Details</h2>
            </div>
            <div class="control">
                <ul>
                    <li><a href="#" @click="toggle_expand(page)"><span class="material-symbols-outlined fill">zoom_out_map</span></a></li>
                    <li><a href="#" @click="toggle_hide(page)"><span class="material-symbols-outlined fill">remove</span></a></li>
                    <li><a href="#" @click="close_page(page)"><span class="material-symbols-outlined fill">close</span></a></li>
                </ul>
            </div>
        </div>
        <div class="content_body">
            <div class="details custom_scroll">
                <table class="details_table" >
                    <tbody>
                        <tr v-for="i in ['first name','last name','email','phone number','address']" :key="i">
                            <td>{{ i }}</td>
                            <td>:</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, culpa.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="footer d-none">
            <div class="action_btns">
                <ul>
                    <li>
                        <a href="#">
                            <span class="material-symbols-outlined fill">upload</span>
                            <div class="text">Submit</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="material-symbols-outlined fill">cycle</span>
                            <div class="text">Reset</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../../stores/counter';
let page = 'DetailsUser'
export default {
    props: ['el'],
    data: function(){
        return {
            page: page,
        }
    },
    created: function(){
        let that = this;
        setTimeout(() => {
            that.init_drag(page);
        }, 200);
    },
    methods: {
        ...mapActions(useCounterStore,["push_windows","toggle_expand","toggle_hide","close_page"]),
        active_table_row() {
            let e = event.target.parentNode.parentNode;
            [...document.querySelectorAll('tbody tr')].forEach(el => {
                if (e.id != el.id) {
                    el.classList.remove('active')
                }
            });
            e.classList.toggle('active');
        },
        init_drag(page) {
            dragElement(document.getElementById(page));

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
        }
    },
    computed: {
        ...mapState(useCounterStore,[page+'_hide', page+'_expand'])
    }
}
</script>

<style></style>