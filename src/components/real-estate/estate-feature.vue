<template>
     <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item.id" @click="viewBlogDetail.id" class="group rounded-md bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-800 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        <div class="relative">
                            <img :src="item.image" alt="">

                            <div class="absolute top-6 end-6">
                                <a href="" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-lg text-center bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600"><i class="mdi mdi-heart"></i></a>
                            </div>
                        </div>

                        <div class="p-6">
                            <div class="pb-6">
                                <router-link :to="{ name: 'property-detail', params: { id: item.id } }" class="text-lg hover:text-indigo-600 font-medium ease-in-out duration-500">{{ item.name }}</router-link>
                            </div>

                            <ul class="py-6 border-y border-gray-100 dark:border-gray-800 flex items-center list-none">
                                <li class="flex items-center me-4">
                                    <i class="uil uil-compress-arrows text-2xl me-2 text-indigo-600"></i>
                                    <span>{{item.sqf}}</span>
                                </li>

                                <li class="flex items-center me-4">
                                    <i class="uil uil-bed-double text-2xl me-2 text-indigo-600"></i>
                                    <span>{{item.beds}}</span>
                                </li>

                                <li class="flex items-center">
                                    <i class="uil uil-bath text-2xl me-2 text-indigo-600"></i>
                                    <span>{{item.baths}}</span>
                                </li>
                            </ul>

                            <ul class="pt-6 flex justify-between items-center list-none">
                                <li>
                                    <span class="text-slate-400">Price</span>
                                    <p class="text-lg font-medium">{{item.price}}</p>
                                </li>

                                <li>
                                    <span class="text-slate-400">Rating</span>
                                    <ul class="text-lg font-medium text-amber-400 list-none">
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline text-black dark:text-white">{{ item.rating }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div><!--end property content-->
                </div><!--en grid-->

                <div class="md:flex justify-center text-center mt-6">
                    <div class="md:w-full">
                        <router-link to="/property-listing" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">View More Properties <i class="uil uil-arrow-right ms-1"></i></router-link>
                    </div>
                </div>
            </div><!--end container-->
</template>

<script>

    export default {
        data() {
            return {
                datas:[
                    {
                        id: 1,
                        image: require('../../assets/images/real/property/1.jpg'),
                        name: '10765 Hillshire Ave, Baton Rouge, LA 70810, USA',
                        sqf: '8000sqf',
                        beds: '4 Beds',
                        baths: '4 Baths',
                        price: '$5000',
                        rating: '5.0(30)'
                    },
                    {
                        id: 2,
                        image: require('../../assets/images/real/property/2.jpg'),
                        name: '59345 STONEWALL DR, Plaquemine, LA 70764, USA',
                        sqf: '8000sqf',
                        beds: '4 Beds',
                        baths: '4 Baths',
                        price: '$5000',
                        rating: '5.0(30)'
                    },
                    {
                        id: 3,
                        image: require('../../assets/images/real/property/3.jpg'),
                        name: '3723 SANDBAR DR, Addis, LA 70710, USA',
                        sqf: '8000sqf',
                        beds: '4 Beds',
                        baths: '4 Baths',
                        price: '$5000',
                        rating: '5.0(30)'
                    },
                    {
                        id: 4,
                        image: require('../../assets/images/real/property/4.jpg'),
                        name: 'Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA',
                        sqf: '8000sqf',
                        beds: '4 Beds',
                        baths: '4 Baths',
                        price: '$5000',
                        rating: '5.0(30)'
                    },
                    {
                        id: 5,
                        image: require('../../assets/images/real/property/5.jpg'),
                        name: '710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA',
                        sqf: '8000sqf',
                        beds: '4 Beds',
                        baths: '4 Baths',
                        price: '$5000',
                        rating: '5.0(30)'
                    },
                    {
                        id: 6,
                        image: require('../../assets/images/real/property/6.jpg'),
                        name: '5133 MCLAIN WAY, Baton Rouge, LA 70809, USA',
                        sqf: '8000sqf',
                        beds: '4 Beds',
                        baths: '4 Baths',
                        price: '$5000',
                        rating: '5.0(30)'
                    },
                ]
            }
        },
        methods: {
        viewBlogDetail(id) {
            this.$router.push({ name: 'property-detail', params: { id } });
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>