<template>
     <div class="container relative md:mt-24 mt-16 pt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h4 class="font-cursive-alex text-3xl">Spa & Massage</h4>
                    <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Our Services</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-2 mt-8 gap-[30px]">
                    <div v-for="service in services" :key="service" class="flex ">
                        <img :src="service.image" class="size-16" alt="">

                        <div class="ms-2 w-full">
                            <div class="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
                                <a href="" class="font-head-ebgaramond hover:text-indigo-600 text-xl font-semibold">{{service.name}}</a>
                                <h6 class="text-indigo-600">{{service.price}}</h6>
                            </div>

                            <p class="text-slate-400 mt-2">{{ service.title }}</p>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                services:[
                    {
                        image: require('../../assets/images/spa/icons/facial-mask.png'),
                        name: 'Facial Mask',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                    {
                        image: require('../../assets/images/spa/icons/foot-massage.png'),
                        name: 'Foot Massage',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                    {
                        image: require('../../assets/images/spa/icons/massage.png'),
                        name: 'Massage',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                    {
                        image: require('../../assets/images/spa/icons/natural-product.png'),
                        name: 'Natural Product',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                    {
                        image: require('../../assets/images/spa/icons/relax.png'),
                        name: 'Relax',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                    {
                        image: require('../../assets/images/spa/icons/sauna.png'),
                        name: 'Sauna',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                    {
                        image: require('../../assets/images/spa/icons/spa-and-relaxation.png'),
                        name: 'Spa & Relaxation',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                    {
                        image: require('../../assets/images/spa/icons/spa-candles.png'),
                        name: 'Spa Candles',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                    {
                        image: require('../../assets/images/spa/icons/spa.png'),
                        name: 'Spa',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                    {
                        image: require('../../assets/images/spa/icons/treatment.png'),
                        name: 'Treatments',
                        price: '$140',
                        title: 'Your athletic spa experience and recovery.',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>