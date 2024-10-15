<template>
    <!-- Start -->
    <section
        class="relative md:py-24 py-16 md:pt-12 bg-[url('../../assets/images/food/food-menu.png')] bg-no-repeat bg-top bg-cover">
        <div class="container relative">
            <div class="grid grid-cols-1 items-center gap-[30px]">
                <div class="filters-group-wrap text-center">
                    <div class="filters-group">
                        <ul class="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                data-group="all" :class="selectedCategory == null ? 'active' : ''"
                                @click="matchCategory(null)">All</li>
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                data-group="break" :class="selectedCategory == 'break' ? 'active' : ''"
                                @click="matchCategory('break')">Breakfast</li>
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                data-group="lunch" :class="selectedCategory == 'lunch' ? 'active' : ''"
                                @click="matchCategory('lunch')">Lunch</li>
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                data-group="dinner" :class="selectedCategory == 'dinner' ? 'active' : ''"
                                @click="matchCategory('dinner')">Dinner</li>
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                data-group="tea" :class="selectedCategory == 'tea' ? 'active' : ''"
                                @click="matchCategory('tea')">Tea & Coffee</li>
                        </ul>
                    </div>
                </div>
            </div><!--grid-->
        </div><!--end container-->

        <div class="container relative mt-8">
            <div id="grid" class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
                <div v-for="item in filteredData" :key="item" class="group picture-item p-3 mt-6"
                    data-groups='["break"]'>
                    <img :src="item.image"
                        class="rounded-full size-32 mx-auto group-hover:animate-[spin_10s_linear_infinite]" alt="">

                    <div class="mt-4 text-center">
                        <a href=""
                            class="text-lg font-medium block hover:text-indigo-600 duration-500">{{ item.name }}</a>
                        <span class="text-slate-400 mt-2 block">{{ item.desc }}</span>

                        <h5 class="text-indigo-600 font-medium mt-4">{{ item.price }}</h5>
                    </div>
                </div><!--end col-->
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script>
export default {
    data() {
        return {
            selectedCategory: null,
            items: [
                {
                    image: require('../../assets/images/food/1.jpg'),
                    name: 'Black bean dip',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'break'
                },
                {
                    image: require('../../assets/images/food/2.jpg'),
                    name: 'Onion Pizza',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'lunch'
                },
                {
                    image: require('../../assets/images/food/3.jpg'),
                    name: 'Chicken Breast',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'break'
                },
                {
                    image: require('../../assets/images/food/4.jpg'),
                    name: 'Veg Pizza',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'dinner'
                },
                {
                    image: require('../../assets/images/food/5.jpg'),
                    name: 'Cordon Bleu',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'break'
                },
                {
                    image: require('../../assets/images/food/6.jpg'),
                    name: 'Boerewors',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'lunch'
                },
                {
                    image: require('../../assets/images/food/7.jpg'),
                    name: 'Tarte Tatin',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'break'
                },
                {
                    image: require('../../assets/images/food/8.jpg'),
                    name: 'Green Tea',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'tea'
                },
                {
                    image: require('../../assets/images/food/9.jpg'),
                    name: 'Special Coffee',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'lunch'
                },
                {
                    image: require('../../assets/images/food/10.jpg'),
                    name: 'Lemon Tea',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'dinner'
                },
                {
                    image: require('../../assets/images/food/11.jpg'),
                    name: 'Pancakes',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'tea'
                },
                {
                    image: require('../../assets/images/food/12.jpg'),
                    name: 'American Item',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'lunch'
                },
                {
                    image: require('../../assets/images/food/13.jpg'),
                    name: 'Country side pizza',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'tea'

                },
                {
                    image: require('../../assets/images/food/14.jpg'),
                    name: 'Chilly garlic potato',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'dinner'
                },
                {
                    image: require('../../assets/images/food/15.jpg'),
                    name: 'Brownie with vanilla',
                    price: '$25.00',
                    title: 'A reader will be distracted by the readable',
                    category: 'tea'
                },
            ],
            filteredData: this.items,
        }
    },
    created() {
        this.matchCategory(this.category)
    },
    methods: {
        matchCategory(category) {
            this.selectedCategory = category
            this.filteredData = this.selectedCategory ? this.items.filter((item) => item.category === this.selectedCategory)
                : this.items;
        }
    },
}
</script>

<style lang="scss" scoped></style>