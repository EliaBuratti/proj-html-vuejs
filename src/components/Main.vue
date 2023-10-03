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
            return new URL(`../assets/images/${img}`, import.meta.url).href;
        }
    },

}
</script>

<template>
    <div class="eb_container">
        <div class="row">

            <!-- our products -->
            <div class="col-12 eb_our-products d-flex justify-content-between">
                <div class="col-5">
                    <h6 class=" text-uppercase">our products</h6>
                    <h3>All our detectable pastries are backend fresh in our Kitchen very morining,
                        and are made with all-natural, all organic ingrdients.
                    </h3>

                    <button class="mt-4">Explore our products</button>
                </div>
                <div class="col-6 eb_carousel"> <!-- da rendere dinamico -->

                    <div class="eb_prev">&lsaquo;</div>
                    <div class="eb_next">&rsaquo;</div>

                    <div class="eb_pictures overflow-x-auto d-flex gap-2">
                        <div v-for="picture in image.products" class="col-6">
                            <img :src="getImagePath(picture.img)" :alt="getImagePath(picture.text)">
                        </div>
                    </div>
                </div>
            </div>


            <!-- baking -->
            <div class="col-12 eb_baking">

                <!-- title -->
                <div class="col-12 text-center">
                    <h6 class=" text-uppercase">corporate & weddings</h6>
                    <h3 class=" text-capitalize pt-3"> baking special moments</h3>
                </div>

                <!-- picture -->
                <div class="col-12 d-flex gap-2 py-5">
                    <div v-for="picture in image.baking" class="col-6">
                        <img :src="getImagePath(picture.img)" :alt="picture.text">
                    </div>
                </div>
            </div>

            <!-- find our products -->
            <div class="col-12 eb_find-products d-flex justify-content-between">
                <div class="col-3 text-center">
                    <h3>Find a freshly baked product perfect for you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus fugiat alias fuga
                        officiis.
                    </p>

                    <button class="mt-4">Explore our products</button>
                </div>

                <div class="col-8 eb_carousel"> <!-- da rendere dinamico -->

                    <div class="eb_prev">&lsaquo;</div>
                    <div class="eb_next">&rsaquo;</div>

                    <div class="eb_pictures overflow-x-auto d-flex gap-2">
                        <div v-for="picture in image.products" class="col-3">
                            <img :src="getImagePath(picture.img)" :alt="getImagePath(picture.text)">
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/Main.scss';
</style>