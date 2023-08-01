<template>
    <div class="form_group">
        <div>
            <label :for="name">
                <span class="material-symbols-outlined "> label_important </span>
                <div class="text">
                    {{ label }}
                </div>
            </label>
            <input :id="name" :name="name" class="form_input" :type="type || 'text'">
        </div>
    </div>
</template>

<script>
export default {
    props: ['name','label','type']
}
</script>

<style></style>
