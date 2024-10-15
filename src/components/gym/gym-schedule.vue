<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h5 class="font-semibold text-base text-indigo-600 mb-2">Timetable</h5>
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Gym Schedule</h3>

            <p class="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and we'll
                support you with advice on new and better ways to train.</p>
        </div><!--end grid-->

        <div class="grid grid-cols-1 items-center mt-8">
            <div class="filters-group-wrap text-center">
                <div class="filters-group">
                    <ul class="mb-0 list-none container-filter filter-options space-x-3">
                        <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                            :class="selectedDay == null ? 'active' : ''" @click="macthDay(e, null)">All</li>
                        <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                            :class="selectedDay == 'monday' ? 'active' : ''" data-group="monday"
                            @click="macthDay(e, 'monday')">Monday</li>
                        <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                            :class="selectedDay == 'tuesday' ? 'active' : ''" data-group="tuesday"
                            @click="macthDay(e, 'tuesday')">Tuesday</li>
                        <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                            :class="selectedDay == 'wednesday' ? 'active' : ''" data-group="wednesday"
                            @click="macthDay(e, 'wednesday')">Wednesday</li>
                        <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                            :class="selectedDay == 'thursday' ? 'active' : ''" data-group="thursday"
                            @click="macthDay(e, 'thursday')">Thursday</li>
                        <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                            :class="selectedDay == 'friday' ? 'active' : ''" data-group="friday"
                            @click="macthDay(e, 'friday')">Friday</li>
                        <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                            :class="selectedDay == 'saturday' ? 'active' : ''" data-group="saturday"
                            @click="macthDay(e, 'saturday')">Saturday</li>
                    </ul>
                </div>
            </div>
        </div><!--grid-->

        <div id="grid" class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-clos-3 grid-cols-2 gap-[30px] mt-8">
            <div v-for="schedule in schedules" :key="schedule" class="picture-item picture-item-gym" :data-groups='schedule.day'>
                <div class="text-center p-6 shadow dark:shadow-gray-800 rounded-md">
                    <img :src="schedule.image" class="size-16 mx-auto" alt="">

                    <div class="content mt-6">
                        <h5 class="font-semibold text-lg">{{ schedule.name }}</h5>
                        <small class="text-slate-400 mb-0">{{ schedule.time }}</small>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
export default {
    data() {
        return {
            selectedDay: null,
            items: '',
            schedules: [
                {
                    image: require('../../assets/images/gym/icon/bench-press.png'),
                    name: 'Deadlift',
                    time: '06AM - 07AM',
                    day: '["monday", "wednesday", "friday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/chest-expander.png'),
                    name: 'Back squat',
                    time: '07AM - 08AM',
                    day: '["monday", "wednesday", "friday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/dumbbell.png'),
                    name: 'Bench Press',
                    time: '08AM - 09AM',
                    day: '["tuesday", "thursday", "saturday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/gymnastic-rings.png'),
                    name: 'Dumbbell',
                    time: '09AM - 10AM',
                    day:'["monday", "wednesday", "friday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/hand-grip.png'),
                    name: 'Pushups',
                    time: '11AM - 12AM',
                    day: '["tuesday", "thursday", "saturday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/skipping-rope.png'),
                    name: 'Chest',
                    time: '05AM - 06AM',
                    day: '["monday", "wednesday", "friday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/kettlebell.png'),
                    name: 'Kettlebell',
                    time: '06AM - 07AM',
                    day: '["tuesday", "thursday", "saturday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/man.png'),
                    name: 'Pullup',
                    time: '07AM - 08AM',
                    day: '["monday", "wednesday", "friday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/pool.png'),
                    name: 'Biceps',
                    time: '08AM - 09AM',
                    day: '["tuesday", "thursday", "saturday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/punching-bag-2.png'),
                    name: 'Triceps',
                    time: '09AM - 10AM',
                    day: '["monday", "wednesday", "friday"]'
                },
                {
                    image: require('../../assets/images/gym/icon/punching-bag.png'),
                    name: 'Legs',
                    time: '11AM - 12AM',
                    day: '["tuesday", "thursday", "saturday"]'
                },

            ],
           
        }
    },
    methods: {
         macthDay(e,group) {
        this.items = document.querySelectorAll('.picture-item-gym');
        this.selectedDay = group;
        this.items.forEach(function (item) {
           const groups = JSON.parse(item.getAttribute('data-groups'));
            if (group === null || groups.includes(group)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

       
    },

}
</script>

<style lang="scss" scoped></style>