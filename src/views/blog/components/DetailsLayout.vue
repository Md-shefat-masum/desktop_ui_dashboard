<template>
    <div :class="`explore_window ${is_expand && 'expand'} ${is_hide && 'hide'} ${!is_in_window_list && 'hide'}`" 
        @click="push_windows(page, $event)" 
        :style="{zIndex: zindex}"
        :id="page">
        <div class="action_bar">
            <div class="navigation">
                <ul>
                    <!-- <li><a href="#"><span class="material-symbols-outlined fill">arrow_back</span></a></li> -->
                </ul>
            </div>
            <div class="title" :id="`${page}_drag`">
                <h2>{{page.replaceAll('_',' ')}}</h2>
            </div>
            <div class="control">
                <ul>
                    <li><a href="#" @click="$event.stopPropagation(); toggle_expand(page)"><span class="material-symbols-outlined fill">zoom_out_map</span></a></li>
                    <li><a href="#" @click="$event.stopPropagation(); toggle_hide(page)"><span class="material-symbols-outlined fill">remove</span></a></li>
                    <li><a href="#" @click="$event.stopPropagation(); close_page(page)"><span class="material-symbols-outlined fill">close</span></a></li>
                </ul>
            </div>
        </div>
        <div class="content_body">
            <slot></slot>
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
import { ui_store } from '../../../stores/ui_store';
import layout_setup from './layout_setup';
let page = layout_setup.details;

export default {
    data: function(){
        return {
            page: page,
            show_search: false,
        }
    },
    created: function(){  
    },
    mounted: function(){
        let that = this;
        setTimeout(() => {
            that.init_drag(page);
        }, 200);
    },
    watch: {
    },
    methods: {
        ...mapActions(ui_store,["init_drag","push_windows","toggle_expand","toggle_hide","close_page"]),
        active_table_row() {
            let e = event.target.parentNode.parentNode;
            [...document.querySelectorAll('tbody tr')].forEach(el => {
                if (e.id != el.id) {
                    el.classList.remove('active')
                }
            });
            e.classList.toggle('active');
        },
    },
    computed: {
        ...mapState(ui_store,[page+'_hide', page+'_expand', 'active_windows', 'active_single_window']),
        is_in_window_list: function(){
            return this.active_windows.find(i=>i.el==page);
        },
        is_active: function(){
            return this.page == this.active_single_window.el;
        },
        is_expand: function(){
            return this.is_in_window_list?.expand;
        },
        is_hide: function(){
            return this.is_in_window_list?.hide;
        },
        zindex: function(){
            return this.is_in_window_list?.zindex;
        },
    }
}
</script>

<style></style>