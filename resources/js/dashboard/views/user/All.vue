<template>
    <all-layout>
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
                        <tr v-for="i in users.data" :id="i.id" :key="i.id" class="">
                            <td>
                                <span @click="active_table_row()" class="icon"></span>
                                <div class="table_action_btns">
                                    <ul>
                                        <li><a @click.prevent="$event.stopPropagation(); push_windows(layout_setup.details); fetch_user(i.id)" :href="'/user/'+i.id">Show</a></li>
                                        <li><a @click.prevent="$event.stopPropagation(); push_windows(layout_setup.edit)" href="#">Edit</a></li>
                                        <li><a href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <input type="checkbox">
                            </td>
                            <td>{{ i.id }}</td>
                            <td>{{ i.first_name }}</td>
                            <td>{{ i.last_name }}</td>
                            <td>{{ i.email }}</td>
                            <td>{{ i.mobile_number }}</td>
                            <td>
                                <img style="height: 30px;" :src="i.photo_url" alt="">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="pagination_part">
                <ul class="pagination">
                    <li v-for="paginate in users.links" :key="paginate.label">
                        <a @click.prevent="goto_page(paginate.url)" :class="{active:paginate.active}" :href="paginate.url">
                            <span v-html="paginate.label.replaceAll(/Previous|Next/ig,'')"></span>
                        </a>
                    </li>
                </ul>
                <div class="showing">
                    {{ users.from }} - {{ users.to }} of {{ users.total }}
                </div>
                <div class="limit">
                    <select name="" @change="set_paginate($event.target.value)" :value="users.per_page" id="">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
        </div>
    </all-layout>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import AllLayout from './components/AllLayout.vue';
import layout_setup from './components/layout_setup';
import { ui_store } from '../../stores/ui_store';
import { user_store } from '../../stores/user_store';

export default {
    components: { AllLayout },
    data: function(){
        return {
            layout_setup,
        }
    },
    created: function(){
        this.fetch_users();
    },
    watch: {
    },
    methods: {
        ...mapActions(ui_store,["push_windows"]),
        ...mapActions(user_store,["fetch_users","set_page","set_search_key","set_paginate", "fetch_user"]),

        goto_page: function(url){
            url && this.set_page(new URL(url).searchParams.get(`page`));
        },

        active_table_row: function() {
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
        ...mapState(user_store,['users','page']),
    }
}
</script>

<style></style>
