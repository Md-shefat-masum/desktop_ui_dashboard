<template>
    <details-layout>
        <div class="details custom_scroll">
            <table class="details_table" >
                <tbody>
                    <tr v-for="i in ['first name','last name','email','phone number','address']" :key="i">
                        <td>{{ i }}</td>
                        <td>:</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, culpa.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </details-layout>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import DetailsLayout from './components/DetailsLayout.vue';
export default {
    components: { DetailsLayout },
    data: function(){
        return {
        }
    },
    created: function(){
    },
    methods: { 
    },
    computed: {
    }
}
</script>

<style></style>