<template>
    <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="lg:col-span-3 md:col-span-6">
                        <div class="team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative">
                            <div :class="item.bgcolor"></div>
                            <img :src="item.image" class="size-24 rounded-full shadow-md dark:shadow-gray-800" alt="">

                            <div class="content mt-4">
                                <a href="" class="text-lg font-medium hover:text-indigo-600 block">{{item.name}}</a>
                                <span class="text-slate-400 block">{{item.position}}</span>

                                <p class="text-slate-400 mt-4">{{ item.desc }}</p>

                                <ul class="list-none mt-4 space-x-1">
                                    <li class="inline"><a href="" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" class="size-4"></i></a></li>
                                    <li class="inline"><a href="" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" class="size-4"></i></a></li>
                                    <li class="inline"><a href="" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" class="size-4"></i></a></li>
                                    <li class="inline"><a href="" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" class="size-4"></i></a></li>
                                </ul><!--end icon-->
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end container-->

</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        image: require('../../assets/images/client/01.jpg'),
                        name: 'Ronny Jofra',
                        position: 'C.E.O.',
                        desc: "If the distribution of letters and 'words' is random",
                        bgcolor: 'absolute inset-0 bg-indigo-600/10 dark:bg-indigo-600/30 rounded-md -mt-[10px] -ms-[10px] size-[98%] -z-1'
                    },
                    {
                        image: require('../../assets/images/client/02.jpg'),
                        name: 'Aliana Rosy',
                        position: 'Co-founder',
                        desc: "If the distribution of letters and 'words' is random",
                        bgcolor: 'absolute inset-0 bg-emerald-600/10 dark:bg-emerald-600/30 rounded-md -mt-[10px] -ms-[10px] size-[98%] -z-1'
                    },
                    {
                        image: require('../../assets/images/client/03.jpg'),
                        name: 'Sofia Razaq',
                        position: 'C.O.O.',
                        desc: "If the distribution of letters and 'words' is random",
                        bgcolor: 'absolute inset-0 bg-red-600/10 dark:bg-red-600/30 rounded-md -mt-[10px] -ms-[10px] size-[98%] -z-1'
                    },
                    {
                        image: require('../../assets/images/client/04.jpg'),
                        name: 'Micheal Carlo',
                        position: 'Director',
                        desc: "If the distribution of letters and 'words' is random",
                        bgcolor: 'absolute inset-0 bg-sky-600/10 dark:bg-sky-600/30 rounded-md -mt-[10px] -ms-[10px] size-[98%] -z-1'
                    },
                    {
                        image: require('../../assets/images/client/05.jpg'),
                        name: 'Ronny Jofra',
                        position: 'C.E.O.',
                        desc: "If the distribution of letters and 'words' is random",
                        bgcolor: 'absolute inset-0 bg-indigo-600/10 dark:bg-indigo-600/30 rounded-md -mt-[10px] -ms-[10px] size-[98%] -z-1'
                    },
                    {
                        image: require('../../assets/images/client/06.jpg'),
                        name: 'Aliana Rosy',
                        position: 'HR',
                        desc: "If the distribution of letters and 'words' is random",
                        bgcolor: 'absolute inset-0 bg-emerald-600/10 dark:bg-emerald-600/30 rounded-md -mt-[10px] -ms-[10px] size-[98%] -z-1'
                    },
                    {
                        image: require('../../assets/images/client/07.jpg'),
                        name: 'Sofia Razaq',
                        position: 'C.O.O.',
                        desc: "If the distribution of letters and 'words' is random",
                        bgcolor: 'absolute inset-0 bg-red-600/10 dark:bg-red-600/30 rounded-md -mt-[10px] -ms-[10px] size-[98%] -z-1'
                    },
                    {
                        image: require('../../assets/images/client/08.jpg'),
                        name: 'Micheal Carlo',
                        position: 'Director',
                        desc: "If the distribution of letters and 'words' is random",
                        bgcolor: 'absolute inset-0 bg-sky-600/10 dark:bg-sky-600/30 rounded-md -mt-[10px] -ms-[10px] size-[98%] -z-1'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>