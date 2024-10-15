<template>
    <div>
        <navbar :lightlogo=true :loginButton=true />
        <section
            class="relative table w-full py-36 lg:py-44 bg-gradient-to-br from-indigo-600/20 to-yellow-500/20 dark:from-indigo-600/20 dark:to-yellow-500/20">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="lg:col-span-7">
                        <div class="me-6">
                            <i class="uil uil-microphone text-indigo-600 text-4xl"></i>
                            <h4
                                class="font-bold lg:leading-normal leading-normal text-4xl lg:text-[54px] my-5 text-black dark:text-white">
                                Pour une utilisation sécurisée des réseaux sociaux.  <br>Formez-vous sur <span class="text-indigo-600">FORMACONFIANCE</span></h4>
                            <p class="text-slate-500 text-lg max-w-xl">Découvrez des ressources essentielles et des outils interactifs pour mieux comprendre et maîtriser les dangers des réseaux sociaux. Quiz, guides, et articles à votre disposition.</p>

                            <div class="mt-8">
                                <a href="#"
                                    class="lightbox py-1.5  pe-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full cursor-pointer">
                                    Formez-vous ici</a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="lg:col-span-5 relative">
                        <div class="grid grid-cols-2 items-center md:gap-4 gap-3">
                            <div class="md:space-y-4 space-y-3">
                                <img src="../../assets/images/workshop/3.jpg"
                                    class="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt="">
                                <img src="../../assets/images/workshop/2.jpg"
                                    class="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt="">
                            </div>

                            <div class="md:space-y-4 space-y-3">
                                <img src="../../assets/images/workshop/1.jpg"
                                    class="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt="">
                                <img src="../../assets/images/workshop/4.jpg"
                                    class="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt="">
                            </div>
                        </div><!--end col-->

                        <span
                            class="size-24 bg-yellow-500 border-[3px] border-gray-100 dark:border-gray-800 rounded-full absolute bottom-0 -end-4 flex items-center justify-center">
                            <span class="text-white text-xl text-center font-semibold">
                                <count-up class="counter-value block" :start-val="100" :end-val="551"></count-up>
                                <span class="text-white font-semibold text-sm block">ressources et formations</span>
                            </span>
                        </span>


                        <div class="absolute -top-4 start-1/2 -translate-x-1/2 text-center">
                            <a href="#!" data-type="youtube" data-id="S_CGed6E610"
                                class="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-indigo-600">
                                <i class="uil uil-microphone inline-flex items-center justify-center text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section>

        <!-- iframe start  -->
        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500"
                    frameborder="0"></iframe>
            </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                    @click="toggle">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <!-- iframe end  -->
         
        <section class="relative md:py-24 py-16">
            <categories />
            <videos />
        </section>

            <!-- Start Section-->
            <div class="container relative">
                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    <div v-for="item in datas" :key="item.id" @click="viewBlogDetail(item.id)"
                        class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img :src="item.image" alt="">

                        <div class="content p-6">
                            <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{ item.title }}</router-link>
                            <p class="text-slate-400 mt-3">{{ item.desc }}</p>

                            <div class="mt-4">
                                <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                    class="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
                                    Lire la suite
                                    <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div><!--blog end-->

                </div><!--end grid-->
                <pagination />
            </div><!--end container-->

        <!-- End -->


        <listen />

        <Footer :email=true />
    </div>
</template>

<script>
import navbar from '@/components/workshop/navbar.vue';
import CountUp from 'vue-countup-v3';
import listen from '@/components/workshop/podcart-listen.vue';
import categories from '@/components/workshop/podcart-categories.vue';
import videos from '@/components/workshop/podcart-video.vue';
import Footer from '@/components/workshop/footer-job.vue';
export default {
    components: {
        navbar,
        CountUp,
        listen,
        categories,
        videos,
        Footer,
    },
    data() {
        return {
            datas: [
                {
                    id: 1,
                    image: require('../../assets/images/workshop/Sécurite-en-ligne.jpg'),
                    title: 'Sécurité en ligne',
                    desc: 'Comprendre les menaces courantes sur les réseaux sociaux et adopter de bonnes pratiques pour se protéger des attaques en ligne.',
                    content: `
                        Introduction:
                        L'importance de la sécurité en ligne est devenue cruciale à l'ère des réseaux sociaux. Chaque jour, des utilisateurs sont exposés à des cyberattaques, des usurpations d'identité ou des arnaques. Comprendre les mesures de protection est essentiel pour sécuriser ses données et éviter des incidents.
                        
                        Principales menaces en ligne:
                        - Phishing : comment identifier et éviter les tentatives de phishing.
                        - Malware : importance d’un antivirus et comment reconnaître des logiciels suspects.
                        - Vol d’identité : méthodes courantes et comment s'en protéger.
                        
                        Bonnes pratiques pour une sécurité renforcée:
                        - Utiliser des mots de passe forts et uniques.
                        - Activer la double authentification sur les comptes importants.
                        - Se méfier des liens et des pièces jointes suspects.
                        - Garder ses appareils à jour pour éviter les failles de sécurité.
                        
                        Sécurité sur les réseaux sociaux:
                        - Gérer les paramètres de sécurité sur Facebook, Instagram, Twitter, etc.
                        - Contrôler l’accès à ses informations personnelles.
                        - Prendre conscience des applications tierces connectées à ses comptes.
                        
                        Conclusion:
                        Conseils finaux sur la vigilance quotidienne et ressources en ligne pour renforcer ses connaissances.
                    `
                },
                {
                    id: 2,
                    image: require('../../assets/images/workshop/vie-privee.png'),
                    title: 'Vie privée et confidentialité',
                    desc: 'Apprendre à configurer les paramètres de confidentialité et à mieux protéger ses données personnelles sur les réseaux sociaux.',
                    content: `
                        Introduction:
                        Avec l'augmentation de la connectivité, la confidentialité en ligne devient un sujet majeur. Vos données personnelles peuvent être collectées, partagées et utilisées sans que vous en soyez pleinement conscient. Ce guide explique comment protéger votre vie privée.
                        
                        Données personnelles et leur utilisation:
                        - Quels types de données sont collectés par les plateformes de réseaux sociaux.
                        - L'utilisation de ces données à des fins publicitaires.
                        - Comment les entreprises vendent et partagent vos informations.
                        
                        Paramètres de confidentialité à configurer:
                        - Contrôler qui voit vos publications et informations personnelles.
                        - Désactiver le suivi publicitaire.
                        - Gérer les applications et les services liés à votre compte.
                        
                        Préserver sa vie privée sur les réseaux sociaux:
                        - Réduire la visibilité de votre profil public.
                        - Ne pas partager des informations sensibles (adresse, numéro de téléphone, etc.).
                        - Être conscient de la géolocalisation dans les photos et les publications.
                        
                        Conclusion:
                        Résumé des actions à mettre en place pour protéger sa vie privée au quotidien, avec des liens vers des outils pratiques.
                    `
                },
                {
                    id: 3,
                    image: require('../../assets/images/workshop/Cyberharcèlement.jpg'),
                    title: 'Cyberharcèlement et prévention',
                    desc: 'Identifier et prévenir le cyberharcèlement sur les réseaux sociaux, et savoir comment réagir face à une situation de harcèlement en ligne.',
                    content: `
                        Introduction:
                        Le cyberharcèlement est un problème croissant sur les réseaux sociaux. Il affecte non seulement les adolescents, mais aussi les adultes. Ce guide propose des solutions pour le reconnaître et le prévenir.
                        
                        Qu'est-ce que le cyberharcèlement ?
                        - Définition du cyberharcèlement : insultes, menaces, humiliations en ligne.
                        - Les formes courantes : trolling, doxing, body shaming.
                        - Conséquences psychologiques sur les victimes.
                        
                        Comment prévenir le cyberharcèlement:
                        - Paramètres de confidentialité pour limiter l’exposition aux inconnus.
                        - Bloquer et signaler les harceleurs.
                        - Conseils pour intervenir en tant que témoin.
                        
                        Que faire en cas de cyberharcèlement ?
                        - Recueillir des preuves (captures d'écran).
                        - Signaler aux plateformes et aux autorités.
                        - Trouver du soutien psychologique ou juridique.
                        
                        Conclusion:
                        Importance de la sensibilisation et ressources pour obtenir de l'aide en cas de cyberharcèlement.
                    `
                },
                {
                    id: 4,
                    image: require('../../assets/images/workshop/fake-news.jpg'),
                    title: 'Désinformation et fake news',
                    desc: 'Reconnaître les fake news et les pratiques de désinformation, tout en adoptant des stratégies pour ne pas les propager sur les réseaux.',
                    content: `
                        Introduction:
                        Les fake news sont omniprésentes sur les réseaux sociaux et peuvent avoir des conséquences graves. Ce guide vous apprend à les identifier et à éviter de les propager.
                        
                        Qu'est-ce qu'une fake news ?
                        - Définition : contenu délibérément faux ou trompeur.
                        - Les types de désinformation : photos truquées, théories du complot, fausses citations.
                        - L'impact des fake news sur la société.
                        
                        Comment reconnaître une fake news ?
                        - Vérifier la source de l'information.
                        - Utiliser des outils de vérification des faits.
                        - Faire attention aux titres sensationnalistes et aux informations non vérifiées.
                        
                        Comment éviter de propager des fake news:
                        - Ne pas partager des articles sans les lire complètement.
                        - Encourager la discussion basée sur des faits.
                        - Signaler les informations trompeuses sur les plateformes.
                        
                        Conclusion:
                        Adopter une posture critique sur les informations et utiliser des outils comme FactCheck pour vérifier la véracité des faits.
                    `
                },
                {
                    id: 5,
                    image: require('../../assets/images/workshop/bien-etre-numérique.jpg'),
                    title: 'Santé mentale et bien-être numérique',
                    desc: 'Maintenir un équilibre sain entre usage des réseaux sociaux et bien-être mental, en adoptant des habitudes de consommation numérique responsables.',
                    content: `
                        Introduction:
                        L’utilisation excessive des réseaux sociaux peut nuire à la santé mentale. Ce guide explore les bonnes pratiques pour maintenir un équilibre numérique sain.
                        
                        Impact des réseaux sociaux sur la santé mentale:
                        - Comparaison sociale, anxiété et dépression.
                        - Effets du temps d'écran prolongé.
                        - Le rôle des likes et des notifications sur l'estime de soi.
                        
                        Stratégies pour un usage équilibré:
                        - Limiter le temps passé sur les plateformes avec des applications de contrôle.
                        - Créer des moments "sans écran" dans la journée.
                        - Pratiquer la pleine conscience numérique.
                        
                        Gérer le stress lié aux réseaux sociaux:
                        - Désactiver les notifications non essentielles.
                        - Suivre des comptes positifs et inspirants.
                        - Prendre des pauses régulières pour se déconnecter.
                        
                        Conclusion:
                        L'importance de la modération dans l'utilisation des réseaux sociaux, avec des liens vers des ressources en santé mentale.
                    `
                },
                {
                    id: 6,
                    image: require('../../assets/images/workshop/Controle-parentale.jpg'),
                    title: 'Contrôle parental et éducation numérique',
                    desc: 'Outils et conseils pour assurer la sécurité numérique des enfants et les éduquer aux bonnes pratiques sur les réseaux sociaux.',
                    content: `
                        Introduction:
                        Les parents ont un rôle essentiel à jouer pour assurer la sécurité numérique de leurs enfants. Ce guide fournit des conseils sur la mise en place d’un contrôle parental efficace et l’éducation numérique.
                        
                        L’importance du contrôle parental:
                        - Comprendre les dangers auxquels sont exposés les enfants en ligne.
                        - Pourquoi les enfants ont besoin de règles claires et de supervision.
                        
                        Outils de contrôle parental disponibles:
                        - Présentation des logiciels de contrôle parental.
                        - Paramètres de sécurité sur les plateformes sociales.
                        - Définir des limites de temps d'écran et de contenu.
                        
                        Enseigner aux enfants la sécurité en ligne:
                        - Encourager des discussions ouvertes sur les dangers en ligne.
                        - Apprendre à reconnaître et éviter les interactions risquées.
                        - Enseigner la prudence sur les informations partagées.
                        
                        Conclusion:
                        Importance d'une éducation continue et des discussions régulières sur l’utilisation des réseaux sociaux.
                    `
                },
            ],
            isActive: false,
        }
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive
        },
        viewBlogDetail(id) {
            this.$router.push({ name: 'blog-detail', params: { id } });
        }
    },
}
</script>

<style lang="scss" scoped></style>