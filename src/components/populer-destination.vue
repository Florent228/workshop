<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Popular Destination
            </h3>
            <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to
                generate awareness, drive traffic, connect.</p>

            <div class="filters-group-wrap mt-4">
                <div class="filters-group">
                    <ul class="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500 "
                            :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)">All</li>
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                            :class="selectedCategory == 'beach' ? 'active' : ''" @click="matchCategory('beach')">Beach
                        </li>
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                            :class="selectedCategory == 'park' ? 'active' : ''" @click="matchCategory('park')">Park
                        </li>
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                            :class="selectedCategory == 'nature' ? 'active' : ''" @click="matchCategory('nature')">
                            Nature</li>
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                            :class="selectedCategory == 'mountain' ? 'active' : ''" @click="matchCategory('mountain')">
                            Mountain</li>
                    </ul>
                </div>
            </div>
        </div><!--end grid-->

        <div id="grid" class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            <div v-for="item in filterData" :key="item" class="picture-item">
                <div class="group relative overflow-hidden rounded-md">
                    <div class="relative overflow-hidden">
                        <img :src="item.image" class="roubded-md" alt="">
                        <div class="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent"></div>
                    </div>

                    <div class="absolute bottom-0 start-0 end-0 flex justify-between p-6">
                        <div>
                            <a href=""
                                class="text-white/80 hover:text-white text-lg font-semibold block">{{ item.place }}</a>

                            <ul class="list-none mb-0 text-amber-400">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>

                        <h5 class="text-white/70">{{ item.price }}</h5>
                    </div>

                    <div class="absolute end-0 top-0 m-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                        <a href="#!"
                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i
                                class="mdi mdi-heart"></i></a>
                    </div>
                </div>
            </div><!--end content-->
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
export default {
    data() {
        return {
            selectedCategory: null,
            datas: [
                {
                    image: require('../assets/images/travel/1.jpg'),
                    place: 'Thailand',
                    price: '$59/night',
                    category: 'beach'
                },
                {
                    image: require('../assets/images/travel/2.jpg'),
                    place: 'Bali',
                    price: '$59/night',
                    category: 'park'
                },
                {
                    image: require('../assets/images/travel/3.jpg'),
                    place: 'Bangkok',
                    price: '$59/night',
                    category: 'nature'
                },
                {
                    image: require('../assets/images/travel/4.jpg'),
                    place: 'Pataya',
                    price: '$59/night',
                    category: 'mountain'
                },
                {
                    image: require('../assets/images/travel/5.jpg'),
                    place: 'Europe',
                    price: '$59/night',
                    category: 'beach'
                },
                {
                    image: require('../assets/images/travel/6.jpg'),
                    place: 'Maldivas',
                    price: '$59/night',
                    category: 'park'
                },
                {
                    image: require('../assets/images/travel/7.jpg'),
                    place: 'Dubai',
                    price: '$59/night',
                    category: 'nature'
                },
                {
                    image: require('../assets/images/travel/8.jpg'),
                    place: 'India',
                    price: '$59/night',
                    category: 'mountain'
                },
            ],
            filterData: this.datas
        }
    },
    created() {
        this.matchCategory(this.category)
    },
    methods: {
        matchCategory(category) {
            this.selectedCategory = category
            this.filterData = this.selectedCategory ? this.datas.filter((item) => item.category === this.selectedCategory) : this.datas
        }
    },
}
</script>

<style lang="scss" scoped></style>