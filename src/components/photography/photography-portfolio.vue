<template>

<div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Portfolio / Photography</h3>

                    <p class="text-slate-400 max-w-2xl mx-auto">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                </div><!--end grid-->

                <div id="grid" class="lg:columns-4 md:columns-3 sm:columns-2 columns-1 gap-2 mx-3">
                    <div v-for="(item, index) in images" :key="index" class="picture-item mb-2">
                        <div class="group relative block overflow-hidden rounded-md duration-500">
                            <img :src="item" class="" alt="work-image">
                            <div class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a @click="showMultiple(index)" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox cursor-pointer"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->

                <div class="grid grid-cols-1 mt-8">
                    <div class="text-center">
                        <router-link to="/photography-portfolio" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out">See More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div><!--end container-->
            <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
        </template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import image from '../../assets/images/photography/p1.jpg'
import image2 from '../../assets/images/photography/p2.jpg'
import image3 from '../../assets/images/photography/p3.jpg'
import image4 from '../../assets/images/photography/p4.jpg'
import image5 from '../../assets/images/photography/p5.jpg'
import image7 from '../../assets/images/photography/p7.jpg'
import image11 from '../../assets/images/photography/p11.jpg'
import image10 from '../../assets/images/photography/p10.jpg'
export default {
    data() {
        return {
            images: [
                image,
                image5,
                image2,
                image10,
                image3,
                image11,
                image4,
                image7,
            ],
            visibleRef: false,
            imgsRef: [],
            indexRef: 0,
        }
    },
    components: {
        VueEasyLightbox,

    },
    methods: {
        showMultiple(index) {
            this.indexRef = index,
                this.imgsRef = this.images,
                this.visibleRef = true

        },
        onHide() {
            this.visibleRef = false
        },
    }
}
</script>

<style lang="scss" scoped></style>