<template>
    <!-- Start Navbar -->
    <nav id="topnav" class="defaultscroll is-sticky" :class="issticky">
        <div class="container relative">
            <!-- Logo container-->
            <router-link v-if="lightlogo" to="/" class="logo">
                <img src="../../assets/images/workshop/logo-dark.png" class="inline-block dark:hidden h-12 w-auto" >
                <img src="../../assets/images/workshop/logo-light.png" class="hidden dark:inline-block  h-12 w-auto">
            </router-link>
            <router-link v-else class="logo" to="/">
                <span class="inline-block dark:hidden">
                    <img src="../../assets/images/workshop/logo-dark.png" class="l-dark h-12 w-auto" alt="">
                    <img src="../../assets/images/workshop/logo-light.png" class="l-light h-12 w-auto"  alt="">
                </span>
                <img src="../../assets/images/workshop/logo-light.png"  class="hidden dark:inline-block h-12 w-auto" alt="">
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

            
            <div id="navigation" :class="toggle === false ? 'none' : 'block'">
                <!-- Navigation Menu-->
                <ul class="navigation-menu " :class="navLight">
                        <li :class="activeMenu === '/' ? 'active' : ''"><router-link to="/" >
                                Accueil</router-link>
                        </li>

                        <li :class="activeMenu === '/quiz' ? 'active' : ''"><router-link to="/quiz" class="sub-menu-item">
                                Tester vos connaissances</router-link>
                        </li>

                        <li :class="activeMenu === '/contact-one' ? 'active' : ''"><router-link to="/contact-one" class="sub-menu-item">
                                Contact</router-link>
                        </li>

                </ul><!--end navigation menu-->

            </div><!--end navigation-->
        </div><!--end container-->
    </nav><!--end header-->
    <!-- End Navbar -->
</template>

<script>
import feather from 'feather-icons'
export default {
    props: {
        issticky: {
            type: String,
            required: true
        },
        lightlogo: {
            type: Boolean,
            required: true
        },
        navLight: {
            type: String,
            required: true
        },
        loginButton:{
            type: Boolean,
            required: true
        }
    },
    name: 'HelloWorld',
    data() {
        return {
            toggle: false,
            id: 1,
            activeMenu: '',
            menu: true,
            menuOpen: '',
            dropdownOpen4: false,
        }
    },
    components: {

    },
    mounted() {
        feather.replace()
        this.screenTop()
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
        handleClickOutside44(event) {
            if (!this.$refs.dropdownToggle.contains(event.target)) {
                this.dropdownOpen4 = false;
            }
        },
        screenTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },
}
</script>


<style scoped></style>
