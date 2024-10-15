<template>
    <!-- Start Section-->
    <div class="container relative">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            <!-- Start Bid -->
            <div v-for="product in filteredData" :key="product.id" @click="viewBlogDetail(product.id)"
                class="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                <div class="relative">
                    <img :src="product.image" alt="">
                    <div
                        class="absolute end-0 top-0 mt-6 me-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                        <a href="#!"
                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i
                                class="mdi mdi-heart"></i></a>
                    </div>

                    <div
                        class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                        <router-link :to="{ name: 'nft-detail', params: { id: product.id } }"
                            class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Place Bid</router-link>
                    </div>

                    <div v-if="product.showdate === true"
                        class="absolute bottom-0 start-0 ms-6 mb-6 text-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l to-indigo-600 from-fuchsia-600 text-white rounded-full px-3">
                        <i class="uil uil-clock align-middle"></i> <small id="auction-item-1" class="font-semibold">
                            {{
            product.remaining?.days + " : " + product.remaining?.hours + " : " +
            product.remaining?.minutes + " : " + product.remaining?.seconds }}</small>
                    </div>
                </div>

                <div class="p-6 relative">
                    <router-link :to="{ name: 'nft-detail', params: { id: product.id } }"
                        class="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{{ product.name
                        }}</router-link>

                    <div class="flex items-center justify-between mt-2">
                        <div class="flex items-center">
                            <i class="mdi mdi-ethereum text-xl leading-none text-indigo-600 me-1"></i>
                            <span class="block font-semibold text-indigo-600">{{ product.eth }}</span>
                        </div>

                        <div>
                            <i class="mdi mdi-heart text-red-600"></i> <span class="text-slate-400">{{ product.like
                                }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Bid -->

        </div><!--end grid-->

        <div v-if="pagination" class="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div class="md:col-span-12 text-center">
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">
                        <li>
                            <a href="#"
                                class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                <i class="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</a>
                        </li>
                        <li>
                            <a href="#"
                                class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page"
                                class="z-10 size-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</a>
                        </li>
                        <li>
                            <a href="#"
                                class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</a>
                        </li>
                        <li>
                            <a href="#"
                                class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</a>
                        </li>
                        <li>
                            <a href="#"
                                class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                <i class="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div><!--end grid-->

        <div v-else class="grid md:grid-cols-12 grid-cols-1 mt-6">
            <div class="md:col-span-12 text-center">
                <a href=""
                    class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i
                        class="uil uil-process mdi-spin"></i> Load More</a>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
export default {
    props: {
        pagination: {
            type: Boolean,
            required: true
        },
        filter: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    image: require('../../assets/images/nft/items/1.jpg'),
                    name: 'Deep Sea Phantasy',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'branding',
                    date: 'January 29, 2025 6:0:0',
                    showdate: true
                },
                {
                    id: 2,
                    image: require('../../assets/images/nft/items/2.jpg'),
                    name: 'CyberPrimal 042 LAN',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'designing',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
                {
                    id: 3,
                    image: require('../../assets/images/nft/items/3.jpg'),
                    name: 'Crypto Egg Stamp #5',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'photography',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
                {
                    id: 4,
                    image: require('../../assets/images/nft/items/4.jpg'),
                    name: 'Color Abstract Painting',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'development',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
                {
                    id: 5,
                    image: require('../../assets/images/nft/items/5.jpg'),
                    name: 'Liquid Forest Princess',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'branding',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
                {
                    id: 6,
                    image: require('../../assets/images/nft/items/6.jpg'),
                    name: 'Spider Eyes Modern Art',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'branding',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
                {
                    id: 7,
                    image: require('../../assets/images/nft/items/7.jpg'),
                    name: 'Synthwave Painting',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'designing',
                    date: 'January 29, 2025 6:0:0',
                    showdate: true
                },
                {
                    id: 8,
                    image: require('../../assets/images/nft/items/8.jpg'),
                    name: 'Contemporary Abstract',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'development',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
                {
                    id: 9,
                    image: require('../../assets/images/nft/items/9.jpg'),
                    name: 'CyberPrimal 042 LAN',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'designing',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
                {
                    id: 10,
                    image: require('../../assets/images/nft/items/10.jpg'),
                    name: 'Crypto Egg Stamp #5',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'photography',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
                {
                    id: 11,
                    image: require('../../assets/images/nft/items/11.jpg'),
                    name: 'Color Abstract Painting',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'development',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
                {
                    id: 12,
                    image: require('../../assets/images/nft/items/12.jpg'),
                    name: 'Liquid Forest Princess',
                    eth: '20.5 ETH',
                    like: '22',
                    category: 'branding',
                    date: 'January 29, 2025 6:0:0',
                    showdate: false
                },
            ],
            productData: [],
            selectedCategory: null,
            filteredData: []
        }
    },
    created() {
        this.productData = this.products;
    },

    mounted() {
        this.interval = setInterval(() => {
            this.remainingDays();
            this.matchCategory()
        }, 100);
        return () => clearInterval(this.interval);
    },
    methods: {
        remainingDays() {
            const formattedData = this.products.map((item) => ({
                ...item,
                remaining: this.tickTock(item.date),

            }));
            this.productData = formattedData;
        },
        tickTock(date) {
            let startDate = new Date(date);
            let currentDate = new Date();
            const diff = startDate.getTime() - currentDate.getTime();
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            return { hours, minutes, seconds, days }
        },
        matchCategory(category) {
            this.selectedCategory = category
            this.filteredData = this.selectedCategory ? this.productData.filter((item) => item.category === this.selectedCategory)
                : this.productData;
        },
        viewBlogDetail(id) {
            this.$router.push({ name: 'nft-detail', params: { id } });
        }
    },



}
</script>

<style lang="scss" scoped></style>