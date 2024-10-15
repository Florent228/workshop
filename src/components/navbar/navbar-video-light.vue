<template>
    <!-- Start Navbar -->
    <nav id="topnav" class="defaultscroll is-sticky">
        <div class="container relative">
            <!-- Logo container-->
            <router-link class="logo" to="/">
                <span class="inline-block dark:hidden">
                    <img src="../../assets/images/logo-dark.png" class="l-dark" height="24" alt="">
                    <img src="../../assets/images/logo-light.png" class="l-light" height="24" alt="">
                </span>
                <img src="../../assets/images/logo-light.png" height="24" class="hidden dark:inline-block" alt="">
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
                <li class="inline ps-1 mb-0">
                    <a href="https://1.envato.market/techwind-vue" target="_blank"
                        class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><i
                            data-feather="shopping-cart" class="size-4"></i></a>
                </li>
            </ul>
            <!--Login button End-->

            <div id="navigation" :class="toggle === false ? 'none' : 'block'">
                <!-- Navigation Menu-->
                <ul class="navigation-menu nav-light justify-end">
                    <li :class="activeMenu === '/index-video' ? 'active' : ''"><router-link to="/index-video"
                            class="sub-menu-item">Home</router-link></li>

                    <li :class="activeMenu === '/video-portfolio' ? 'active' : ''"><router-link to="/video-portfolio"
                            class="sub-menu-item">Videos</router-link></li>
                    <li><router-link to="" class="sub-menu-item">Studio</router-link></li>
                    <li :class="activeMenu === '/contact-two' ? 'active' : ''"><router-link to="/contact-two"
                            class="sub-menu-item">Contact Us</router-link></li>
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
    </nav><!--end header-->
    <!-- End Navbar -->
</template>

<script>
import  feather  from 'feather-icons';
export default {
    data() {
        return {
            toggle: false,
            id: 1,
            activeMenu: '',
            menu: true,
            menuOpen: ''
        }
    },
    mounted() {
        this.screenTop()
        feather.replace()
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.activeMenu = window.location.pathname;
        window.addEventListener("click", this.close);

    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handler: function () {
            this.toggle = !this.toggle;
        },
        submenu(item) {
            this.menu = !this.menu
            this.menuOpen = item
        },
        handleScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                navbar.classList.add("nav-sticky");
            } else {
                navbar.classList.remove("nav-sticky");
            }
        },
        screenTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },
}
</script>

<style lang="scss" scoped></style>