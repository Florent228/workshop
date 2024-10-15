<template>
    <!-- Start Section-->
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                <div class="lg:col-span-8 md:col-span-12">
                    <div class="grid grid-cols-1 pb-8">
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Instant
                            Smart Solutions <br> With Techwind</h3>

                        <p class="text-slate-400 max-w-xl">Launch your campaign and benefit from our expertise on
                            designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                    </div><!--end grid-->

                    <div class="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        <div v-for="service in services" :key="service"
                            class="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-2xl bg-white dark:bg-slate-900">
                            <i :data-feather="service.icon" class="size-12 stroke-1 text-indigo-600"></i>

                            <div class="content mt-7">
                                <router-link to="/page-services"
                                    class="title h5 text-lg font-medium hover:text-indigo-600">{{ service.title }}</router-link>
                                <p class="text-slate-400 mt-3">{{ service.desc }}</p>

                                <div class="mt-5">
                                    <router-link to="/page-services"
                                        class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read
                                        More <i class="uil uil-arrow-right"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 md:col-span-12">
                    <div class="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div v-for="service in services2" :key="service"
                            class="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-2xl bg-white dark:bg-slate-900">
                            <i :data-feather="service.icon" class="size-12 stroke-1 text-indigo-600"></i>

                            <div class="content mt-7">
                                <router-link to="/page-services"
                                    class="title h5 text-lg font-medium hover:text-indigo-600">{{service.title}}</router-link>
                                <p class="text-slate-400 mt-3">{{ service.desc }}</p>

                                <div class="mt-5">
                                    <router-link to="/page-services"
                                        class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read
                                        More <i class="uil uil-arrow-right"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-2/4 after:start-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]">
                </div>
                <div
                    class="overflow-hidden after:content-[''] after:absolute after:size-[512px] after:bg-indigo-600/5 after:top-1/4 after:end-0 after:-z-1 after:rounded-full">
                </div>
            </div><!--grid-->
        </div><!--end container-->
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    icon: 'codesandbox',
                    title: 'User Friendly',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'send',
                    title: 'Super Fast',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'star',
                    title: 'Insightful Analytics',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'bookmark',
                    title: 'Highly Rated',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
            ],
            services2: [
                {
                    icon: 'users',
                    title: 'User Forum Forum',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'message-circle',
                    title: '24/7 Support',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>