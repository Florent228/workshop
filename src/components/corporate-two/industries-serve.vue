<template>
   <div class="container relative md:mt-24 mt-16 pt-16">
                <div class="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>

                <div class="relative grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">The Industries We Serve</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group px-6 py-8 bg-white dark:bg-slate-900 shadow hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out border-t-[3px] border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600">
                        <i :class="item.icon"></i>

                        <div class="content mt-6">
                            <a href="" class="text-xl font-semibold hover:text-indigo-600 duration-500 ease-in-out">{{item.name}}</a>
                            <p class="text-slate-400 mt-4">{{item.desc}}</p>
                            
                            <div class="mt-5">
                                <a href="" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        icon: 'uil uil-university text-3xl text-indigo-600',
                        name: 'Banking & Finance',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'uil uil-pizza-slice text-3xl text-indigo-600',
                        name: 'Food & Commodities',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'uil uil-building text-3xl text-indigo-600',
                        name: 'Real estate',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>