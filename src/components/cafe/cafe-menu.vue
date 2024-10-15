<template>
   <!-- Start -->
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Explore Our Menu</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-2 mt-8 gap-[30px]">
                    <div v-for="menu in menus" :key="menu" class="flex ">
                        <img :src="menu.image" class="size-16 rounded-full shadow-md dark:shadow-gray-800" alt="">

                        <div class="ms-3 w-full">
                            <div class="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
                                <a href="" class="font-head-ebgaramond hover:text-indigo-600 text-xl font-semibold">{{menu.name}}</a>
                                <h6 class="text-indigo-600 font-semibold">{{menu.price}}</h6>
                            </div>

                            <p class="text-slate-400 mt-2">{{menu.title}}</p>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        image: require('../../assets/images/cafe/coffee-cup/01.jpg'),
                        name: 'Cafe Latte',
                        price: '$13.79',
                        title: 'A reader will be distracted by the readable'
                    },
                    {
                        image: require('../../assets/images/cafe/coffee-cup/02.jpg'),
                        name: 'Ice Coffee',
                        price: '$12.49',
                        title: 'A reader will be distracted by the readable'
                    },
                    {
                        image: require('../../assets/images/cafe/coffee-cup/03.jpg'),
                        name: 'Mocha',
                        price: '$10.99',
                        title: 'A reader will be distracted by the readable'
                    },
                    {
                        image: require('../../assets/images/cafe/coffee-cup/04.jpg'),
                        name: 'Espresso',
                        price: '$19.99',
                        title: 'A reader will be distracted by the readable'
                    },
                    {
                        image: require('../../assets/images/cafe/coffee-cup/05.jpg'),
                        name: 'Americano',
                        price: '$17.79',
                        title: 'A reader will be distracted by the readable'
                    },
                    {
                        image: require('../../assets/images/cafe/coffee-cup/06.jpg'),
                        name: 'Boerewors',
                        price: '$57.79',
                        title: 'A reader will be distracted by the readable'
                    },
                    {
                        image: require('../../assets/images/cafe/coffee-cup/01.jpg'),
                        name: 'Cafe Latte',
                        price: '$13.79',
                        title: 'A reader will be distracted by the readable'
                    },
                    {
                        image: require('../../assets/images/cafe/coffee-cup/02.jpg'),
                        name: 'Ice Coffee',
                        price: '$12.49',
                        title: 'A reader will be distracted by the readable'
                    },
                    {
                        image: require('../../assets/images/cafe/coffee-cup/03.jpg'),
                        name: 'Mocha',
                        price: '$10.99',
                        title: 'A reader will be distracted by the readable'
                    },
                    {
                        image: require('../../assets/images/cafe/coffee-cup/04.jpg'),
                        name: 'Espresso',
                        price: '$19.99',
                        title: 'A reader will be distracted by the readable'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>