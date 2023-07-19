<template>
    <div class="app_nav">
        <div class="left">
            <ul class="navigation_list">
                <li class="icon_link_li app_drawar_link_li">
                    <a href="#" class="navigation_link active">
                        <span class="material-symbols-outlined fill">apps</span>
                    </a>
                    <div class="apps_list_drawer">
                        <div class="content">
                            <div class="top">
                                <div class="profile">
                                    <div class="img">
                                        <img src="/assets/images/avatar.png" alt="">
                                    </div>
                                    <div class="profile_info">
                                        <h2>Md. Abudllah</h2>
                                        <h3>Super admin</h3>
                                    </div>
                                </div>
                                <div class="action">
                                    <ul>
                                        <li><a href="#"><span
                                                    class="material-symbols-outlined fill">manage_accounts</span></a>
                                        </li>
                                        <li><a href="#"><span class="material-symbols-outlined fill">settings</span></a>
                                        </li>
                                        <li><a href="#"><span class="material-symbols-outlined fill">lock</span></a>
                                        </li>
                                        <li><a href="#"><span
                                                    class="material-symbols-outlined fill">power_settings_new</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="search">
                                <input type="search" placeholder="search..">
                            </div>
                            <div class="menu_list custom_scroll">
                                <div class="menu_apart">
                                    <h4>At a glance</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_1">
                                                    <span class="material-symbols-outlined fill">monitoring</span>
                                                </div>
                                                <div class="text">
                                                    Visitor Report
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_2">
                                                    <span class="material-symbols-outlined fill">query_stats</span>
                                                </div>
                                                <div class="text">
                                                    Analytics
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="menu_apart">
                                    <h4>Apps</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_3">
                                                    <span class="material-symbols-outlined fill">fact_check</span>
                                                </div>
                                                <div class="text">
                                                    Todo
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_4">
                                                    <span class="material-symbols-outlined fill">calendar_month</span>
                                                </div>
                                                <div class="text">
                                                    Calendar
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_5">
                                                    <span class="material-symbols-outlined fill">calculate</span>
                                                </div>
                                                <div class="text">
                                                    Calculator
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_6">
                                                    <span class="material-symbols-outlined fill">email</span>
                                                </div>
                                                <div class="text">
                                                    Messages
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="menu_apart">
                                    <h4>Management</h4>
                                    <ul>
                                        <li>
                                            <a @click="push_windows(`users`)" href="#">
                                                <div class="icon bg_color_7">
                                                    <span class="material-symbols-outlined fill">supervisor_account</span>
                                                </div>
                                                <div class="text">
                                                    Users
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_8">
                                                    <span class="material-symbols-outlined fill">card_membership</span>
                                                </div>
                                                <div class="text">
                                                    Subscribers
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a @click="push_windows(`blogs`)" href="#">
                                                <div class="icon bg_color_9">
                                                    <span class="material-symbols-outlined fill">news</span>
                                                </div>
                                                <div class="text">
                                                    Blog
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_10">
                                                    <span class="material-symbols-outlined fill">format_list_bulleted_add</span>
                                                </div>
                                                <div class="text">
                                                    Contacts
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="menu_apart">
                                    <h4>Frontend Management</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_11">
                                                    <span class="material-symbols-outlined fill">image</span>
                                                </div>
                                                <div class="text">
                                                    Banners
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon bg_color_1">
                                                    <span class="material-symbols-outlined fill">speaker_notes</span>
                                                </div>
                                                <div class="text">
                                                    Notice
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="icon_link_li"><a href="#" class="navigation_link"><span
                            class="material-symbols-outlined fill">search</span></a></li>
                <li class="icon_link_li"><a href="#" class="navigation_link"><span
                            class="material-symbols-outlined fill">mail</span></a></li>
                <li class="icon_link_li"><a href="#" class="navigation_link"><span
                            class="material-symbols-outlined fill">event</span></a></li>
                <li class="icon_link_li"><a href="#" class="navigation_link"><span
                            class="material-symbols-outlined fill">checklist</span></a></li>
            </ul>
        </div>
        <div class="active_window">
            <ul>
                <!-- <li>{{ active_windows.length }}</li> -->
                <li v-for="(i,index) in active_windows" :key="index"><a @click="push_windows(i.el); toggle_hide(i.el)" href="#" >{{ i.el }}</a></li>
            </ul>
        </div>
        <div class="right">
            <ul class="navigation_list">
                <li class="icon_link_li"><a href="#" class="navigation_link"><span
                            class="material-symbols-outlined fill">expand_less</span></a></li>
                <li class="icon_link_li"><a href="#" onclick="full_screen()" class="navigation_link"><span
                            class="material-symbols-outlined fill">fullscreen</span></a></li>
                <li class="icon_link_li"><a href="#" class="navigation_link"><span
                            class="material-symbols-outlined fill">settings</span></a></li>
                <li class="icon_link_li"><a href="#" class="navigation_link"><span
                            class="material-symbols-outlined fill">wifi</span></a></li>

                <li class="nave_date_time">
                    <a href="#" class="">
                        <span>09:47:34</span>
                        <span class="meridian">AM</span>
                        <span>Tue 18 Nov</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { ui_store } from '../../stores/ui_store';

export default {
    
    methods: {
        ...mapActions(ui_store,{
            push_windows: "push_windows",
            toggle_hide: "toggle_hide",
        })
    },
    computed: {
        ...mapState(ui_store, ['active_windows'])
    }
}
</script>

<style></style>