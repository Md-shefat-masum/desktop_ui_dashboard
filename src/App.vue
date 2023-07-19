<template>
    <div id="app">
        <div class="app_body">
            <!-- <all-blog></all-blog> -->
            <component v-for="i in active_windows" :key="i.el" :is="i.el" v-bind="{el: i}"></component>
            <!-- <all-user></all-user> -->
            <router-view></router-view>
        </div>
        <Nav></Nav>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import Nav from './views/includes/Nav.vue';
import { useCounterStore } from './stores/counter';

import AllBlog from './views/blog/AllBlog.vue';

import AllUser from './views/user/AllUser.vue';
import CreateUser from './views/user/Create.vue';
import EditUser from './views/user/Edit.vue';
import DetailsUser from './views/user/Details.vue';

import AllContact from './views/AllContact.vue';
import AllSubscriber from './views/AllSubscriber.vue';
export default {
    components: { Nav, AllBlog, AllUser, AllContact, AllSubscriber, CreateUser, EditUser, DetailsUser },
    computed: {
        ...mapState(useCounterStore, ['active_windows']),
    }
}
</script>