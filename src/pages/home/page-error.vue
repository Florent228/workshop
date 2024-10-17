<template>
     <!-- Start -->
     <div>
        <section class="relative bg-indigo-600/5">
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="title-heading text-center my-auto">
                            <img src="../../assets/images/error.png" class="mx-auto" alt="">
                            <h1 class="mt-3 mb-6 md:text-5xl text-3xl font-bold">Page non trouvée?</h1>
                            <p class="text-slate-400">Whoops! Il semble que la page que vous cherchiez n'ait pas été trouvée..</p>
                            
                            <div class="mt-4">
                                <router-link to="/" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Retour à l'accueil</router-link>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date().getFullYear(),
            }
        },
        components:{
        }
    }
</script>

<style lang="scss" scoped>

</style>
