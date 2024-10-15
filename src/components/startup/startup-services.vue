<template>
     <!-- Start -->
     <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 duration-500">
                        <div
                            class="size-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 duration-500">
                            <i :class="item.icon"></i>
                        </div>

                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{ item.title }}</router-link>
                            <p class="text-slate-400 mt-3">{{ item.desc }}</p>

                            <div class="mt-5">
                                <a href=""
                                    class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read
                                    More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!--end feature content-->
                </div>
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        icon: 'uil uil-presentation-line',
                        title: 'Digital Marketing',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'uil uil-bill',
                        title: 'Investing',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'uil uil-money-withdrawal',
                        title: 'Mortgage Advisor',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'uil uil-presentation-line',
                        title: 'Real Estate',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'uil uil-usd-circle',
                        title: 'Payroll & Accounting',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'uil uil-invoice',
                        title: 'Branch Registration',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>