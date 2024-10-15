<template>
  <!-- Footer Start -->
  <footer class="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div class="container relative text-center">
                <div class="grid grid-cols-1">
                    <div class="py-[30px] px-0">
                        <div class="grid md:grid-cols-2 items-center">
                            <div class="md:text-start text-center">
                                <a href="#" class="text-[22px] focus:outline-none">
                                    <img src="../../assets/images/workshop/logo-light.png" class="mx-auto md:me-auto md:ms-0" alt="">
                                </a>
                            </div>
    
                        </div><!--end grid-->
                    </div>
                </div>
            </div><!--end container-->

            <div class="py-[30px] px-0 border-t border-slate-800">
                <div class="container relative text-center">
                    <div class="grid grid-cols-1">
                        <div class="text-center">
                            <p class="mb-0"> &#169; {{date}} FORMACONFIANCE.  <a href="https://github.com/Florent228" target="_blank" class="text-reset"> développer  par AKAF</a>.</p>
                        </div>
                    </div><!--end grid-->
                </div><!--end container-->
            </div>
        </footer><!--end footer-->
        <!-- Footer End -->
</template>

<script>
    export default {
        data() {
            return {
                date: new Date().getFullYear()
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>