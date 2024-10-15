<template>
    <div class="container relative mt-16">
        <div v-if="showing" class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-9 md:col-span-8">
                        <h3 class="text-xl leading-normal font-semibold">Showing 1-8 of 16 results</h3>
                    </div>

                    <div class="lg:col-span-3 md:col-span-4 md:text-end">
                        <label class="font-semibold hidden"></label>
                        <select class="form-select form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                            <option selected>Sort by latest</option>
                            <option>Sort by popularity</option>
                            <option>Sort by rating</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                        </select>
                    </div>
                </div><!--end grid-->

        <div v-else class="grid md:grid-cols-12 grid-cols-1 items-center">
            <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                <h3 class="text-2xl leading-normal font-semibold">Most Viewed Products</h3>
            </div>
            <div  class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                <router-link to="/shop-grid-two"
                    class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">View
                    More Items <i class="uil uil-arrow-right align-middle"></i></router-link>
            </div>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="item in datas" :key="item.id" @click="viewBlogDetail.id" class="group">
                <div
                    class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                    <img :src="item.image" alt="">

                    <div class="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                        <router-link to="/shop-cart"
                            class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add
                            to Cart</router-link>
                    </div>

                    <ul class="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                        <li><a href="javascript:void(0)"
                                class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i
                                    class="mdi mdi-heart"></i></a></li>
                        <li class="mt-1"><router-link to="/shop-item-detail"
                                class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i
                                    class="mdi mdi-eye-outline"></i></router-link></li>
                        <li class="mt-1"><a href="javascript:void(0)"
                                class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i
                                    class="mdi mdi-bookmark-outline"></i></a></li>
                    </ul>

                    <ul class="list-none absolute top-[10px] start-4">
                        <li v-if="item.status === 'New'"><a href="javascript:void(0)"
                                class="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">New</a>
                        </li>
                        <li v-if="item.status === 'Sale'"><a href="javascript:void(0)"
                                class="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">Sale</a>
                        </li>
                        <li v-if="item.status === 'Featured'"><a href="javascript:void(0)"
                                class="bg-green-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">Featured</a>
                        </li>
                    </ul>
                </div>

                <div class="mt-4">
                    <router-link :to="{ name: 'shop-item-detail', params: { id: item.id } }" class="hover:text-indigo-600 text-lg font-semibold">{{ item.name
                        }}</router-link>
                    <div class="flex justify-between items-center mt-1">
                        <p class="text-green-600">{{ item.price }} <del class="text-red-600">{{ item.price2 }}</del></p>
                        <ul class="font-medium text-amber-400 list-none space-x-1">
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                        </ul>
                    </div>
                </div>
            </div><!--end content-->
        </div><!--end grid-->
    </div><!--end container-->

</template>

<script>
import { jarallax } from "jarallax";
import 'jarallax/dist/jarallax.min.css';

export default {
    props: {
        showing: {
            type: Boolean,
            required: true
        },
        items:{
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            datas: [
                {
                    id: 1,
                    image: require('../../assets/images/shop/items/s1.jpg'),
                    status: 'New',
                    name: 'Branded T-Shirt',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 2,
                    image: require('../../assets/images/shop/items/s2.jpg'),
                    status: 'Featured',
                    name: 'Shopping Bag',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 3,
                    image: require('../../assets/images/shop/items/s3.jpg'),
                    status: '',
                    name: 'Elegent Watch',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 4,
                    image: require('../../assets/images/shop/items/s4.jpg'),
                    status: '',
                    name: 'Casual Shoes',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 5,
                    image: require('../../assets/images/shop/items/s5.jpg'),
                    status: 'New',
                    name: 'Earphones',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 6,
                    image: require('../../assets/images/shop/items/s6.jpg'),
                    status: '',
                    name: 'Elegent Mug',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 7,
                    image: require('../../assets/images/shop/items/s7.jpg'),
                    status: '',
                    name: 'Sony Headphones',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 8,
                    image: require('../../assets/images/shop/items/s8.jpg'),
                    status: 'Sale',
                    name: 'Wooden Stools',
                    price: '$16.00',
                    price2: '$21.00'
                },
            ]
        }
    },
    mounted() {
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.5,
        });
    },
    methods: {
        viewBlogDetail(id) {
            this.$router.push({ name: 'shop-item-detail', params: { id } });
        }
    }

}
</script>

<style lang="scss" scoped></style>