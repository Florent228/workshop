<template>
    <div class="container relative md:mt-24 mt-16">
      <div class="grid md:grid-cols-12 grid-cols-1 items-center">
        <div class="md:col-span-6">
          <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Suivez</h6>
          <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Les professionnels du domaine
          </h3>
        </div>
  
        <div class="md:col-span-6">
          <p class="text-slate-400 max-w-xl">Nos vidéos pour mieux comprendre les dangers des réseaux sociaux. Ressources adaptées pour jeunes, parents, et éducateurs.</p>
        </div>
      </div><!--end grid-->
  
      <!-- Section des vidéos YouTube -->
      <div class="grid grid-cols-1 relative mt-8">
        <div class="tiny-three-item-icon">
          <div v-for="item in datas" :key="item" class="tiny-slide">
            <div class="group relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-3">
              <div class="relative">
                <!-- Intégration de la vidéo YouTube -->
                <iframe
                  :src="'https://www.youtube.com/embed/' + item.youtubeId"
                  class="w-full h-64"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';
export default {
  data() {
    return {
      datas: [
        {
          youtubeId: 'D1CoNBmPP44', 
        },
        {
          youtubeId: 'bUfbgCxktiY',
        },
        {
          youtubeId: 'SAKyQjrDNQU',
        },
        {
          youtubeId: 'B9xXWkHMpkI', 
        },
        {
          youtubeId: 'vms2ShHOeKc',
        },
        {
          youtubeId: 'F_FvaN_z6Jk',
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    tns({
      container: '.tiny-three-item-icon',
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: 'bottom',
      controlsText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
      nav: false,
      speed: 400,
      gutter: 0,
      responsive: {
        992: {
          items: 3,
        },
        767: {
          items: 2,
        },
        320: {
          items: 1,
        },
      },
    });
  },
};
</script>

  