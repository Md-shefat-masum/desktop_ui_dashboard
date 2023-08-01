<template>
    <div class="home_time_and_date">
        <div class="home_time_and_date_body">
            <div class="date">
                <div class="day">
                    {{ $moment().format('dddd') }}
                </div>
                <div class="month">
                    <div class="month_name">{{ $moment().format('MMMM') }}</div>
                    <div class="">{{ $moment().format('DD') }}</div>
                </div>
            </div>
            <div class="time">
                <div class="amt hour">{{ hour }}</div>
                <div class="divider">:</div>
                <div class="amt min">{{ min }}</div>
                <div class="divider">:</div>
                <div class="amt sec">{{ sec }}</div>
                <div class="med">{{ med }}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        hour: '',
        min: '',
        sec: '',
        med: '',
    }),
    created: function(){
        let moment = this.$moment;
        let that = this;
        setInterval(function(){
            that.hour = moment().format('hh')
            that.min = moment().format('mm')
            that.sec = moment().format('ss')
            that.med = moment().format('a')
        }, 1000);
    }
}
</script>

<style></style>
