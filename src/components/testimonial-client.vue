<template>
    <!-- Start Section-->
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div id="grid" class="lg:columns-3 md:columns-2 columns-1 gap-8 mx-3">
                <div v-for="item in datas" :key="item" class="picture-item mb-8">
                    <div class="rounded-lg shadow dark:shadow-gray-800 p-6">
                        <div class="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                            <img :src="item.image" class="size-16 rounded-full shadow dark:shadow-gray-800" alt="">

                            <div class="ps-4">
                                <a href="" class="text-lg hover:text-indigo-600 duration-500 ease-in-out">{{ item.name
                                    }}</a>
                                <p class="text-slate-400">{{ item.position }}</p>
                            </div>
                        </div>

                        <div class="mt-6">
                            <p class="text-slate-400">{{ item.desc }}</p>
                            <ul class="list-none mb-0 text-amber-400 mt-2">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div><!--end container-->
        <div class="container relative md:mt-24 mt-16">
            <div class="grid grid-cols-1 text-center">
                <h6 class="text-indigo-600 text-sm font-bold mb-2">Available for freelance projects</h6>
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Do you have digital
                    project? <br> Let's talk.</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you
                    need to generate awareness, drive traffic, connect.</p>

                <div class="mt-6">
                    <router-link to="/contact-one"
                        class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"><i
                            class="uil uil-phone"></i> Contact us</router-link>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section>
</template>

<script>
export default {
    data() {
        return {
            datas: [
                {
                    image: require('../assets/images/client/01.jpg'),
                    name: 'Thomas Israel',
                    position: 'Student',
                    desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!"
                },
                {
                    image: require('../assets/images/client/04.jpg'),
                    name: 'Jill Webb',
                    position: 'Student',
                    desc: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
                },
                {
                    image: require('../assets/images/client/05.jpg'),
                    name: 'Barbara McIntosh',
                    position: 'Student',
                    desc: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
                },
                {
                    image: require('../assets/images/client/03.jpg'),
                    name: 'Barbara McIntosh',
                    position: 'Student',
                    desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though."
                },
                {
                    image: require('../assets/images/client/01.jpg'),
                    name: 'Thomas Israel',
                    position: 'Student',
                    desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!"
                },
                {
                    image: require('../assets/images/client/05.jpg'),
                    name: 'Barbara McIntosh',
                    position: 'Student',
                    desc: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
                },
                {
                    image: require('../assets/images/client/03.jpg'),
                    name: 'Barbara McIntosh',
                    position: 'Student',
                    desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though."
                },
                {
                    image: require('../assets/images/client/04.jpg'),
                    name: 'Jill Webb',
                    position: 'Student',
                    desc: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
                },
                {
                    image: require('../assets/images/client/05.jpg'),
                    name: 'Barbara McIntosh',
                    position: 'Student',
                    desc: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
                },
                {
                    image: require('../assets/images/client/02.jpg'),
                    name: 'Carl Oliver',
                    position: 'Student',
                    desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined."
                },
                {
                    image: require('../assets/images/client/06.jpg'),
                    name: 'Janisha Doll',
                    position: 'Student',
                    desc: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
                },
                {
                    image: require('../assets/images/client/02.jpg'),
                    name: 'Carl Oliver',
                    position: 'Student',
                    desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined."
                },

                {
                    image: require('../assets/images/client/06.jpg'),
                    name: 'Janisha Doll',
                    position: 'Student',
                    desc: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
                },
                {
                    image: require('../assets/images/client/02.jpg'),
                    name: 'Thomas Israel',
                    position: 'Student',
                    desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!"
                },
                {
                    image: require('../assets/images/client/02.jpg'),
                    name: 'Thomas Israel',
                    position: 'Student',
                    desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!"
                },

            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>