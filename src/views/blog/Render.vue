<template>
    <div class="app_window">
        <!-- <component v-for="(i,index) in components" :key="index" :is="i"></component> -->
        <all></all>
        <create></create>
        <Details></Details>
        <edit></edit>
    </div>
</template>

<script>
import All from './All.vue'
import Create from './Create.vue'
import Details from './Details.vue'
import Edit from './Edit.vue'
export default {
    components: { All, Create, Details, Edit },
}
</script>

<style>

</style>