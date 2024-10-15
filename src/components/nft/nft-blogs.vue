<template>
    
    <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blog Or News</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <div v-for="blog in blogs" :key="blog"  @click="viewBlogDetail(blog.id)" class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img :src="blog.image" alt="">

                        <div class="content p-6">
                            <router-link :to="{ name: 'blog-detail', params: { id: blog.id } }" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{ blog.title }}</router-link>
                            <p class="text-slate-400 mt-3">{{ blog.desc }}</p>
                            
                            <div class="mt-4">
                                <router-link :to="{ name: 'blog-detail', params: { id: blog.id } }" class="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                blogs:[
                    {
                        id:12,
                        image:require('../../assets/images/nft/items/21.jpg'),
                        title: 'Mindfulness Activities for Kids & Toddlers with NFT',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        id:13,
                        image:require('../../assets/images/nft/items/22.jpg'),
                        title: 'Save Thousands Of Lives Through This NFT',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        id:14,
                        image:require('../../assets/images/nft/items/23.jpg'),
                        title: 'A place where technology meets craftsmanship',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    }
                ]
            }
        },
        methods: {
        viewBlogDetail(id) {
            this.$router.push({ name: 'blog-detail', params: { id } });
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>