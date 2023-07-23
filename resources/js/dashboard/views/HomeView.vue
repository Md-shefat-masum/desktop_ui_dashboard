<template>
  <div>
    <calendar></calendar>
    <todo></todo>
    <home-time-date></home-time-date>
  </div>
</template>

<script>
import Calendar from "../components/Calendar.vue";
import HomeTimeDate from '../components/HomeTimeDate.vue';
import Todo from '../components/Todo.vue';

export default {
  components: {Calendar, Todo, HomeTimeDate},
}
</script>
