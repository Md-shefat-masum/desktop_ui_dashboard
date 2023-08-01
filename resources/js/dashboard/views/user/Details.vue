<template>
    <details-layout>
        <div class="details custom_scroll">
            <table class="details_table" >
                <tbody>
                    <tr v-for="i in ['first_name','last_name','user_name','email','mobile_number']" :key="i">
                        <td>{{ i.replaceAll('_',' ') }}</td>
                        <td>:</td>
                        <td>{{ user[i] }}</td>
                    </tr>
                    <tr>
                        <td>roles</td>
                        <td>:</td>
                        <td>
                            <span v-for="role in user.roles" :key="role.id">
                                {{ role.name }}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>permissions</td>
                        <td>:</td>
                        <td>
                            <span v-for="permission in user.permissions" :key="permission.id">
                                {{ permission.title }}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>photo</td>
                        <td>:</td>
                        <td>
                            <img style="height: 60px;" :src="user.photo_url" alt="">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </details-layout>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import DetailsLayout from './components/DetailsLayout.vue';
import { user_store } from '../../stores/user_store';
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
        ...mapState(user_store,['user'])
    }
}
</script>

<style></style>
