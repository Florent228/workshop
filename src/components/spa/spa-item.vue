<template>
    <!-- Start -->
            <div class="container relative">
                <div class="grid md:grid-cols-3 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="relative overflow-hidden h-fit">
                        <img :src="item.image" class="" alt="">
                        <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-slate-900/50 from-slate-900 "></div>

                        <div class="absolute p-6 bottom-0 start-0 end-0">
                            <h6 class="text-white/70 mb-1">{{item.name}}</h6>
                            <a href="" class="font-semibold font-head-ebgaramond text-white uppercase tracking-wide">{{item.button}} <i class="uil uil-arrow-up-right ms-1"></i></a>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
            </div><!--end container-->

</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        image: require('../../assets/images/spa/1.jpg'),
                        name: 'Spa',
                        button: 'Relaxation'
                    },
                    {
                        image: require('../../assets/images/spa/2.jpg'),
                        name: 'Cosmatic',
                        button: 'Essential Balance'
                    },
                    {
                        image: require('../../assets/images/spa/3.jpg'),
                        name: 'Massage',
                        button: 'Natural Health'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>