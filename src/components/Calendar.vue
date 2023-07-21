<template>
    <div class="calendar_app">
        <div class="card">
            <div class="calendar_box">
                <div class="calendar_navbar">
                    <div class="selected_details" @click="openSelection">{{ months[selectedMonth] }} {{selectedDate}}, {{ selectedYear }}</div>
                    <div class="navigations">
                        <button @click="goToPrevMonth">
                            <span class="material-symbols-outlined">expand_less</span>
                        </button>
                        <button @click="goToNextMonth">
                            <span class="material-symbols-outlined">expand_more</span>
                        </button>
                    </div>
                </div>
                <div class="month_year_selection">
                    <div v-if="showSelection" class="selection-dropdown">
                        <select v-model="selectedMonth" @change="updateCalendar">
                            <option v-for="(month, index) in months" :value="index" :key="index">{{ month }}</option>
                        </select>
                        <select v-model="selectedYear" @change="updateCalendar">
                            <option v-for="(year, index) in years" :value="year" :key="index">{{ year }}</option>
                        </select>
                    </div>
                </div>
                <div class="calendar_body">
                    <table>
                        <thead>
                            <tr>
                                <th v-for="(day,index) in daysOfWeek" :key="index">
                                    <div :class="{friday: day=='Fri'}">
                                        {{ day }}
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(week,index) in calendar" :key="index">
                                <td v-for="(day,index) in week" :key="index" @click="selectDate(day)">
                                    <div :class="getDayClasses(day)">
                                        {{ day.date }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="selectedDate && showEventForm" class="event_popup_form">
                    <!-- Event form -->
                    {{ selectedDate }} {{ months[selectedMonth] }} {{ selectedYear }}
                    <form action="#">
                        <div class="title">
                            <input placeholder="Task title" type="text">
                        </div>
                        <div class="select_time">
                            <input placeholder="start time" type="datetime-local">
                            <div>to</div>
                            <input placeholder="end time" type="datetime-local">
                        </div>
                        <div class="location">
                            <input placeholder="Place &amp; Location" type="text">
                        </div>
                        <div class="description">
                            <textarea placeholder="Description"></textarea>
                        </div>
                        <div class="action">
                            <button class="btn">save</button>
                            <button class="btn" @click="showEventForm = false" type="reset">close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Calendar',
    data() {
        return {
            selectedMonth: null,
            selectedYear: null,
            selectedDate: null,
            showSelection: false,
            showEventForm: false,
            daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            calendar: [],
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            years: []
        };
    },
    mounted() {
        this.initializeYears();
        this.setInitialMonthYear();
        this.generateCalendar();
    },
    methods: {
        initializeYears() {
            const currentYear = new Date().getFullYear();
            for (let i = currentYear - 10; i <= currentYear + 10; i++) {
                this.years.push(i);
            }
        },
        setInitialMonthYear() {
            const currentDate = new Date();
            this.selectedMonth = currentDate.getMonth();
            this.selectedYear = currentDate.getFullYear();
        },
        goToPrevMonth() {
            if (this.selectedMonth === 0) {
                this.selectedMonth = 11;
                this.selectedYear--;
            } else {
                this.selectedMonth--;
            }
            this.generateCalendar();
        },
        goToNextMonth() {
            if (this.selectedMonth === 11) {
                this.selectedMonth = 0;
                this.selectedYear++;
            } else {
                this.selectedMonth++;
            }
            this.generateCalendar();
        },
        openSelection() {
            this.showSelection = !this.showSelection;
        },
        closeSelection() {
            this.showSelection = false;
        },
        updateCalendar() {
            this.generateCalendar();
        },
        selectDate(day) {
            this.showEventForm = true;
            this.selectedDate = day.date;
        },
        getDayClasses(day) {
            let classes = [];
            if (day.isFriday) {
                classes.push('friday');
            }
            if (day.isToday) {
                classes.push('today');
            }
            return classes;
        },
        generateCalendar() {
            const firstDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
            const daysInMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
            const calendar = [];
            let week = [];
            let dayCounter = 1;

            // Add blank boxes for days before the first day of the month
            for (let i = 0; i < firstDay; i++) {
                week.push({ date: '' });
            }

            // Generate calendar grid
            for (let i = 1; i <= daysInMonth; i++) {
                week.push({ date: i, isFriday: this.isFriday(i), isToday: this.isToday(i) });

                if (week.length === 7) {
                    calendar.push(week);
                    week = [];
                }

                dayCounter++;
            }

            // Add blank boxes for days after the last day of the month
            while (week.length < 7) {
                week.push({ date: '' });
            }

            calendar.push(week);

            this.calendar = calendar;
        },
        isFriday(day) {
            const date = new Date(this.selectedYear, this.selectedMonth, day);
            return date.getDay() === 5; // Friday is represented by index 5 (0 = Sunday, 6 = Saturday)
        },
        isToday(day) {
            const today = new Date();
            const check = (
                this.selectedYear === today.getFullYear() &&
                this.selectedMonth === today.getMonth() &&
                day === today.getDate()
            );

            if(check){
                this.selectedDate = day;
                // this.showEventForm = true;
            }

            return check;
        },
        submitForm() {
            // Logic to handle form submission
        },
        closeForm() {
            this.selectedDate = null;
        }
    }
};
</script>
  
<style scoped>
/* CSS styles for the calendar app */
</style>