<template>
    <div id="app">
        <div class="app_body">
            <!-- <all-blog></all-blog> -->
            <!-- <component v-for="i in active_windows" :key="i.el" :is="i.el" v-bind="{el: i}"></component> -->
            <!-- <all-user></all-user> -->
            <UserRender></UserRender>
            <router-view></router-view>
        </div>
        <Nav></Nav>
    </div>
</template>

<script setup>

</script>
<script>
import { mapState } from 'pinia';
import { useCounterStore } from './stores/counter';
import { ui_store } from './stores/ui_store';

import Nav from './views/includes/Nav.vue';

import UserRender from './views/user/Render.vue';


export default {
    components: { Nav, UserRender },
    created: function(){
        // this.$watch('active_windows',function(v){
        //     console.log(v);
        // })
    },
    computed: {
        ...mapState(useCounterStore, ['active_windows']),
        ...mapState(ui_store, ['active_windows']),
    }
}
</script>