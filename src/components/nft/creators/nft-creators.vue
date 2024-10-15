<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30]">
                    <!-- Start Creator -->
                    <div v-for="seller in sellers" :key="seller" class="tiny-slide">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out m-2 mb-5">
                                <div class="py-10 bg-gradient-to-r" :class="seller.bgclass"></div>
                                <div class="p-6 pt-0 -mt-10 text-center">
                                    <img :src="seller.image" class="size-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="">
        
                                    <div class="mt-4">
                                        <router-link to="/nft-creator-profile" class="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{{ seller.name }}</router-link>
                                        <span class="text-slate-400">{{ seller.sellerid }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- End Creator -->
                </div>
            </div>
        </section><!--end section-->
        <!-- End -->
</template>

<script>
    export default {
        data() {
            return {
                sellers:[
                    {
                        bgclass:'to-orange-600/70 from-indigo-600/70',
                        image: require('../../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo',
                        sellerid: '@calvin_carlo'
                    },
                    {
                        bgclass:'to-red-600/70 from-indigo-600/70',
                        image: require('../../../assets/images/client/02.jpg'),
                        name: 'Tiffany Betancourt',
                        sellerid: '@cutiegirl'
                    },
                    {
                        bgclass:'to-fuchsia-600/70 from-green-600/70',
                        image: require('../../../assets/images/client/03.jpg'),
                        name: 'Mari Harrington',
                        sellerid: '@norse_queen'
                    },
                    {
                        bgclass:'to-pink-600/70 from-purple-600/70',
                        image: require('../../../assets/images/client/04.jpg'),
                        name: 'Floyd Glasgow',
                        sellerid: '@bigbull'
                    },
                    {
                        bgclass:'to-indigo-600/70 from-blue-600/70',
                        image: require('../../../assets/images/client/05.jpg'),
                        name: 'Donna Schultz',
                        sellerid: '@angel'
                    },
                    {
                        bgclass:'to-orange-600/70 from-indigo-600/70',
                        image: require('../../../assets/images/client/06.jpg'),
                        name: 'Joshua Morris',
                        sellerid: '@crazyanyone'
                    },
                    {
                        bgclass:'to-sky-600/70 from-yellow-600/70',
                        image: require('../../../assets/images/client/07.jpg'),
                        name: 'Carl Williams',
                        sellerid: '@looserbad'
                    },
                    {
                        bgclass:'to-lime-600/70 from-rose-600/70',
                        image: require('../../../assets/images/client/08.jpg'),
                        name: 'Eugene Green',
                        sellerid: '@kristyhoney'
                    },
                    {
                        bgclass:'to-orange-600/70 from-indigo-600/70',
                        image: require('../../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo',
                        sellerid: '@calvin_carlo'
                    },
                    {
                        bgclass:'to-red-600/70 from-indigo-600/70',
                        image: require('../../../assets/images/client/02.jpg'),
                        name: 'Tiffany Betancourt',
                        sellerid: '@cutiegirl'
                    },
                    {
                        bgclass:'to-fuchsia-600/70 from-green-600/70',
                        image: require('../../../assets/images/client/03.jpg'),
                        name: 'Mari Harrington',
                        sellerid: '@norse_queen'
                    },
                    {
                        bgclass:'to-pink-600/70 from-purple-600/70',
                        image: require('../../../assets/images/client/04.jpg'),
                        name: 'Floyd Glasgow',
                        sellerid: '@bigbull'
                    },
                    {
                        bgclass:'to-indigo-600/70 from-blue-600/70',
                        image: require('../../../assets/images/client/05.jpg'),
                        name: 'Donna Schultz',
                        sellerid: '@angel'
                    },
                    {
                        bgclass:'to-orange-600/70 from-indigo-600/70',
                        image: require('../../../assets/images/client/06.jpg'),
                        name: 'Joshua Morris',
                        sellerid: '@crazyanyone'
                    },
                    {
                        bgclass:'to-sky-600/70 from-yellow-600/70',
                        image: require('../../../assets/images/client/07.jpg'),
                        name: 'Carl Williams',
                        sellerid: '@looserbad'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>