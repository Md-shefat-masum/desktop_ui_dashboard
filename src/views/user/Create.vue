<template>
    <create-layout>
        <div class="form custom_scroll">
            <form action="">
                <div class="form_input_grid">
                    <div class="form_group" v-for="i in 15" :key="i">
                        <label for="first_name">
                            <span class="material-symbols-outlined "> label_important </span>
                            <div class="text">
                                first name
                            </div>
                        </label>
                        <input :id="`first_name${i}`" name="first_name" class="form_input" type="text" >
                    </div>
                    <div class="form_group">
                        <label for="first_name">
                            <span class="material-symbols-outlined "> label_important </span>
                            <div class="text required">
                                Select 
                            </div>
                        </label>
                        <select name="" id="">
                            <option value="">one</option>
                            <option value="">two</option>
                            <option value="">three</option>
                        </select>
                        <div class="alert_message">
                            <p>this field is required</p>
                        </div>
                    </div>
                </div>
                <div class="form_input_full">
                    <div class="form_group">
                        <label for="first_name">
                            <span class="material-symbols-outlined "> label_important </span>
                            <div class="text">
                                descriptin
                            </div>
                        </label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </create-layout>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import CreateLayout from './components/CreateLayout.vue';
export default {
    components: { CreateLayout },
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