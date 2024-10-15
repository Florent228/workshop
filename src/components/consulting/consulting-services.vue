<template>
   
        <!-- Start -->
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business Consulting Services</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div  class="group relative">
                        <div class="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <img src="../../assets/images/consulting/1.jpg" class="" alt="">
                            <div class="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div class="mt-6">
                            <a href="" class="text-xl font-semibold hover:text-indigo-600 duration-500">Profitable Marketing</a>

                            <p class="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div class="mt-4">
                                <a href="" class="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span class="hidden group-hover:inline-block">Read More</span> <i class="uil uil-arrow-right align-middle text-lg"></i></a>
                            </div>
                        </div>
                    </div><!--end content-->

                    <div class="group relative">
                        <div class="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <img src="../../assets/images/consulting/2.jpg" class="" alt="">
                            <div class="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div class="mt-6">
                            <a href="" class="text-xl font-semibold hover:text-indigo-600 duration-500">SEO Specialists</a>

                            <p class="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div class="mt-4">
                                <a href="" class="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span class="hidden group-hover:inline-block">Read More</span> <i class="uil uil-arrow-right align-middle text-lg"></i></a>
                            </div>
                        </div>
                    </div><!--end content-->

                    <div class="group relative">
                        <div class="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <img src="../../assets/images/consulting/3.jpg" class="" alt="">
                            <div class="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div class="mt-6">
                            <a href="" class="text-xl font-semibold hover:text-indigo-600 duration-500">Audience Analysis</a>

                            <p class="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div class="mt-4">
                                <a href="" class="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span class="hidden group-hover:inline-block">Read More</span> <i class="uil uil-arrow-right align-middle text-lg"></i></a>
                            </div>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
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
                      image: require('../../assets/images/consulting/1.jpg'),
                      name: 'Profitable Marketing',
                      desc: 'We develop digital strategies, products and services appreciated by clients.'
                    },
                    {
                      image: require('../../assets/images/consulting/2.jpg'),
                      name: 'SEO Specialists',
                      desc: 'We develop digital strategies, products and services appreciated by clients.'
                    },
                    {
                      image: require('../../assets/images/consulting/3.jpg'),
                      name: 'Audience Analysis',
                      desc: 'We develop digital strategies, products and services appreciated by clients.'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>