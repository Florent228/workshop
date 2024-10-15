<template>
    <!-- Start Section-->
    <section class="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="lg:col-span-5 md:col-span-6">
                    <div class="grid grid-cols-12 gap-6 items-center">
                        <div class="col-span-6">
                            <div class="grid grid-cols-1 gap-6">
                                <img src="../../assets/images/about/ab03.jpg" class="shadow rounded-md" alt="">
                                <img src="../../assets/images/about/ab02.jpg" class="shadow rounded-md" alt="">
                            </div>
                        </div>

                        <div class="col-span-6">
                            <div class="grid grid-cols-1 gap-6">
                                <img src="../../assets/images/about/ab01.jpg" class="shadow rounded-md" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-7 md:col-span-6">
                    <div class="lg:ms-5">
                        <div class="flex mb-4">
                            <span class="text-indigo-600 text-2xl font-bold mb-0 flex"><count-up class="counter-value text-6xl font-bold" :start-va="1" :end-val="15"></count-up><span class="text-indigo-600 text-2xl font-bold mt-6">+</span></span>
                            <span class="self-end font-semibold ms-2">Years <br> Experience</span>
                        </div>

                        <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Business
                            and technology <br> consulting for growth</h3>

                        <p class="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything
                            you need to generate awareness, drive traffic, connect. Dummy text is text that is used in
                            the publishing industry or by web designers to occupy the space which will later be filled
                            with 'real' content.</p>

                        <div class="mt-6">
                            <router-link to="/contact-one"
                                class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-2"><i
                                    class="uil uil-airplay"></i> Get Started</router-link>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="container relative mt-16">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                <div v-for="item in datas" :key="item"
                    class="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                    <i :data-feather="item.icon" class="size-10 stroke-1 text-indigo-600"></i>

                    <div class="content mt-6">
                        <router-link to="/page-services" class="title h5 text-xl font-semibold hover:text-indigo-600">{{ item.name }}</router-link>
                        <p class="text-slate-400 mt-4">{{item.desc}}</p>

                        <div class="mt-5">
                            <router-link to="/page-services"
                                class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn
                                More <i class="uil uil-arrow-right"></i></router-link>
                        </div>
                    </div>
                </div><!--end content-->
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

</template>

<script>
import CountUp from 'vue-countup-v3'
export default {
    data() {
        return {
            datas: [
                {
                    icon: 'codesandbox',
                    name: 'User Friendly',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'send',
                    name: 'Super Fast',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'star',
                    name: 'Insightful Analytics',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'bookmark',
                    name: 'Highly Rated',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
            ]
        }
    },
    components: {
        CountUp
    }
}
</script>

<style lang="scss" scoped></style>