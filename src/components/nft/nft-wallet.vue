<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    <!-- Start Wallet -->
                    <div v-for="wallet in wallets" :key="wallet" class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                        <div class="py-10 bg-gradient-to-r to-orange-600/70 from-indigo-600/70"></div>
                        <div class="p-6 pt-0 -mt-10 text-center">
                            <img :src="wallet.image" class="size-20 p-4 rounded-full bg-white dark:bg-slate-900 shadow-lg dark:shadow-gray-800 mx-auto" alt="">

                            <div class="mt-4">
                                <h5 class="text-xl font-semibold mb-3">{{wallet.name}}</h5>
                                <p class="text-slate-400">{{ wallet.desc }} <a href="" class="text-indigo-600 font-semibold">here <i class="uil uil-arrow-right"></i></a></p>
                            </div>
                        </div>
                    </div>
                    <!-- End Wallet -->
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end end section-->
        <!-- End -->

</template>

<script>
    export default {
        data() {
            return {
                wallets:[
                    {
                        image: require('../../assets/images/nft/wallet/MetaMask_Fox.svg'),
                        name: 'MetaMask',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/aave.svg'),
                        name: 'Aave',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/Airswap.svg'),
                        name: 'Airswap',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/Compound.svg'),
                        name: 'Compound',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/ddexsvg.svg'),
                        name: 'DDEX',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/defi-saver.svg'),
                        name: 'Defi Saver',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/dYdX.svg'),
                        name: 'DYDX',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/idex.svg'),
                        name: 'IDEX',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/kyber.svg'),
                        name: 'Kyber',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/maker.svg'),
                        name: 'Maker',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/nuo.svg'),
                        name: 'NUO',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/PoolTogether.svg'),
                        name: 'PoolTogether',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/sablier.svg'),
                        name: 'Sablier',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/set.svg'),
                        name: 'Set',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/uniswap.svg'),
                        name: 'Uniswap',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                    {
                        image: require('../../assets/images/nft/wallet/zerion.svg'),
                        name: 'Zerion',
                        desc: 'Learn about how to get the wallet and much more clicking'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>