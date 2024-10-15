<template>
    <!-- Start Navbar -->
    <nav id="topnav" class="defaultscroll is-sticky">
        <div class="container relative">
            <!-- Logo container-->
            <router-link class="logo ps-0" to="/">
                <img src="../../assets/images/logo-icon-30.png" class="inline-block sm:hidden" alt="">
                <div class="sm:block hidden">
                    <img src="../../assets/images/logo-dark.png" class="inline-block dark:hidden" alt="">
                    <img src="../../assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
                </div>
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
                <!-- <li class="sm:inline-block hidden mb-0"> -->
                <li class="inline-block mb-0">
                    <div class="form-icon relative">
                        <i class="uil uil-search text-lg absolute top-1/2 -translate-y-1/2 start-3"></i>
                        <input type="text"
                            class="form-input sm:w-44 w-28 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 bg-white"
                            name="s" id="searchItem" placeholder="Search...">
                    </div>
                </li>

                <li class="inline-block ps-1 mb-0">
                    <a id="connectWallet"
                        class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><i
                            class="uil uil-wallet"></i></a>
                </li>

                <li class="dropdown inline-block relative ps-1">
                    <button data-dropdown-toggle="dropdown" @click="toggleParagraph"
                        class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                        type="button">
                        <img src="../../assets/images/client/05.jpg" class="rounded-full" alt="">
                    </button>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                        :class="cartmenu === false ? 'hidden' : ''">
                        <div class="relative">
                            <div class="py-8 bg-gradient-to-tr from-indigo-600 to-red-600"></div>
                            <div class="absolute px-4 -bottom-7 start-0">
                                <div class="flex items-end">
                                    <img src="../../assets/images/client/05.jpg"
                                        class="rounded-full size-10 shadow dark:shadow-gray-700" alt="">

                                    <span class="font-semibold text-[15px] ms-1">Cristina Murfy</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 px-4">
                            <h5 class="font-semibold text-[15px]">Wallet:</h5>
                            <div class="flex items-center justify-between">
                                <span class="text-[13px] text-slate-400">qhut0...hfteh45</span>
                                <a href="" class="text-indigo-600"><i class="uil uil-copy"></i></a>
                            </div>
                        </div>

                        <div class="mt-4 px-4">
                            <h5 class="text-[15px]">Balance: <span
                                    class="text-indigo-600 font-semibold">0.00045ETH</span></h5>
                        </div>

                        <ul class="py-2 text-start">
                            <li>
                                <router-link to="/nft-creator-profile"
                                    class="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"><i
                                        class="uil uil-user text-[16px] align-middle me-1"></i> Profile</router-link>
                            </li>
                            <li>
                                <router-link to="/nft-creator-profile-edit"
                                    class="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"><i
                                        class="uil uil-setting text-[16px] align-middle me-1"></i>
                                    Settings</router-link>
                            </li>
                            <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                            <li>
                                <router-link to="/auth-login"
                                    class="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"><i
                                        class="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>
                                    Logout</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <!--Login button End-->

            <div id="navigation" :class="toggle === false ? 'none' : 'block'">
                <!-- Navigation Menu-->
                <ul class="navigation-menu justify-start">
                    <li :class="activeMenu === '/' ? 'active' : ''"><router-link to="/"
                        class="sub-menu-item">Accueil</router-link>
                    </li>


                    <li :class="activeMenu === '/contact-one' ? 'active' : ''"><router-link to="/contact-one"
                        class="sub-menu-item">Contact</router-link>
                    </li>
                    
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
    </nav><!--end header-->
    <!-- End Navbar -->
</template>

<script>
export default {
    data() {
        return {
            toggle: false,
            activeMenu: '',
            id: 1,
            menu: true,
            menuOpen: '',
            cartmenu: false
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.activeMenu = window.location.pathname;
        window.addEventListener("click", this.close);

    },
    mounted() {
        this.screenTop()
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        submenu(item) {
            this.menu = !this.menu
            this.menuOpen = item
        },
        handler() {
            this.toggle = !this.toggle;
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
        toggleParagraph() {
            this.cartmenu = !this.cartmenu
        },
        screenTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },


}
</script>

<style lang="scss" scoped></style>