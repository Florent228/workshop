<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="grid grid-cols-12 gap-6 items-center">
                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img src="../../assets/images/about/ab03.jpg" class="shadow rounded-md" alt="">
                                    <img src="../../assets/images/about/ab02.jpg" class="shadow rounded-md" alt="">
                                </div>
                            </div>

                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img src="../../assets/images/about/ab01.jpg" class="shadow rounded-md" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="lg:ms-5">
                            <h3 class="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Connectez-vous avec des professionnels de confiance en quelques clics.</h3>

                            <p class="text-slate-400 max-w-xl mb-2">Votre plateforme de référence pour trouver des prestataires qualifiés dans une multitude de domaines.</p>
                            <p class="text-slate-400 max-w-xl">Que vous ayez besoin d'un Ingénieur pour vos travaux, d'un consultant pour votre entreprise ou d'un particulier, nous vous connectons avec les meilleurs professionnels adaptés à vos besoins.</p>
                        
                            <!-- <div class="mt-6">
                                <a href="" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right align-middle"></i></a>
                            </div> -->
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative mt-12">
                <div class="grid grid-cols-2 md:grid-cols-4">
                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] opacity-5 flex justify-center"><count-up class="counter-value" :start-val="3" :end-val="2000"></count-up>+</h3>
                        <span class="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Utilisateurs</span>
                    </div><!--end counter box-->

                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] opacity-5 flex justify-center"><count-up class="counter-value" :start-val="1" :end-val="2"></count-up>+</h3>
                        <span class="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Années d'expérience</span>
                    </div><!--end counter box-->

                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] opacity-5 flex justify-center"><count-up class="counter-value" :start-val="5" :end-val="504"></count-up></h3>
                        <span class="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Prestataires</span>
                    </div><!--end counter box-->

                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] opacity-5 flex justify-center"><count-up class="counter-value" :start-val="12" :end-val="6"></count-up>K</h3>
                        <span class="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Domaines d'expertise</span>
                    </div><!--end counter box-->
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
import CountUp from 'vue-countup-v3'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            CountUp
        }
    }
</script>

<style lang="scss" scoped>

</style>