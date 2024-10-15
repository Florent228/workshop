<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center">
            <div class="lg:col-span-5 md:col-span-6 md:order-1 order-2">
                <div
                    class="relative overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-5 after:start-0 after:end-0 after:mx-auto after:-z-0 after:rounded-3xl after:animate-[spin_10s_linear_infinite]">
                    <img src="../assets/images/hero2.png" class="relative z-1" alt="">
                </div>
            </div>

            <div class="lg:col-span-7 md:col-span-6 md:order-2 order-1">
                <div class="tiny-single-item">
                    <div v-for="item in datas" :key="item" class="tiny-slide text-center">
                        <img :src="item.image" class="h-6 mx-auto" alt="">
                        <p class="text-slate-400 mt-6">{{ item.desc }}</p>
                        <h6 class="text-indigo-600 font-semibold mt-3">{{ item.name }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div><!--end container-->
</template>

<script>
import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
export default {
    data() {
        return {
            datas: [
                {
                    image: require('../assets/images/client/amazon.svg'),
                    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
                    name: '- Thomas Israel'
                },
                {
                    image: require('../assets/images/client/google.svg'),
                    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
                    name: '- Carl Oliver'
                },
                {
                    image: require('../assets/images/client/lenovo.svg'),
                    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
                    name: '- Barbara McIntosh'
                },
                {
                    image: require('../assets/images/client/paypal.svg'),
                    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
                    name: '- Jill Webb'
                },
                {
                    image: require('../assets/images/client/shopify.svg'),
                    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
                    name: '- Dean Tolle'
                },
                {
                    image: require('../assets/images/client/spotify.svg'),
                    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
                    name: '- Christa Smith'
                },
            ]
        }
    },
    setup() {
        onMounted(() => {
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
        });
    },
}
</script>

<style lang="scss" scoped></style>