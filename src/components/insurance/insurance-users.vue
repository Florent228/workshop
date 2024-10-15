<template>
    <!-- Start -->
    <section
        class="py-20 w-full table relative bg-[url('../../assets/images/insurance/bg.jpg')] bg-no-repeat bg-cover jarallax"
        data-jarallax data-speed="0.5">
        <div class="container relative">
            <div class="flex">
                <div
                    class="lg:w-1/3 md:1/2 sm:w-2/3 px-6 py-8 rounded-md shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900">
                    <div class="tiny-single-item">
                        <div v-for="client in clients" :key="client" class="tiny-slide">
                            <div class="text-center">
                                <p class="text-lg text-slate-400 italic"> {{client.desc}}</p>

                                <div class="text-center mt-5">
                                    <ul class="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                    </ul>

                                    <img :src="client.image"
                                        class="size-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="">
                                    <h6 class="mt-2 font-semibold">{{client.name}}</h6>
                                    <span class="text-slate-400 text-sm">{{client.position}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';
import { jarallax} from "jarallax";
import 'jarallax/dist/jarallax.min.css';
export default {
    data() {
        return {
            clients: [
                {
                    image: require('../../assets/images/client/01.jpg'),
                    desc: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
                    name: 'Thomas Israel',
                    position: 'Manager'
                },
                {
                    image: require('../../assets/images/client/02.jpg'),
                    desc: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
                    name: 'Carl Oliver',
                    position: 'Manager'
                },
                {
                    image: require('../../assets/images/client/03.jpg'),
                    desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
                    name: 'Barbara McIntosh',
                    position: 'Manager'
                },
                {
                    image: require('../../assets/images/client/04.jpg'),
                    desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
                    name: 'Jill Webb',
                    position: 'Manager'
                },
                {
                    image: require('../../assets/images/client/05.jpg'),
                    desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
                    name: 'Barbara McIntosh',
                    position: 'Manager'
                },
                {
                    image: require('../../assets/images/client/06.jpg'),
                    desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
                    name: 'Jill Webb',
                    position: 'Manager'
                }
            ]
        }
    },         
    components: {

    },
    mounted() {
        tns({
            container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
    });
    jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.5,
        });
    },

}

</script>

<style lang="scss" scoped></style>