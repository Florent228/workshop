<template>
    <!-- Start Section-->
    <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Services For My Clients</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[24px]">
                    <div v-for="item in datas" :key="item" class="group relative overflow-hidden p-6 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center duration-500">
                        <img :src="item.image" class="size-16 mx-auto" alt="">

                        <div class="content mt-7">
                            <h2 class="title text-xl font-semibold">{{item.name}}</h2>
                            <p class="text-slate-400 mt-3">{{ item.desc }}</p>
                        </div>

                        <div class="opacity-0 group-hover:opacity-100 duration-500">
                            <div class="absolute inset-0">
                                <img :src="item.image2" alt="">
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                            </div>

                            <div class="absolute bottom-0 start-0 end-0 mb-6">
                                <a href="" class="text-white text-xl font-bold">{{ item.coaching }}</a>
                            </div>
                        </div>
                    </div>
                    <!--end feature content-->        
                </div>
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Section -->
         <!-- Start -->
         <section class="py-20 w-full table relative bg-[url('../../assets/images/team.jpg')] bg-top bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-slate-900/70"></div>
            <div class="container relative">
                <div class="relative grid md:grid-cols-4 grid-cols-1 items-center gap-[30px]">
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-medium mb-2 text-white flex justify-center"><count-up class="counter-value" :start-val="1010" :end-val="1548"></count-up>+</h1>
                        <h5 class="counter-head text-white/70 font-semibold">Happy Clients</h5>
                    </div><!--end counter box-->
                    
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-medium mb-2 text-white flex justify-center"><count-up class="counter-value" :start-val="0" :end-val="100"></count-up>%</h1>
                        <h5 class="counter-head text-white/70 font-semibold">24/7 Support</h5>
                    </div><!--end counter box-->
                    
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-medium mb-2 text-white flex justify-center"><count-up class="counter-value" :start-val="0" :end-val="9"></count-up>+</h1>
                        <h5 class="counter-head text-white/70 font-semibold">Courses</h5>
                    </div><!--end counter box-->
                    
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-medium mb-2 text-white flex justify-center"><count-up class="counter-value" :start-val="0" :end-val="100"></count-up>%</h1>
                        <h5 class="counter-head text-white/70 font-semibold">Satisfaction</h5>
                    </div><!--end counter box-->
                </div>
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
import CountUp from 'vue-countup-v3'
    export default {
        data() {
            return {
                datas:[
                    {
                        image: require('../../assets/images/coach/conversation.png'),
                        name: 'One to One Coaching',
                        coaching: 'One to One Coaching',
                        desc: 'After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination.',
                        image2: require('../../assets/images/coach/one-one.jpg')
                    },
                    {
                        image: require('../../assets/images/coach/programmer.png'),
                        name: 'Executive Coaching',
                        coaching: 'Executive Coaching',
                        desc: 'After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination.',
                        image2: require('../../assets/images/coach/executive.jpg')
                    },
                    {
                        image: require('../../assets/images/coach/group.png'),
                        name: 'Group Coaching',
                        coaching: 'Group Coaching',
                        desc: 'After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination.',
                        image2: require('../../assets/images/coach/group.jpg')
                    },
                ]
            }
        },
        components:{
            CountUp
        }
    }
</script>

<style lang="scss" scoped>

</style>