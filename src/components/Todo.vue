<template>
    <div class="todo_app">
        <div class="card">
            <div class="todo_app_body">
                <div class="todo_header">
                    <span class="material-symbols-outlined fill">checklist</span>
                    <div>
                        Todo List
                    </div>
                </div>
                <div class="todo_list custom_scroll">
                    <div class="item" v-for="i in 10" :key="i">
                        <div class="check">
                            <input type="checkbox" class="form_checkbox">
                        </div>
                        <div class="description">
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div class="todo_create">
                    <input placeholder="Add a task" type="text">
                    <button class="btn">
                        <span class="material-symbols-outlined fill">send</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>