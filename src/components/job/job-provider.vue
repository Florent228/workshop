<template>

    <!-- Start Section-->
    <div class="container relative">
        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] ">
            <!-- Start Candidate Content -->
            <div  v-for="item in datas" :key="item"
                class="group relative p-6 rounded-md shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-gray-50 dark:bg-gray-800 duration-500 text-center">
                <div class="mt-8">
                    <img :src="item.image" class="rounded-full shadow-md size-40 mx-auto block" alt="">

                    <div class="mt-3">
                        <router-link to="/page-job-candidate-detail"
                            class="text-lg font-medium hover:text-indigo-600 duration-500 block">{{ item.name }}</router-link>
                        <span class="bg-indigo-600/5 text-indigo-600 text-sm font-medium px-4 py-1 rounded-full h-[28px]">{{ item.title }}</span>
                    </div>
                </div>

                <div class="flex items-center justify-around my-4">
                    <span class="text-slate-400"><i class="uil uil-map-marker text-indigo-600 me-1"></i>{{item.location }}</span>
                    <span class="text-slate-400"><i class="uil  text-indigo-600 me-1"></i>{{item.salary }}</span>
                </div>

                <!-- <a v-for="language in item.language" :key="language" href=""
                    class="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1">{{language }}</a> -->
                <div class="mt-4">
                    <router-link to="/provider-detail"
                        class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full">
                        Consulter le Profil </router-link>
                </div>

                <!-- <div class="absolute top-6 start-6">
                    <span
                        class="bg-indigo-600/5 text-indigo-600 text-sm font-medium px-4 py-1 rounded-full h-[28px]">{{
                        item.status }}</span>
                </div>
                <div class="absolute top-6 end-6">
                    <a href=""
                        class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-full"><i
                            class="uil uil-bookmark"></i></a>
                </div> -->
            </div>
            <!-- End Candidate Content -->
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas: [
                    {
                        image: require('../../assets/images/client/01.jpg'),
                        name: 'Constantin ANAGO',
                        title: 'Domaine d\'expertise',
                        location: 'Togo',
                        salary: 'Nom Entreprise',
                        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
                        status: 'Featured'
                    },
                    {
                        image: require('../../assets/images/client/02.jpg'),
                        name: 'Constantin ANAGO',
                        title: 'Domaine d\'expertise',
                        location: 'Togo',
                        salary: 'Nom Entreprise',
                        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
                        status: 'Featured'
                    },
                    {
                        image: require('../../assets/images/client/03.jpg'),
                        name: 'Constantin ANAGO',
                        title: 'Domaine d\'expertise',
                        location: 'Togo',
                        salary: 'Nom Entreprise',
                        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
                        status: 'Featured'
                    },
                    {
                        image: require('../../assets/images/client/04.jpg'),
                        name: 'Constantin ANAGO',
                        title: 'Domaine d\'expertise',
                        location: 'Togo',
                        salary: 'Nom Entreprise',
                        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
                        status: 'Featured'
                    },
                    {
                        image: require('../../assets/images/client/05.jpg'),
                        name: 'Constantin ANAGO',
                        title: 'Domaine d\'expertise',
                        location: 'Togo',
                        salary: 'Nom Entreprise',
                        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
                        status: 'Featured'
                    },
                    {
                        image: require('../../assets/images/client/06.jpg'),
                        name: 'Constantin ANAGO',
                        title: 'Domaine d\'expertise',
                        location: 'Togo',
                        salary: 'Nom Entreprise',
                        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
                        status: 'Featured'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>