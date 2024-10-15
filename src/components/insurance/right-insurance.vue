<template>
    <!-- Start Section-->
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 items-end">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span
                        class="text-indigo-600">Get the right protection</span> <br> and move forward</h3>
                <p class="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and
                    global payments to scaling your team.</p>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="container-fluid relative mt-8">
            <div class="grid grid-cols-1 mt-8">
                <div class="tiny-six-item">
                    <div v-for="item in datas" :key="item" class="tiny-slide">
                        <div class="mx-2">
                            <div class="group relative block overflow-hidden rounded-md duration-500">
                                <a href="" title="">
                                    <img :src="item.image" class="duration-500 group-hover:scale-105" alt="work-image">
                                    <div
                                        class="absolute inset-0 group-hover:bg-indigo-600 opacity-0 group-hover:opacity-70 duration-500">
                                    </div>
                                </a>
                            </div>
                            <div class="p-4 pb-0">
                                <a href=""
                                    class="relative inline-block font-semibold tracking-wide align-middle text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 text-xl duration-500 ease-in-out">{{
                        item.name }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Section -->
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';
export default {
    data() {
        return {
            datas: [
                {
                    image: require('../../assets/images/insurance/1.jpg'),
                    name: 'Health Insurance'
                },
                {
                    image: require('../../assets/images/insurance/2.jpg'),
                    name: 'Life Insurance'
                },
                {
                    image: require('../../assets/images/insurance/3.jpg'),
                    name: 'Property Insurance'
                },
                {
                    image: require('../../assets/images/insurance/4.jpg'),
                    name: 'Term Insurance'
                },
                {
                    image: require('../../assets/images/insurance/5.jpg'),
                    name: 'General Insurance'
                },
                {
                    image: require('../../assets/images/insurance/6.jpg'),
                    name: 'Vehicle Insurance'
                },
                {
                    image: require('../../assets/images/insurance/7.jpg'),
                    name: 'Retirement Plans'
                },
            ]
        }
    },
    mounted() {
        tns({
            container: '.tiny-six-item',
            controls: true,
            mouseDrag: true,
            loop: true,
            rewind: true,
            autoplay: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 3000,
            navPosition: "bottom",
            controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: false,
            speed: 400,
            gutter: 0,
            responsive: {
                1025: {
                    items: 6
                },

                992: {
                    items: 4
                },

                767: {
                    items: 3
                },

                320: {
                    items: 1
                },
            },
        });
    },

}
</script>

<style lang="scss" scoped></style>