<template>
    <div class="app_window">
        <all v-if="is_in_window_list(layout_setup.all)"></all>
        <create v-if="is_in_window_list(layout_setup.create)"></create>
        <Details v-if="is_in_window_list(layout_setup.details)"></Details>
        <edit v-if="is_in_window_list(layout_setup.edit)"></edit>
    </div>
</template>

<script>
import All from './All.vue'
import Create from './Create.vue'
import Details from './Details.vue'
import Edit from './Edit.vue'
import layout_setup from './components/layout_setup';
import { mapActions, mapState } from 'pinia'
import { ui_store } from '../../stores/ui_store'

export default {
    components: { All, Create, Details, Edit },
    data: ()=>({
        layout_setup,
    }),
    methods: {
        ...mapActions(ui_store,['is_in_window_list']),
    },
    computed: {
        ...mapState(ui_store,['active_windows'])
    }
}
</script>

<style>

</style>
