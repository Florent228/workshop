<template>
   <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:ps-12 ps-8 lg:pt-12 pt-8 lg:me-8">
                        <img src="../../assets/images/saas/1.png" class="ltr:rounded-tl-lg rtl:rounded-tr-lg" alt="">
                    </div>

                    <div class="">
                        <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Create Content In Single <br> Click With AI Power</h3>
                        <p class="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{item}}</li>
                           
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative order-1 md:order-2">
                        <div class="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:pe-12 pe-8 lg:pt-12 pt-8 lg:ms-8">
                            <img src="../../assets/images/saas/2.png" class="ltr:rounded-tr-lg rtl:rounded-tl-lg" alt="">
                        </div>
                    </div>

                    <div class="order-2 md:order-1">
                        <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Write Blog Posts, <br> Stories, & Even Books</h4>
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{item}}</li>
                           
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
        name: 'aiPower',
        data() {
            return {
                datas:[
                 'Digital Marketing Solutions for Tomorrow' , ' Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand' ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>