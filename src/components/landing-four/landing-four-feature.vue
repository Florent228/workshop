<template>
    <!-- Start Section-->
    
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Features</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business strategies and top <br> permormance ideas</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group text-center">
                        <div class="size-20 bg-indigo-600/5 text-indigo-600 rounded-lg ltr:rotate-[15deg] rtl:-rotate-[15deg] flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i :data-feather="item.icon" class="size-7 ltr:-rotate-[15deg] rtl:rotate-[15deg]"></i>
                        </div>

                        <div class="mt-8">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.name}}</router-link>

                            <p class="text-slate-400 mt-4">{{item.title}}</p>

                            <div class="mt-4">
                                <a href="" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right align-middle"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- Feature End -->
                </div>
            </div><!--end container-->

</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        icon: 'pie-chart',
                        name: 'Profitable Marketing',
                        title: 'We develop digital strategies, products and services appreciated by clients.'
                    },
                    {
                        icon: 'briefcase',
                        name: 'SEO Specialists',
                        title: 'We develop digital strategies, products and services appreciated by clients.'
                    },
                    {
                        icon: 'target',
                        name: 'Audience Analysis',
                        title: 'We develop digital strategies, products and services appreciated by clients.'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>