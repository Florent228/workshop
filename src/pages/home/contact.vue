<template>
    <div>
        <navbar :loginButton=false bg-white :navLight="'nav-light'" />
        
        <!-- Start Hero -->
        <section class="relative table w-full py-36 bg-[url('../../assets/images/workshop/blog-bg.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-black opacity-75"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Contactez-nous</h3>
                </div><!--end grid-->
            </div><!--end container-->
            
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                   <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="/">FORMACONFIANCE</router-link></li>
                   <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Contactez-nous</li>
                </ul>
            </div>
        </section><!--end section-->
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <!-- End Hero -->
        <contactone />
        <footers :email=true />
    </div>
</template>

<script>
import navbar from '@/components/workshop/navbar.vue';
import contactone from '@/components/workshop/contact-one.vue';
import footers from '@/components/workshop/footer-job.vue';
    export default {
        data() {
            return {
               
            }
        },
        components:{
            navbar,
            contactone,
            footers,
            
        },
       
    }
</script>

<style lang="scss" scoped>

</style>