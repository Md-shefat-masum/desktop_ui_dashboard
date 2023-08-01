<template>
    <create-layout>
        <div class="form custom_scroll">
            <form id="user_create_form" action="">
                <div class="form_input_grid">
                    <input-field :name="'first_name'" :label="`First Name`"></input-field>
                    <input-field :name="'last_name'" :label="`Last Name`"></input-field>
                    <input-field :name="'user_name'" :label="`User Name`"></input-field>
                    <input-field :name="'email'" :label="`Email`"></input-field>
                    <input-field :name="'mobile_number'" :label="`Contact Number`"></input-field>
                    <input-field :name="'password'" :label="`Password`" :type="`password`"></input-field>

                    <div class="form_group">
                        <div>
                            <label for="select">
                                <span class="material-symbols-outlined "> label_important </span>
                                <div class="text required">
                                    User Role
                                </div>
                            </label>
                            <select name="user_role_id" id="user_role_id">
                                <option value="">one</option>
                                <option value="">two</option>
                                <option value="">three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </create-layout>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import CreateLayout from './components/CreateLayout.vue';
import InputField from './components/InputField.vue';
import { user_store } from '../../stores/user_store';
export default {
    components: { CreateLayout, InputField },
    data: function(){
        return {

        }
    },
    created: function(){
    },
    methods: {
        ...mapActions(user_store, ['store_user'])
    },
    computed: {

    }
}
</script>

<style></style>
