<template>
    <!-- Start Section-->
    <section class="relative md:py-24 py-16 overflow-hidden">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Popular Courses</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <!-- Start Course -->
                    <div v-for="item in datas" :key="item" class="group relative rounded-md shadow hover:shadow-lg dark:shadow-gray-800 duration-500 ease-in-out overflow-hidden">
                        <div class="relative overflow-hidden">
                            <img :src="item.image" class="group-hover:scale-110 duration-500 ease-in-out" alt="">
                            <div class="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                            <div class="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <div class="pb-4 ps-4 flex items-center">
                                    <img :src="item.image2" class="size-12 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="">
                                    <div class="ms-3">
                                        <a href="" class="font-semibold text-white block">{{item.name}}</a>
                                        <span class="text-white/70 text-sm">{{item.position}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content p-6 relative">
                            <router-link to="/course-detail" class="font-medium block text-indigo-600">{{item.course}}</router-link>
                            <router-link to="/course-detail" class="text-lg font-medium block hover:text-indigo-600 duration-500 ease-in-out mt-2">{{ item.name2 }}</router-link>
                            <p class="text-slate-400 mt-3 mb-4">{{item.desc}}</p>
                            
                            <ul class="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center list-none text-slate-400">
                                <li class="flex items-center me-4">
                                    <i class="uil uil-book-open text-lg leading-none me-2 text-slate-900 dark:text-white"></i>
                                    <span>{{item.lecture}}</span>
                                </li>

                                <li class="flex items-center me-4">
                                    <i class="uil uil-clock text-lg leading-none me-2 text-slate-900 dark:text-white"></i>
                                    <span>{{item.time}}</span>
                                </li>

                                <li class="flex items-center">
                                    <i class="uil uil-eye text-lg leading-none me-2 text-slate-900 dark:text-white"></i>
                                    <span>{{item.view}}</span>
                                </li>
                            </ul>

                            <div class="absolute -top-7 end-6 z-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <div class="flex justify-center items-center size-14 bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800 text-indigo-600 dark:text-white">
                                    <span class="font-semibold">{{ item.price }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Course -->
                </div><!--end grid-->

                <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div class="md:col-span-12 text-center">
                        <router-link to="/course-listing" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See All Courses <i class="uil uil-arrow-right align-middle"></i></router-link>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Section -->

</template>

<script>
    export default {
        data() {
            return {
                datas: [
                    {
                        image: require('../../assets/images/course/c1.jpg'),
                        image2: require('../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo',
                        position: 'Professor',
                        course: 'Digital Marketing',
                        name2: 'Starting SEO as your Home Based Business',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        lecture: '25 Lectures',
                        time: '1h 30m',
                        view: '3012',
                        price: '$11'
                    },
                    {
                        image: require('../../assets/images/course/c2.jpg'),
                        image2: require('../../assets/images/client/02.jpg'),
                        name: 'Christa Smith',
                        position: 'Professor',
                        course: 'Engineering',
                        name2: 'Java Programming Masterclass for Software',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        lecture: '25 Lectures',
                        time: '1h 30m',
                        view: '3012',
                        price: '$11'
                    },
                    {
                        image: require('../../assets/images/course/c3.jpg'),
                        image2: require('../../assets/images/client/03.jpg'),
                        name: 'Jani Jangad',
                        position: 'Professor',
                        course: 'Engineering',
                        name2: 'Microsoft Excel - Excel from Beginner to Advanced',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        lecture: '25 Lectures',
                        time: '1h 30m',
                        view: '3012',
                        price: '$11'
                    },
                    {
                        image: require('../../assets/images/course/c4.jpg'),
                        image2: require('../../assets/images/client/04.jpg'),
                        name: 'John Cartwright',
                        position: 'Professor',
                        course: 'Web Development',
                        name2: 'Vue - The Complete Guide (w/ Router, Composition API)',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        lecture: '25 Lectures',
                        time: '1h 30m',
                        view: '3012',
                        price: '$11'
                    },
                    {
                        image: require('../../assets/images/course/c5.jpg'),
                        image2: require('../../assets/images/client/05.jpg'),
                        name: 'Sally Short',
                        position: 'Professor',
                        course: 'Front-end Design',
                        name2: 'HTML, CSS, Javascripts, and Basic Knowledge about web design',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        lecture: '25 Lectures',
                        time: '1h 30m',
                        view: '3012',
                        price: '$11'
                    },
                    {
                        image: require('../../assets/images/course/c6.jpg'),
                        image2: require('../../assets/images/client/06.jpg'),
                        name: 'William Benson',
                        position: 'Professor',
                        course: 'Back-end Development',
                        name2: 'C Programming For Beginners - Master the C Language',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        lecture: '25 Lectures',
                        time: '1h 30m',
                        view: '3012',
                        price: '$11'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>