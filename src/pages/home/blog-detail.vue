<template>
<div>
    <navbar :navLight="'nav-light'" />
    <!-- Start Hero -->
    <section
        class="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/workshop/blog-bg.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-3xl leading-normal font-medium text-white">{{ data?.title ? data?.title : '' }} </h3>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li
                    class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/">FORMACONFIANCE</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                        class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                    aria-current="page">Blog</li>
            </ul>
        </div>
    </section><!--end section-->
    <div class="relative">
        <div
            class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- End Hero -->

    <!-- Start Section-->
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-6">
                    <div class="p-6 rounded-md shadow dark:shadow-gray-800">



                        <img :src="data?.image ? data.image : blogimage" class="rounded-md h-auto w-full" alt="">

                        <div class="mt-6">
                            <p class="text-slate-400">{{ data?.content ? data?.content : '' }}</p>
                        </div>
                    </div>
                    <!-- <report /> -->
                </div>
                <div class="lg:col-span-4 md:col-span-6">
                    <div class="sticky top-20">
                        <div class="text-center mt-8">
                            <img src="../../assets/images/workshop/auteur.jpg" class="size-24 mx-auto rounded-full shadow mb-4" alt="">

                            <a href="" class="text-lg font-semibold hover:text-indigo-600 duration-500">Florent ATCHEAKOU</a>
                            <p class="text-slate-400">Rédacteur de contenu</p>
                        </div>
                        <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Auteur</h5>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->

    </section><!--end section-->
    <!-- End -->
    <Footer :email=true />
</div>
</template>

<script>
import blogimage from '../../assets/images/workshop/slide02.jpg'
import navbar from '@/components/workshop/navbar.vue';
import Footer from '@/components/workshop/footer-job.vue';
export default {
    components: {
        navbar,
        Footer,
    },
    computed: {

    },

    mounted() {
        this.id = this.$route.params.id; // Accessing id query parameter
        this.data = this.datas.find((item) => item.id === parseInt(this.id))

    },
    methods: {
        blgoDetail() {

        }
    },
    data() {
        return {
            id: '',
            data: '',
            blogimage,
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
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>