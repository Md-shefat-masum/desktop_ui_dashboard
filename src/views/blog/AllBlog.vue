<template>
    <div :class="`explore_window ${this[page+'_expand'] && 'expand'} ${this[page+'_hide'] && 'hide'}`" @click="push_windows(page)" :id="page">
        <div class="action_bar">
            <div class="navigation">
                <ul>
                    <li><a href="#"><span class="material-symbols-outlined fill">arrow_back</span></a></li>
                </ul>
            </div>
            <div class="title" :id="`${page}_drag`">
                <h2>{{ page }} Management - List</h2>
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
            <div class="data_list">
                <div class="table_responsive custom_scroll">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th><input type="checkbox"></th>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody id="all_list">
                            <tr v-for="i in 10" :id="i" :key="i" class="">
                                <td>
                                    <span @click="active_table_row()" class="icon material-symbols-outlined"> add_circle
                                    </span>
                                    <div class="table_action_btns">
                                        <ul>
                                            <li><a href="#">Show</a></li>
                                            <li><a href="#">Edit</a></li>
                                            <li><a href="#">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <input type="checkbox">
                                </td>
                                <td>1</td>
                                <td>Md Abdullah</td>
                                <td>Mubassir</td>
                                <td>abm@ex.com</td>
                                <td>+880232353423</td>
                                <td>
                                    <img height="30px" src="/assets/images/avatar.png" alt="">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pagination_part">
                    <ul class="pagination">
                        <li><a href="#">&laquo;</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
                    <div class="showing">
                        10 of 100
                    </div>
                    <div class="limit">
                        <select name="" id="">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="action_btns">
                <ul>
                    <li>
                        <a href="#">
                            <span class="material-symbols-outlined fill">add</span>
                            <div class="text">create new</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="material-symbols-outlined fill">download</span>
                            <div class="text">Export All</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="material-symbols-outlined fill">upload</span>
                            <div class="text">Import All</div>
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
let page = 'AllBlog'
export default {
    data: function(){
        return {
            page: page,
            is_expand: false,
            is_hide: false,
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