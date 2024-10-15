<template>
    <div :class="bgcolor">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center" data-wow-delay=".1s" :class="wowAnimate">
                <h6 v-if="Testimonial" class="text-indigo-600 text-base mb-2">Témoignage</h6>
                <h4 v-if="Testimonial2" class="font-cursive-alex text-3xl">Témoignage</h4>
                <h3 v-if="customer" class="mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                    Ce que nos clients <br> disent de nous</h3>
                <h3 v-if="users" class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                    Ce que disent nos utilisateurs</h3>
                <h3 v-if="happy" class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                    Clients satisfaits</h3>
                <h3 v-if="gym" class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Fait
                    confiance <br> par nos clients</h3>
                <h3 v-if="hospital" class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Les patients disent</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Commencez à travailler avec Tailwind CSS qui peut fournir tout ce dont vous avez besoin pour générer de la visibilité, attirer du trafic, et établir des connexions.</p>
            </div><!--end grid-->
            <div class="grid relative grid-cols-1 mt-8">
                <div class="tiny-three-item">
                    <div v-for="client in clients" :key="client" class="tiny-slide text-center" data-wow-delay=".3s"
                        :class="wowAnimate">
                        <div class="cursor-e-resize">
                            <div
                                class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                                <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                                <p class="text-slate-400">{{ client.desc }}</p>
                                <ul class="list-none mb-0 text-amber-400 mt-3">
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                </ul>
                            </div>

                            <div class="text-center mt-5">
                                <img :src="client.image" class="size-14 rounded-full shadow-md mx-auto" alt="">
                                <h6 class="mt-2 font-semibold">{{ client.name }}</h6>
                                <span class="text-slate-400 text-sm">{{ client.position }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </div>
</template>


<script>
import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
export default {
    props: {
        wowAnimate: {
            type: String,
            required: true
        },
        Testimonial: {
            type: Boolean,
            required: true
        },
        bgcolor: {
            type: String,
            required: true
        },
        customer: {
            type: Boolean,
            required: true
        },
        happy: {
            type: Boolean,
            required: true
        },
        users: {
            type: Boolean,
            required: true
        },
        trusted: {
            type: Boolean,
            required: true
        },
        gym: {
            type: Boolean,
            required: true
        },
        Testimonial2: {
            type: Boolean,
            required: true
        },
        hospital: {
            type: Boolean,
            required: true
        },
    },
    name: 'partnerS',
    data() {
        return {
            clients: [
                {
                    image: require('../assets/images/client/01.jpg'),
                    desc: '" Grâce à cette plateforme, j\'ai pu trouver un prestataire qualifié en un rien de temps. Le service était impeccable et rapide. "',
                    name: 'Thomas Israel',
                    position: 'Client satisfait'
                },
                {
                    image: require('../assets/images/client/02.jpg'),
                    desc: '" J\'ai été impressionné par le professionnalisme des prestataires proposés. Je recommande vivement cette plateforme pour ceux qui cherchent des experts fiables. "',
                    name: 'Carl Oliver',
                    position: 'Client satisfait'
                },
                {
                    image: require('../assets/images/client/03.jpg'),
                    desc: '" Un service client à l\'écoute et des prestataires compétents. J\'ai enfin trouvé la solution idéale pour mes besoins professionnels. "',
                    name: 'Barbara McIntosh',
                    position: 'Client satisfait'
                },
                {
                    image: require('../assets/images/client/04.jpg'),
                    desc: '" Trouver un prestataire de confiance n\'a jamais été aussi simple. Je suis ravi de la qualité du service fourni. "',
                    name: 'Jill Webb',
                    position: 'Client satisfait'
                },
                {
                    image: require('../assets/images/client/05.jpg'),
                    desc: '" Les prestataires sont non seulement qualifiés mais aussi très professionnels. Mon projet a été réalisé rapidement et avec soin. "',
                    name: 'Barbara McIntosh',
                    position: 'Client satisfait'
                },
                {
                    image: require('../assets/images/client/06.jpg'),
                    desc: '" Un service exceptionnel et des experts compétents. Je recommande vivement pour toute personne ayant besoin de prestataires qualifiés. "',
                    name: 'Jill Webb',
                    position: 'Client satisfait'
                }
            ]

        }
    },
    components: {

    },
    setup() {
        onMounted(() => {
            tns({
                container: '.tiny-three-item',
                controls: false,
                mouseDrag: true,
                loop: true,
                rewind: true,
                autoplay: true,
                autoplayButtonOutput: false,
                autoplayTimeout: 3000,
                navPosition: "bottom",
                speed: 400,
                gutter: 12,
                responsive: {
                    992: {
                        items: 3
                    },

                    767: {
                        items: 2
                    },

                    320: {
                        items: 1
                    },
                },
            });
        });
    },
}
</script>

<style lang="scss" scoped></style>