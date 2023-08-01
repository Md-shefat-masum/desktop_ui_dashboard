<template>
    <div id="app" v-if="auth_status">
        <div class="app_body">
            <!-- <component v-for="i in active_windows" :key="i.el" :is="i.el" v-bind="{el: i}"></component> -->
            <UserRender></UserRender>
            <BlogRender></BlogRender>
            <CourseRender></CourseRender>
            <router-view></router-view>
        </div>
        <Nav></Nav>
    </div>
    <div v-else>
        checking..
    </div>
</template>

<script setup>

</script>
<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from './stores/counter';
import { ui_store } from './stores/ui_store';
import { auth_store } from './stores/auth_store';

import Nav from './views/includes/Nav.vue';

import UserRender from './views/user/Render.vue';
import BlogRender from './views/blog/Render.vue';
import CourseRender from './views/course/Render.vue';

export default {
    components: { Nav, UserRender, BlogRender, CourseRender },
    created: function(){
        // this.$watch('active_windows',function(v){
        //     console.log(v);
        // })
        this.auth_check();
    },
    data: ()=>({

    }),
    methods: {
        ...mapActions(auth_store,['auth_check']),
    },
    computed: {
        ...mapState(useCounterStore, ['active_windows']),
        ...mapState(auth_store, ['auth_status']),
    }
}
</script>
