<template>
    <div class="lg:col-span-4 md:col-span-6">
        <div class="sticky top-20">
            <div class="text-center mt-8">
                <img src="../../assets/images/client/05.jpg" class="size-24 mx-auto rounded-full shadow mb-4" alt="">

                <a href="" class="text-lg font-semibold hover:text-indigo-600 duration-500">Cristina Romsey</a>
                <p class="text-slate-400">Content Writer</p>
            </div>
            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

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