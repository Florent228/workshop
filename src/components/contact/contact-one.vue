<template>
    <!-- Start Section-->
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                <div v-for="item in datas" :key="item" class="text-center px-6 mt-6">
                    <div class="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                        <i :class="item.icon"></i>
                    </div>

                    <div class="content mt-7">
                        <h5 class="title h5 text-xl font-medium">{{item.name}}</h5>
                        
                        <div class="mt-5">
                            <a href="tel:+33636221770" v-if="item.detail === '+33 6 36 22 17 70'" class="text-indigo-600 font-medium">{{ item.detail }}</a>

                            <a href="mailto:contact@formaconfiance.com" v-if="item.detail === 'contact@formaconfiance.com'" class="text-indigo-600 font-medium">{{ item.detail }}</a>

                            <a v-if="item.detail === 'Toulouse France'" class="text-indigo-600 font-medium">{{ item.detail }}</a>
                        </div>
                    </div>
                </div>                    
            </div><!--end grid-->
        </div><!--end container-->
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
                datas: [
                    {
                        icon: 'uil uil-phone',
                        name: 'Téléphone',
                        desc: 'Contactez-nous directement pour toute question ou assistance rapide concernant nos services.',
                        detail: '+33 6 36 22 17 70'
                    },
                    {
                        icon: 'uil uil-envelope',
                        name: 'Email',
                        desc: 'Envoyez-nous un email pour obtenir plus d\'informations ou discuter de vos besoins en matière de prestataires qualifiés.',
                        detail: 'contact@formaconfiance.com'
                    },
                    {
                        icon: 'uil uil-map-marker',
                        name: 'Localisation',
                        desc: 'Toulouse France,',
                        detail: 'Toulouse France'
                    },
                ]
            }
        },
        
        methods: {
            toggle(){
                 if(!this.isActive){
                    this.isActive = true;
                 } else {
                    this.isActive = false
                 }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>