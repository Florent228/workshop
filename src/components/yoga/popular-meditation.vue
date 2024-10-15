<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-center">
            <div class="md:col-span-6">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Most Popular
                    Meditation Therapy</h3>
            </div>

            <div class="md:col-span-6">
                <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to
                    generate awareness, drive traffic, connect.</p>
            </div>
        </div><!--end grid-->

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-8 gap-[30px]">
            <div v-for="item in datas" :key="item" class="group rounded-md shadow-md dark:shadow-gray-800 relative overflow-hidden">
                <img :src="item.image" class="" alt="">
                <div
                    class="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/60 group-hover:via-slate-900/40 from-slate-900 top-3/4 group-hover:top-0 duration-500">
                </div>

                <div
                    class="absolute bottom-0 mx-auto start-0 end-0 group-hover:bottom-0 duration-500 px-6 pb-6 text-center">
                    <i :data-feather="item.icon"
                        class="size-10 text-white opacity-0 group-hover:opacity-100 duration-500 mx-auto"></i>

                    <div class="mt-6">
                        <a href="" class="text-xl font-semibold text-white duration-500">{{item.name}}</a>

                        <p class="text-white/50 hidden group-hover:block duration-500 mt-4">{{item.desc }}</p>
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
            datas: [
                {
                    image: require('../../assets/images/yoga/sound.jpg'),
                    name: 'Sound Therapy',
                    desc: 'We develop digital strategies, products and services appreciated by clients.',
                    icon: 'headphones'
                },
                {
                    image: require('../../assets/images/yoga/maditation.jpg'),
                    name: 'Meditation',
                    desc: 'We develop digital strategies, products and services appreciated by clients.',
                    icon: 'git-merge'
                },
                {
                    image: require('../../assets/images/yoga/relaxing.jpg'),
                    name: 'Mindfullness',
                    desc: 'We develop digital strategies, products and services appreciated by clients.',
                    icon: 'sun'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>