<template>
    <!-- Start Section-->
    <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Recherche par catégories</h3>
                        <p class="text-slate-400 max-w-xl">Découvrez une large gamme de catégories de services proposés.</p>
                    </div>

                    <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <a href="" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Toutes les catégories <i class="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative">
                <div class="grid grid-cols-1 relative">
                    <div class="tiny-five-item">
                        <div v-for="item in datas" :key="item" class="tiny-slide">
                            <div class="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 duration-500 m-2">
                                <div class="size-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 duration-500 mx-auto">
                                    <i :class="item.icon"></i>
                                </div>

                                <div class="content mt-6">
                                    <router-link to="/page-job-grid" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.name}} </router-link>
                                    <p class="text-slate-400 mt-3">{{item.job}}</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div><!--grid-->

                <div class="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div class="md:col-span-12 text-center">
                        <a href="" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Toutes les catégories <i class="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Section-->

</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';
    export default {
        data() {
            return {
                datas:[
                    {
                        icon: 'uil uil-wheel-barrow',
                        name: 'Génie Civil',
                        name2: 'Development',
                        job: '74 Prestataires'
                    },
                    {
                        icon: 'uil uil-bolt-slash',
                        name: 'Génie Électrique',
                        name2: 'Communication',
                        job: '20 Prestataires'
                    },
                    {
                        icon: 'uil uil-chart-pie-alt',
                        name: 'Mécanique',
                        name2: 'Management',
                        job: '35 Prestataires'
                    },
                    {
                        icon: 'uil uil-feedback',
                        name: 'Industrie',
                        name2: 'Service',
                        job: '46 Prestataires'
                    },
                    {
                        icon: 'uil uil-presentation-line',
                        name: 'Agriculture',
                        name2: 'Engineering',
                        job: '60 Prestataires'
                    },
                    {
                        icon: 'uil uil-car-sideview',
                        name: 'Réparations Automobiles',
                        name2: 'Resources',
                        job: '05 Prestataires'
                    },
                ]
            }
        },
        mounted() {
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
        },
         
    }
</script>

<style lang="scss" scoped>

</style>