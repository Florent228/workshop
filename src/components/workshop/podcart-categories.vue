<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Explorer nos
                Ressources et Formations</h3>
        </div><!--end grid-->

        <div class="flex justify-center items-center text-center mt-8">
            <ul class="list-none space-x-3 space-y-4">
                <li v-for="item in categories" :key="item" class="inline-block">
                    <a href=""
                        class="group flex items-center bg-white dark:bg-slate-900 hover:text-indigo-600 shadow hover:shadow-md dark:shadow-gray-800 hover:dark:shadow-gray-800 border-4 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                        <i :class="item.icon" class="me-2 text-[18px]"></i>
                        <span class="text-[18px] font-medium">{{item.title}}</span>
                    </a>
                </li><!--end content-->
            </ul>
        </div>
    </div><!--end container-->
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    title: 'Sécurité en ligne',
                    icon: 'uil uil-lock',
                },
                {
                    title: 'Vie privée et confidentialité',
                    icon: 'uil uil-shield',
                },
                {
                    title: 'Cyberharcèlement et prévention',
                    icon: 'uil uil-comment-slash',
                },
                {
                    title: 'Désinformation et fake news',
                    icon: 'uil uil-bullseye',
                },
                {
                    title: 'Santé mentale et bien-être numérique',
                    icon: 'uil uil-heartbeat',
                },
                {
                    title: 'Contrôle parental et éducation numérique',
                    icon: 'uil uil-user-md',
                }
            ]

        }
    },
}
</script>

<style lang="scss" scoped></style>