<template>
    <div class="container relative md:my-24 my-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h4 class="font-cursive-alex text-3xl">Blog</h4>
                    <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Blog Or News</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <div v-for="blog in blogs" :key="blog" class="blog relative shadow dark:shadow-gray-800 overflow-hidden">
                        <img :src="blog.image" alt="">

                        <div class="content p-6">
                            <router-link to="blog-detail" class="title h5 text-xl font-semibold font-head-ebgaramond hover:text-indigo-600 duration-500 ease-in-out">{{ blog.name }}</router-link>
                            <p class="text-slate-400 mt-3">{{ blog.desc }}</p>
                            
                            <div class="mt-4">
                                <router-link to="blog-detail" class="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></router-link>
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
                blogs: [
                    {
                        image: require('../../assets/images/spa/b1.jpg'),
                        name: 'Hiking for health in Peru',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        image: require('../../assets/images/spa/b2.jpg'),
                        name: 'Sisley Spa opens at Miramar',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        image: require('../../assets/images/spa/b3.jpg'),
                        name: 'Top 5 Tips for Choosing a Day Spa',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>