<template>
    <!-- Start CTA -->
    <section class="relative table w-full py-36 bg-[url('../../assets/images/event/bg3.jpg')] bg-no-repeat bg-bottom bg-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <div class="pb-8">
                        <h6 class="text-white/50 text-sm font-bold uppercase mb-2">Hurry up & Register</h6>
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Not yet registered? <br> Hurry up!</h3>

                        <p class="text-white/50 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                
                    <div id="countdown">
                        <ul class="count-down list-none inline-block text-white text-center mt-8">
                            <li id="days" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">  {{ days }}<p class="count-head">Days</p></li>
                            <li id="hours" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{{ hours }}<p class="count-head">Hours</p></li>
                            <li id="mins" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{{ minutes }}<p class="count-head">Minutes</p></li>
                            <li id="secs" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{{ seconds }}<p class="count-head">Seconds</p></li>
                            <li id="end" class="h1"></li>
                        </ul>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End CTA -->
</template>

<script>
    export default {
        data() {
            return {
                date1: new Date().getFullYear(),
            date: '',
            now: '',
            countDownToTime: new Date("Sep 26, 2025 00:00:00").getTime(),
            targetTime: () => this.targetDate.getTime(),
            difference: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            }
        },
        mounted() {
        this.intervalId = setInterval(() => {
            this.tickTock();
            this.difference = this.countDownToTime - this.now;
            this.difference = this.difference / (1000 * 60 * 60 * 24);
        }, 1000);

    },
    methods: {
        tickTock() {
            this.date = new Date();
            this.now = this.date.getTime();
            this.days = Math.floor(this.difference);
            this.hours = 23 - this.date.getHours();
            this.minutes = 60 - this.date.getMinutes();
            this.seconds = 60 - this.date.getSeconds();
        }
    },
    }
</script>

<style lang="scss" scoped>

</style>