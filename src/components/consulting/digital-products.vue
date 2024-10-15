<template>
    <!-- Start -->
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Digital Product</h3>
                        <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <a href="" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]" id="grid">
                    <div v-for="item in datas" :key="item" class="picture-item rounded-md">
                        <div class="">
                            <div class="relative">
                                <div class="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                    <img :src="item.image" class="rounded-t-md shadow" alt="">
                                </div>
                            </div>

                            <div class="pt-4 px-3">
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind-vue" target="_blank" class="hover:text-indigo-600 duration-500">{{ item.name }}</a></h5>
                                <span class="text-slate-400">{{item.title}}</span>
                            </div>                            
                        </div>
                    </div><!--end col-->
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div class="md:col-span-12 text-center">
                        <a href="" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        image: require('../../assets/images/portfolio/pro1.jpg'),
                        name: 'Techwind Personal Portfolio',
                        title: 'Creative'
                    },
                    {
                        image: require('../../assets/images/portfolio/pro2.jpg'),
                        name: 'Techwind Minimal Portfolio',
                        title: 'Minimal'
                    },
                    {
                        image: require('../../assets/images/portfolio/pro3.jpg'),
                        name: 'Techwind NFT Market',
                        title: 'Crypto'
                    },
                    {
                        image: require('../../assets/images/portfolio/pro4.jpg'),
                        name: 'Techwind Portfolio',
                        title: 'Portfolio'
                    },
                    {
                        image: require('../../assets/images/portfolio/pro5.jpg'),
                        name: 'Techwind Constuction',
                        title: 'Corporate'
                    },
                    {
                        image: require('../../assets/images/portfolio/pro6.jpg'),
                        name: 'Techwind SEO',
                        title: 'SEO'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>