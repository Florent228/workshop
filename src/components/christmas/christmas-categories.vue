<template>
   <div class="container relative">
                <div class="grid grid-cols-1 items-center">
                    <h3 class="text-2xl leading-normal font-semibold">Top Categories</h3>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
                        <img :src="item.image" class="rounded-full shadow-md dark:shadow-gray-800 size-20 block mx-auto mb-2" alt="">

                        <a href="" class="font-semibold hover:text-indigo-600 text-lg">{{item.name}}</a>
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
                        image: require('../../assets/images/shop/categories/electronics.jpg'),
                        name: 'Electronics'
                    },
                    {
                        image: require('../../assets/images/shop/categories/fashion.jpg'),
                        name: 'Fashion'
                    },
                    {
                        image: require('../../assets/images/shop/categories/furniture.jpg'),
                        name: 'Furniture'
                    },
                    {
                        image: require('../../assets/images/shop/categories/mobile.jpg'),
                        name: 'Mobile'
                    },
                    {
                        image: require('../../assets/images/shop/categories/music.jpg'),
                        name: 'Music'
                    },

                    {
                        image: require('../../assets/images/shop/categories/sports.jpg'),
                        name: 'Sports'
                    },
                ]
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>