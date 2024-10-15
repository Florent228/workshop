<template>
    <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Projects</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group relative block overflow-hidden rounded-md duration-500">
                        <router-link to="portfolio-detail-one"><img :src="item.image" class="rounded-md shadow dark:shadow-gray-800" alt=""></router-link>
                        <div class="content pt-3">
                            <h5 class="mb-1"><router-link to="portfolio-detail-one" class="hover:text-indigo-600 duration-500 font-semibold text-lg">{{item.name}}</router-link></h5>
                            <h6 class="text-slate-400">{{item.type}}</h6>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        image: require('../../assets/images/construction/1.jpg'),
                        name: 'Serenity Apartments',
                        type: 'Branding'
                    },
                    {
                        image: require('../../assets/images/construction/2.jpg'),
                        name: 'The Landscape House',
                        type: 'Mockup'
                    },
                    {
                        image: require('../../assets/images/construction/3.jpg'),
                        name: 'New Build Family Home',
                        type: 'Abstract'
                    },
                    {
                        image: require('../../assets/images/construction/4.jpg'),
                        name: 'Private and Social Apartments',
                        type: 'Books'
                    },
                    {
                        image: require('../../assets/images/construction/5.jpg'),
                        name: 'Apartment Complex',
                        type: 'V-card'
                    },
                    {
                        image: require('../../assets/images/construction/6.jpg'),
                        name: 'Construction Engineering',
                        type: 'Photography'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>