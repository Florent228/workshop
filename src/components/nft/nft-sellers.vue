<template>
    <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Best Creators & Sellers</h3>
                        <p class="text-slate-400 max-w-xl">Best sellers of the week's NFTs</p>
                    </div>

                    <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <router-link to="/nft-creators" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                    </div>
                </div><!--end grid-->

                <div class="grid grid-cols-1 mt-2 md:mt-6 relative">
                    <div class="tiny-five-item">
                        <!-- Slide -->
                        <div v-for="seller in sellers" :key="seller" class="tiny-slide">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out m-2 mb-5">
                                <div class="py-10 bg-gradient-to-r" :class="seller.bgclass"></div>
                                <div class="p-6 pt-0 -mt-10 text-center">
                                    <img :src="seller.image" class="size-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="">
        
                                    <div class="mt-4">
                                        <router-link to="/nft-creator-profile" class="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{{ seller.name }}</router-link>
                                        <span class="text-slate-400">{{ seller.sellerid }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Slide -->
                    </div>
                </div><!--end grid-->

                <div class="grid md:grid-cols-12 grid-cols-1 md:hidden">
                    <div class="md:col-span-12 text-center">
                        <router-link to="/nft-creators" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
    export default {
        data() {
            return {
                sellers:[
                    {
                        bgclass:'to-orange-600/70 from-indigo-600/70',
                        image: require('../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo',
                        sellerid: '@calvin_carlo'
                    },
                    {
                        bgclass:'to-red-600/70 from-indigo-600/70',
                        image: require('../../assets/images/client/02.jpg'),
                        name: 'Tiffany Betancourt',
                        sellerid: '@cutiegirl'
                    },
                    {
                        bgclass:'to-fuchsia-600/70 from-green-600/70',
                        image: require('../../assets/images/client/03.jpg'),
                        name: 'Mari Harrington',
                        sellerid: '@norse_queen'
                    },
                    {
                        bgclass:'to-pink-600/70 from-purple-600/70',
                        image: require('../../assets/images/client/04.jpg'),
                        name: 'Floyd Glasgow',
                        sellerid: '@bigbull'
                    },
                    {
                        bgclass:'to-indigo-600/70 from-blue-600/70',
                        image: require('../../assets/images/client/05.jpg'),
                        name: 'Donna Schultz',
                        sellerid: '@angel'
                    },
                    {
                        bgclass:'to-orange-600/70 from-indigo-600/70',
                        image: require('../../assets/images/client/06.jpg'),
                        name: 'Joshua Morris',
                        sellerid: '@crazyanyone'
                    },
                    {
                        bgclass:'to-sky-600/70 from-yellow-600/70',
                        image: require('../../assets/images/client/07.jpg'),
                        name: 'Carl Williams',
                        sellerid: '@looserbad'
                    },
                    {
                        bgclass:'to-lime-600/70 from-rose-600/70',
                        image: require('../../assets/images/client/08.jpg'),
                        name: 'Eugene Green',
                        sellerid: '@kristyhoney'
                    },
                ]
            }
        },
        setup() {
        onMounted(() => {
            tns({
                container: '.tiny-five-item',
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
                items: 5
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            425: {
                items: 1
            },
        },
    });
        });
    },
    }
</script>

<style lang="scss" scoped>

</style>