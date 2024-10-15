<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center">
            <div class="md:col-span-6">
                <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Suivez</h6>
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                    Les professionnels du domaine
            </h3>
            </div>

            <div class="md:col-span-6">
                <p class="text-slate-400 max-w-xl">Nos vidéos pour mieux comprendre les dangers des réseaux sociaux. Ressources adaptées pour jeunes, parents, et éducateurs.</p>
            </div>
        </div><!--end grid-->

        <div class="grid grid-cols-1 relative mt-8">
            <div class="tiny-three-item-icon">
                <div v-for="item in datas" :key="item" class="tiny-slide">
                    <div class="group relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-3">
                        <div class="relative">
                            <img :src="item.image" alt="">

                            <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                                class="lightbox size-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-indigo-600 absolute top-3 end-3 cursor-pointer"><i
                                    class="mdi mdi-play"></i></a>

                            <div
                                class="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <div class="pb-4 ps-4 flex items-center">
                                    <img :src="item.image2"
                                        class="size-10 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="">
                                    <div class="ms-3">
                                        <a href="" class="font-semibold text-white block">{{item.name}}</a>
                                        <span class="text-white/70 text-sm">{{item.subscribe}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content p-6">
                            
                            <router-link to="/blog-youtube-post"
                                class="title h5 text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{{ item.song }}</router-link>
                            <p class="text-slate-400 mt-3">{{item.title}}</p>

                            <div class="mt-4">
                                <router-link to="/blog-youtube-post"
                                    class="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Watch
                                    Now <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
    <!-- iframe start  -->
    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500"
                frameborder="0"></iframe>
        </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                @click="toggle">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <!-- iframe end  -->
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';
export default {
    data() {
        return {
            isActive: false,
            datas: [
                {
                    image: require('../../assets/images/podcast/p1.jpg'),
                    image2: require('../../assets/images/client/01.jpg'),
                    name: 'Calvin Carlo',
                    subscribe: '4k Subscribe',
                    song: 'Design your apps in your own way',
                    title: 'The phrasal sequence of the is now so that many campaign and benefit',
                },
                {
                    image: require('../../assets/images/podcast/p2.jpg'),
                    image2: require('../../assets/images/client/01.jpg'),
                    name: 'Calvin Carlo',
                    subscribe: '4k Subscribe',
                    song: 'How apps is changing the IT world',
                    title: 'The phrasal sequence of the is now so that many campaign and benefit',
                },
                {
                    image: require('../../assets/images/podcast/p3.jpg'),
                    image2: require('../../assets/images/client/01.jpg'),
                    name: 'Calvin Carlo',
                    subscribe: '4k Subscribe',
                    song: 'Smartest Applications for Business',
                    title: 'The phrasal sequence of the is now so that many campaign and benefit',
                },
                {
                    image: require('../../assets/images/podcast/p4.jpg'),
                    image2: require('../../assets/images/client/01.jpg'),
                    name: 'Calvin Carlo',
                    subscribe: '4k Subscribe',
                    song: 'Design your apps in your own way',
                    title: 'The phrasal sequence of the is now so that many campaign and benefit',
                },
                {
                    image: require('../../assets/images/podcast/p5.jpg'),
                    image2: require('../../assets/images/client/01.jpg'),
                    name: 'Calvin Carlo',
                    subscribe: '4k Subscribe',
                    song: 'How apps is changing the IT world',
                    title: 'The phrasal sequence of the is now so that many campaign and benefit',
                },
                {
                    image: require('../../assets/images/podcast/p6.jpg'),
                    image2: require('../../assets/images/client/01.jpg'),
                    name: 'Calvin Carlo',
                    subscribe: '4k Subscribe',
                    song: 'Smartest Applications for Business',
                    title: 'The phrasal sequence of the is now so that many campaign and benefit',
                },
            ]
        }
    },
    mounted() {
        tns({
            container: '.tiny-three-item-icon',
            controls: true,
            mouseDrag: true,
            loop: true,
            rewind: true,
            autoplay: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 3000,
            navPosition: "bottom",
            controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: false,
            speed: 400,
            gutter: 0,
            responsive: {
                992: {
                    items: 3
                },

                767: {
                    items: 2
                },

                320: {
                    items: 1
                },
            },
        });
    },
    methods: {
        toggle(){
            this.isActive = !this.isActive
        }
    },
}
</script>

<style lang="scss" scoped></style>