<template>
    <!-- Start -->
    <div class="container-fluid relative">
        <div class="grid grid-cols-1">
            <div class="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0">
                <div class="grid grid-cols-1 mt-8">
                    <div class="tiny-six-item">
                        <div v-for="item in datas" :key="item" class="tiny-slide">
                            <a href=""
                                class="group bg-white dark:bg-slate-900 block rounded-md overflow-hidden relative shadow dark:shadow-gray-800 m-2">
                                <span class="p-4 block bg-white dark:bg-slate-900 text-center">
                                    <img :src="item.image"
                                        class="rounded-full shadow-md mx-auto size-16 mb-3" alt="">

                                    <span
                                        class="text-xl font-medium duration-500" :class="item.class">{{ item.name }}</span>
                                    <span class="text-slate-400 block">{{ item.title }}</span>
                                </span>

                                <span class="p-4 block  text-center" :class="item.bgclass">
                                    <span class="text-white font-medium uppercase block">{{item.sale}}</span>
                                    <span class="flex justify-center mt-2">
                                        <span class="text-base text-white/70 font-semibold">{{ item.symbol }}</span>
                                        <span class="text-lg text-white font-semibold mx-1">{{ item.price }}</span>
                                        <span class="text-base text-white/70 font-semibold self-end">{{ item.time }}</span>
                                    </span>
                                </span>
                            </a>
                        </div>                        
                    </div>
                </div><!--end grid-->
            </div>
        </div><!--end grid-->
    </div><!--end container-->

</template>

<script>
import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
export default {
    data() {
        return {
            datas: [
                {
                    image: require('../../assets/images/hosting/com.jpg'),
                    name: '.com',
                    title: 'best price in the industry',
                    sale: 'Sale',
                    symbol: '$',
                    price: '3.99',
                    time: '/year',
                    class: 'group-hover:text-indigo-600',
                    bgclass: 'bg-indigo-600'
                },
                {
                    image: require('../../assets/images/hosting/biz.jpg'),
                    name: '.biz',
                    title: 'best price in the industry',
                    sale: 'Sale',
                    symbol: '$',
                    price: '3.99',
                    time: '/year',
                    class: 'group-hover:text-emerald-600',
                    bgclass: 'bg-emerald-600'
                },
                {
                    image: require('../../assets/images/hosting/me.jpg'),
                    name: '.me',
                    title: 'best price in the industry',
                    sale: 'Sale',
                    symbol: '$',
                    price: '3.99',
                    time: '/year',
                    class: 'group-hover:text-red-600',
                    bgclass: 'bg-red-600'
                },
                {
                    image: require('../../assets/images/hosting/mobi.jpg'),
                    name: '.mobi',
                    title: 'best price in the industry',
                    sale: 'Sale',
                    symbol: '$',
                    price: '3.99',
                    time: '/year',
                    class: 'group-hover:text-sky-600',
                    bgclass: 'bg-sky-600'
                },
                {
                    image: require('../../assets/images/hosting/net.jpg'),
                    name: '.net',
                    title: 'best price in the industry',
                    sale: 'Sale',
                    symbol: '$',
                    price: '3.99',
                    time: '/year',
                    class: 'group-hover:text-amber-500',
                    bgclass: 'bg-amber-500'
                },
                {
                    image: require('../../assets/images/hosting/org.jpg'),
                    name: '.org',
                    title: 'best price in the industry',
                    sale: 'Sale',
                    symbol: '$',
                    price: '3.99',
                    time: '/year',
                    class: 'group-hover:text-emerald-600',
                    bgclass: 'bg-emerald-600'
                },
                {
                    image: require('../../assets/images/hosting/tv.jpg'),
                    name: '.tv',
                    title: 'best price in the industry',
                    sale: 'Sale',
                    symbol: '$',
                    price: '3.99',
                    time: '/year',
                    class: 'group-hover:text-red-600',
                    bgclass: 'bg-red-600'
                },
                {
                    image: require('../../assets/images/hosting/us.jpg'),
                    name: '.us',
                    title: 'best price in the industry',
                    sale: 'Sale',
                    symbol: '$',
                    price: '3.99',
                    time: '/year',
                    class: 'group-hover:text-sky-600',
                    bgclass: 'bg-sky-600'
                },
            ]
        }
    },
    setup() {
        onMounted(() => {
            tns({
                container: '.tiny-six-item',
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
                    1025: {
                        items: 6
                    },

                    992: {
                        items: 4
                    },

                    767: {
                        items: 3
                    },

                    320: {
                        items: 1
                    },
                },
            });
        })
    },

}
</script>

<style lang="scss" scoped></style>