<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <!-- Start Collection -->
                    <div v-for="collection in collections" :key="collection"
                class="group relative overflow-hidden bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800">
                <div
                    class="p-2 rounded-md shadow dark:shadow-gray-800 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
                    <div class="flex items-center">
                        <div class="w-full p-1">
                            <img :src="collection.image" class="rounded-md" alt="">
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="w-1/3 p-1">
                            <img :src="collection.image2" class="rounded-md" alt="">
                        </div>

                        <div class="w-1/3 p-1">
                            <img :src="collection.image3" class="rounded-md" alt="">
                        </div>

                        <div class="w-1/3 p-1">
                            <img :src="collection.image4" class="rounded-md" alt="">
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 -mt-10 text-center">
                    <img :src="collection.image5"
                        class="size-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="">

                    <div class="mt-4">
                        <a href=""
                            class="text-xl leading-none font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{{ collection.name }}</a>
                    </div>
                </div>
            </div>
                    <!-- End Collection -->
                </div>
            </div>
        </section><!--end section-->
        <!-- End -->
        <footers :email=true />
        <switcher />
</template>

<script>
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue'
    export default {
        data() {
            return {
                collections: [
                {
                   image: require('../../assets/images/nft/items/16.jpg'),
                   image2: require('../../assets/images/nft/items/1.jpg'),
                   image3: require('../../assets/images/nft/items/2.jpg'),
                   image4: require('../../assets/images/nft/items/3.jpg'),
                   image5: require('../../assets/images/client/01.jpg'),
                   name: 'Digital Arts'
                },
                {
                   image: require('../../assets/images/nft/items/17.jpg'),
                   image2: require('../../assets/images/nft/items/4.jpg'),
                   image3: require('../../assets/images/nft/items/5.jpg'),
                   image4: require('../../assets/images/nft/items/6.jpg'),
                   image5: require('../../assets/images/client/02.jpg'),
                   name: 'Sports'
                },
                {
                   image: require('../../assets/images/nft/items/18.jpg'),
                   image2: require('../../assets/images/nft/items/7.jpg'),
                   image3: require('../../assets/images/nft/items/8.jpg'),
                   image4: require('../../assets/images/nft/items/9.jpg'),
                   image5: require('../../assets/images/client/03.jpg'),
                   name: 'Photography'
                },
                {
                   image: require('../../assets/images/nft/items/19.jpg'),
                   image2: require('../../assets/images/nft/items/10.jpg'),
                   image3: require('../../assets/images/nft/items/11.jpg'),
                   image4: require('../../assets/images/nft/items/12.jpg'),
                   image5: require('../../assets/images/client/04.jpg'),
                   name: 'Illustrations'
                },
                {
                   image: require('../../assets/images/nft/items/20.jpg'),
                   image2: require('../../assets/images/nft/items/13.jpg'),
                   image3: require('../../assets/images/nft/items/14.jpg'),
                   image4: require('../../assets/images/nft/items/15.jpg'),
                   image5: require('../../assets/images/client/05.jpg'),
                   name: 'Animations'
                },
                {
                   image: require('../../assets/images/nft/items/21.jpg'),
                   image2: require('../../assets/images/nft/items/5.jpg'),
                   image3: require('../../assets/images/nft/items/8.jpg'),
                   image4: require('../../assets/images/nft/items/11.jpg'),
                   image5: require('../../assets/images/client/06.jpg'),
                   name: 'Virtual Reality'
                },
                {
                   image: require('../../assets/images/nft/items/22.jpg'),
                   image2: require('../../assets/images/nft/items/2.jpg'),
                   image3: require('../../assets/images/nft/items/3.jpg'),
                   image4: require('../../assets/images/nft/items/4.jpg'),
                   image5: require('../../assets/images/client/07.jpg'),
                   name: 'Sports'
                },
                {
                   image: require('../../assets/images/nft/items/23.jpg'),
                   image2: require('../../assets/images/nft/items/6.jpg'),
                   image3: require('../../assets/images/nft/items/7.jpg'),
                   image4: require('../../assets/images/nft/items/9.jpg'),
                   image5: require('../../assets/images/client/08.jpg'),
                   name: 'Digital Arts'
                },
                {
                   image: require('../../assets/images/nft/items/24.jpg'),
                   image2: require('../../assets/images/nft/items/11.jpg'),
                   image3: require('../../assets/images/nft/items/12.jpg'),
                   image4: require('../../assets/images/nft/items/13.jpg'),
                   image5: require('../../assets/images/client/01.jpg'),
                   name: 'Photography'
                },
               
            ]
            }
        },
        components:{
            footers,
            switcher
        }
    }
</script>

<style lang="scss" scoped>

</style>