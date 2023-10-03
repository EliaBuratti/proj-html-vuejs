<script>
import image from '../dataJs/image.js';
export default {
    name: 'Main',

    data() {
        return {
            image,
        }
    },

    methods: {
        getImagePath(img) {
            return new URL(`../assets/imgages/${img}`, import.meta.url).href;
        }
    },

}
</script>

<template>
    <div class="eb_container">
        <div class="row">

            <!-- our products -->
            <div class="col-12 eb_our-products d-flex justify-content-between">
                <div class="col-4">
                    <h6 class=" text-uppercase">our products</h6>
                    <h3 class=" text-capitalize">all our detectable pastries are backend fresh in our Kitchen very morining,
                        and are made with all-natural, all organic ingrdients.
                    </h3>

                    <button class="mt-4">Explore our products</button>

                </div>
                <div class="col-7 eb_carousel d-flex gap-2"> <!-- da rendere dinamico -->

                    <div class="eb_prev">&lsaquo;</div>
                    <div class="eb_next">&rsaquo;</div>

                    <div class="col-6 ">
                        <img src="../assets/images/choco-chip-cookies.jpg" alt="">
                    </div>
                    <div class="col-6 ">
                        <img src="../assets/images/choco-chip-cookies.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/Main.scss';
</style>