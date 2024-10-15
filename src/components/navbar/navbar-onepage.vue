<template>
    <!-- Start Navbar -->
    <nav id="topnav" class="defaultscroll is-sticky">
        <div class="container relative">
            <!-- Logo container-->
            <router-link class="logo" to="/">
                <img src="../../assets/images/logo-dark.png" class="inline-block dark:hidden" alt="">
                <img src="../../assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
            </router-link>

            <!-- End Logo container-->
            <div class="menu-extras" @click="handler">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle" id="isToggle" :class="toggle === false ? '' : 'open'">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>

            <!--Login button Start-->
            <ul class="buy-button list-none mb-0">
                <li class="inline mb-0">
                    <a href=""
                        class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i
                            data-feather="settings" class="size-4"></i></a>
                </li>

                <li class="inline ps-1 mb-0">
                    <a href="https://1.envato.market/techwind-vue" target="_blank"
                        class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><i
                            data-feather="shopping-cart" class="size-4"></i></a>
                </li>
            </ul>
            <!--Login button End-->

            <div id="navigation" class="navigation" :class="toggle === false ? 'none' : 'block'">
                <!-- Navigation Menu-->
                <ul  class="navigation-menu justify-end" id="navmenu-nav">
                    <li  class="has-submenu active home">
                        <a v-smooth-scroll href="#home" class="sub-menu-item">Home</a>
                    </li>
                    <li  class="has-submenu features">
                        <a v-smooth-scroll href="#features" class="sub-menu-item">Feature</a>
                    </li>
                    <li  class="has-submenu pricing">
                        <a v-smooth-scroll href="#pricing" class="sub-menu-item">Price</a>
                    </li>
                    <li  class="has-submenu team">
                        <a v-smooth-scroll href="#team" class="sub-menu-item">Team</a>
                    </li>
                    <li  class="has-submenu review">
                        <a v-smooth-scroll href="#review" class="sub-menu-item">Review</a>
                    </li>
                    <li  class="has-submenu blog">
                        <a v-smooth-scroll href="#blog" class="sub-menu-item">Blog</a>
                    </li>
                    <li  class="has-submenu" onclick="ContactUs.showModal()">
                        <a  href="javascript:void(0)" class="sub-menu-item">Contact</a>
                    </li>
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
    </nav><!--end header-->
    <!-- End Navbar -->

    <!-- Start Modal -->
    <dialog id="ContactUs"
        class="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <div class="relative h-auto md:w-[480px] w-300px">
            <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                <h3 class="font-bold text-lg">Contact Us</h3>
                <form method="dialog">
                    <button
                        class="size-6 flex justify-center items-center shadow dark:shadow-gray-800 rounded-md btn-ghost"><i
                            data-feather="x" class="size-4"></i></button>
                </form>
            </div>
            <div class="p-6 text-center">
                <form>
                    <div class="grid lg:grid-cols-12 lg:gap-6">
                        <div class="lg:col-span-6 mb-5">
                            <div class="text-start">
                                <label for="name" class="font-semibold">Your Name:</label>
                                <div class="form-icon relative mt-2">
                                    <i data-feather="user" class="size-4 absolute top-3 start-4"></i>
                                    <input name="name" id="name" type="text"
                                        class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="Name :">
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-6 mb-5">
                            <div class="text-start">
                                <label for="email" class="font-semibold">Your Email:</label>
                                <div class="form-icon relative mt-2">
                                    <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                    <input name="email" id="email" type="email"
                                        class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="Email :">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1">
                        <div class="mb-5">
                            <div class="text-start">
                                <label for="subject" class="font-semibold">Your Question:</label>
                                <div class="form-icon relative mt-2">
                                    <i data-feather="book" class="size-4 absolute top-3 start-4"></i>
                                    <input name="subject" id="subject"
                                        class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="Subject :">
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <div class="text-start">
                                <label for="comments" class="font-semibold">Your Comment:</label>
                                <div class="form-icon relative mt-2">
                                    <i data-feather="message-circle" class="size-4 absolute top-3 start-4"></i>
                                    <textarea name="comments" id="comments"
                                        class="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                        placeholder="Message :"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" id="submit" name="send"
                        class="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send
                        Message</button>
                </form>
            </div>
        </div>
    </dialog>
    <!-- End Modal -->
</template>

<script>
import feather from 'feather-icons';

export default {
    data() {
        return {
            toggle: false,
            scroll: true,
            sections: document.querySelectorAll("section"),
            navLi: document.querySelectorAll("nav .container .navigation ul li"),
            current: "",
            sectionTop: null,

        }
    },
    mounted() {
        feather.replace()
        this.screenTop()
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.onscroll);
    },

    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.onscroll);
    },

    methods: {
        handler: function () {
            this.toggle = !this?.toggle;
        },
        handleScroll() {
            const topnav = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                topnav.classList.add("nav-sticky");
            } else {
                topnav.classList.remove("nav-sticky");
            }
        },
        onscroll() {
            document.querySelectorAll("section").forEach((section) => {
                this.sectionTop = section.offsetTop;
                if (pageYOffset >= this.sectionTop - 60) {
                    this.current = section.getAttribute("id");
                }
            });
            document.querySelectorAll("nav .container .navigation ul li").forEach((li) => {
                if (li.classList.contains(this.current)) {
                    li.classList.add("active");
                } else {
                    li.classList.remove("active");
                }
            });
        },
        screenTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
}
</script>

<style lang="scss" scoped></style>