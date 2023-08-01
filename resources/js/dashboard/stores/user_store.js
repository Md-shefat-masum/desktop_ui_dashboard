import _debounce from 'debounce';
import { defineStore } from 'pinia'

export const user_store = defineStore({
    id: 'user_store',
    state: () => ({
        users: {},
        user: {},
        page: 1,
        paginate: 10,
        orderBy: 'id',
        orderByType: 'ASC',
        search_key: '',
    }),
    getters: {
    },
    actions: {
        fetch_users: async function() {
            let query = `page=${this.page}&paginate=${this.paginate}&orderBy=${this.orderBy}&orderByType=${this.orderByType}&search_key=${this.search_key}`
            let res = await axios("/user/all?"+query);
            this.users = res.data;
            console.log(res.data);
        },
        fetch_user: async function(id) {
            let res = await axios("/user/"+id);
            this.user = res.data;
            console.log(res.data);
        },
        store_user: async function() {
            let form_data = new FormData(document.getElementById("user_create_form"))
            let res = await axios.post("/user/store",form_data);
            this.user = res.data;
            console.log(res.data);
        },
        set_page: function(page){
            this.page = page;
            this.fetch_users();
        },
        set_search_key: _debounce(function(search_key){
            this.search_key = search_key;
            this.fetch_users();
        },500),
        set_paginate: function(paginate){
            this.paginate = paginate;
            this.fetch_users();
        },
    }
})
