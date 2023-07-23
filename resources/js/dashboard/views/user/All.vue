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
                        <tr v-for="i in 10" :id="i" :key="i" class="">
                            <td>
                                <span @click="active_table_row()" class="icon material-symbols-outlined"> add_circle
                                </span>
                                <div class="table_action_btns">
                                    <ul>
                                        <li><a @click="$event.stopPropagation(); push_windows(layout_setup.details)" href="#">Show</a></li>
                                        <li><a @click="$event.stopPropagation(); push_windows(layout_setup.edit)" href="#">Edit</a></li>
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
                    10 - 20 of 100
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
    </all-layout>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import AllLayout from './components/AllLayout.vue';
import layout_setup from './components/layout_setup';
import { ui_store } from '../../stores/ui_store';
export default {
    components: { AllLayout },
    data: function(){
        return {
            layout_setup,
        }
    },
    created: function(){
    },
    watch: {
    },
    methods: {
        ...mapActions(ui_store,["push_windows"]),
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
    }
}
</script>

<style></style>