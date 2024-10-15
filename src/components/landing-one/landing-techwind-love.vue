<template>
    <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-center">
                    <div class="md:col-span-6 md:text-start text-center">
                        <h3 class="md:mb-0 mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Why Everyone Loves <br> Techwind</h3>
                    </div>

                    <div class="md:col-span-6">
                        <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div><!--end grid-->

                <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px]">
                    <div class="relative">
                        <img src="../../assets/images/saas/classic02.png" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
                    </div>

                    <div class="lg:ms-8">
                        <h4 class="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br> With Real Problem</h4>
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                        </div>
                    </div>
                </div>
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative order-1 md:order-2">
                        <img src="../../assets/images/saas/classic03.png" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
                    </div>

                    <div class="lg:me-8 order-2 md:order-1">
                        <h4 class="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                        </div>
                    </div>
                </div>
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas:['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand']
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>