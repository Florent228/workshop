<template>
    <div>
        <navbar :loginButton=false bg-white :navLight="'nav-light'" />
        
        <!-- Start Hero -->
        <section class="relative table w-full py-36 bg-[url('../../assets/images/workshop/quizz.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-black opacity-75"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">POSE QUIZZ !</h3>
                </div><!--end grid-->
            </div><!--end container-->
            
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                   <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="/">FORMACONFIANCE</router-link></li>
                   <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Quizz</li>
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

        <audio ref="correctSound" src="../../assets/images/workshop/correct.mp3"></audio>
        <audio ref="wrongSound" src="../../assets/images/workshop/wrong.mp3"></audio>



        <div class="max-w-5xl mx-auto mt-10 p-4">
    <!-- Barre de progression -->
    <div class="w-full bg-gray-300 h-2 rounded-full mb-8" v-if="!quizFinished">
        <div class="bg-blue-500 h-2 rounded-full" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- Affichage des questions et réponses si le quiz n'est pas terminé -->
    <div v-if="!quizFinished">
        <!-- Ligne des cards (Avatar, Question, Score) avec espacement -->
        <div class="flex justify-between items-center space-x-4 mb-8">
            <!-- Avatar -->
            <div class="bg-white shadow-lg p-4 rounded-lg flex items-center justify-center w-1/4 h-24">
                <img src="../../assets/images/workshop/avatar.jpg" alt="Avatar" class="w-16 h-16 rounded-full" />
            </div>

            <!-- Question (grande card) -->
            <div class="bg-white shadow-lg p-6 rounded-lg w-2/4 h-32 flex items-center justify-center">
                <h2 class="text-2xl font-semibold text-center">{{ questions[currentQuestionIndex].text }}</h2>
            </div>

            <!-- Score -->
            <div class="bg-white shadow-lg p-4 rounded-lg flex items-center justify-center w-1/4 h-24">
                <p class="text-lg font-bold">Score : {{ score }}</p>
            </div>
        </div>

        <!-- Propositions de réponses (centrées sous la question) -->
        <div class="flex flex-col items-center">
            <div class="space-y-4 w-3/4">
                <button
                    v-for="(answer, index) in questions[currentQuestionIndex].answers"
                    :key="index"
                    @click="checkAnswer(answer)"
                    class="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg w-full text-left"
                >
                    {{ answer }}
                </button>
            </div>
        </div>
    </div>

    <!-- Affichage de la fin du quiz -->
    <div v-if="quizFinished" class="text-center">
        <h2 class="text-3xl font-bold mb-4">Félicitations, vous avez terminé le quiz !</h2>
        <p class="text-xl mb-6">Votre score final est de {{ score }} sur {{ questions.length }}.</p>
        <button @click="restartQuiz" class="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-lg">
            Rejouer
        </button>
    </div>
</div>



        <footers :email=true />
    </div>
</template>

<script>
    import navbar from '@/components/workshop/navbar.vue';
    import footers from '@/components/workshop/footer-job.vue';
        
    export default {
        components: {
            navbar,
            footers,
        },
        data() {
            return {
                score: 0,
                progress: 0,
                currentQuestionIndex: 0,
                showBadge: false,
                quizFinished: false, // Indicateur pour la fin du quiz
                badge: { name: '' },
                selectedAvatar: {
                    name: "Guerrier",
                },
                questions: [
                    {
                        text: "Quelle est la principale méthode pour sécuriser vos comptes en ligne ?",
                        answers: ["Utiliser des mots de passe forts", "Partager votre mot de passe avec un ami"],
                        correct: "Utiliser des mots de passe forts",
                    },
                    {
                        text: "Que faire si vous recevez un email suspect demandant des informations personnelles ?",
                        answers: ["Répondre immédiatement", "Le signaler comme spam"],
                        correct: "Le signaler comme spam",
                    },
                    {
                        text: "Comment pouvez-vous limiter la visibilité de votre profil sur les réseaux sociaux ?",
                        answers: ["Rendre votre profil public", "Configurer vos paramètres de confidentialité"],
                        correct: "Configurer vos paramètres de confidentialité",
                    },
                    {
                        text: "Pourquoi est-il important de gérer les applications tierces connectées à votre compte ?",
                        answers: ["Pour les utiliser plus facilement", "Pour contrôler quelles données elles peuvent accéder"],
                        correct: "Pour contrôler quelles données elles peuvent accéder",
                    },
                    {
                        text: "Que faire si vous êtes témoin de cyberharcèlement ?",
                        answers: ["Ignorer la situation", "Bloquer le harceleur et signaler l’incident"],
                        correct: "Bloquer le harceleur et signaler l’incident",
                    },
                    {
                        text: "Quelle est une conséquence possible du cyberharcèlement sur les victimes ?",
                        answers: ["Amélioration de la confiance en soi", "Isolement social et dépression"],
                        correct: "Isolement social et dépression",
                    },
                    {
                        text: "Quelle est la première étape pour vérifier si une information est vraie ?",
                        answers: ["Partager immédiatement", "Vérifier la source de l’information"],
                        correct: "Vérifier la source de l’information",
                    },
                    {
                        text: "Pourquoi est-il important de ne pas partager une information sans la vérifier ?",
                        answers: ["Pour éviter de propager des fake news", "Parce que cela augmente votre popularité"],
                        correct: "Pour éviter de propager des fake news",
                    },
                    {
                        text: "Quel est un signe d’une utilisation excessive des réseaux sociaux ?",
                        answers: ["Sensation de bien-être constant", "Anxiété liée aux likes et notifications"],
                        correct: "Anxiété liée aux likes et notifications",
                    },
                    {
                        text: "Quelle est une bonne pratique pour maintenir un équilibre numérique sain ?",
                        answers: ["Désactiver toutes les notifications", "Fixer des moments sans écran"],
                        correct: "Fixer des moments sans écran",
                    },
                    {
                        text: "Quel est l’un des principaux objectifs du contrôle parental sur les réseaux sociaux ?",
                        answers: ["Permettre à l’enfant de passer plus de temps en ligne", "Protéger l’enfant des contenus inappropriés"],
                        correct: "Protéger l’enfant des contenus inappropriés",
                    },
                    {
                        text: "Quelle est une méthode efficace pour éduquer les enfants à la sécurité en ligne ?",
                        answers: ["Ne pas parler de ce sujet", "Encourager des discussions ouvertes sur les dangers en ligne"],
                        correct: "Encourager des discussions ouvertes sur les dangers en ligne",
                    }
                ]
            };
        },
        methods: {
            checkAnswer(answer) {
                const currentQuestion = this.questions[this.currentQuestionIndex];
                
                if (answer === currentQuestion.correct) {
                    this.score++;
                }

                this.progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;

                if (this.currentQuestionIndex < this.questions.length - 1) {
                    this.currentQuestionIndex++;
                } else {
                    this.quizFinished = true;
                }

                if (this.currentQuestionIndex === Math.floor(this.questions.length / 2)) {
                    this.awardBadge("Quiz Master");
                }
            },
            restartQuiz() {
                this.score = 0;
                this.progress = 0;
                this.currentQuestionIndex = 0;
                this.quizFinished = false;
            },
            awardBadge(badgeName) {
                this.badge.name = badgeName;
                this.showBadge = true;
                setTimeout(() => {
                    this.showBadge = false;
                }, 3000);
            }
        }

    }
</script>


<style lang="scss" scoped>

</style>