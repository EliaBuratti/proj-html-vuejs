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
                        <div v-for="picture in image.products" class="col-3 h-100 text-center">
                            <img :src="getImagePath(picture.img)" :alt="getImagePath(picture.text)">
                            <h4>{{ picture.text }}</h4>
                            <p>{{ picture.price }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- bakery process -->

            <!-- first -->
            <div class="col-12 eb_bakery-process d-flex" id="one">
                <div class="col-12 position-relative">

                    <!-- picture -->
                    <div class="eb_picture">
                        <img :src="getImagePath('bakery-process-1.jpg')" alt="baking">
                    </div>

                    <!-- process and description -->
                    <div class="eb_description position-absolute w-100 h-100 d-flex flex-column justify-content-between">

                        <div class="eb_head-card d-flex justify-content-between align-items-center">
                            <h2>Tell us what you have in mind</h2>

                            <div class=" ms-auto eb_counter">01</div>

                        </div>

                        <div class="eb_paragraph float-end col-4 ms-auto">
                            <h6 class=" text-uppercase">manual ingredients selection</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias, officiis nostrum
                                autem aspernatur tempore odit, delectus et nemo ipsam eos eius obcaecati sit neque,
                                perferendis veritatis enim est rerum.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <!-- second -->
            <div class="col-12 eb_bakery-process d-flex" id="two">
                <div class="col-6 position-relative">

                    <!-- picture -->
                    <div class="eb_picture">
                        <img :src="getImagePath('bakery-process-2.jpg')" alt="baking">
                    </div>

                    <!-- process and description -->
                    <div class="eb_description position-absolute w-100 h-100 d-flex flex-column justify-content-between">

                        <div class="eb_head-card d-flex justify-content-between align-items-center">
                            <h2>We Start Baking</h2>

                            <div class=" ms-auto eb_counter">02</div>

                        </div>

                        <div class="eb_paragraph float-end col-8">
                            <h6 class=" text-uppercase">sweet & delicious</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias, officiis nostrum
                                autem aspernatur tempore odit, delectus et nemo ipsam eos eius obcaecati sit neque,
                                perferendis veritatis enim est rerum.
                            </p>


                        </div>

                    </div>
                </div>

                <!-- citazione -->
                <div class="col-6 ps-5">

                    <div class="eb_citation h-100">
                        <h6 class=" text-uppercase">dont just take our word for it</h6>

                        <h3 class="py-4">
                            "Finally found an alternative to the mass produced products. Something that incorporates real
                            organic
                            ingradients, nutrient dense wellness while promoting sustainability and activity"
                        </h3>
                        <p class=" text-capitalize">rachel cooper, founder</p>
                    </div>


                </div>
            </div>

            <!-- third -->
            <div class="col-12 eb_bakery-process d-flex" id="three">
                <div class="col-12 position-relative">

                    <!-- picture -->
                    <div class="eb_picture">
                        <img :src="getImagePath('bakery-process-3.jpg')" alt="baking">
                    </div>

                    <!-- process and description -->
                    <div class="eb_description position-absolute w-100 h-100 d-flex flex-column justify-content-between">

                        <div class="eb_head-card d-flex justify-content-between align-items-center">
                            <h2>Delivered to your home</h2>

                            <div class=" ms-auto eb_counter">03</div>

                        </div>

                        <div class="eb_paragraph float-end col-4 ">
                            <h6 class=" text-uppercase">based to order & gift wrapped</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias, officiis nostrum
                                autem aspernatur tempore odit, delectus et nemo ipsam eos eius obcaecati sit neque,
                                perferendis veritatis enim est rerum.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <!-- visit our baking -->
            <div class="col-12 eb_baking eb_store">

                <!-- title -->
                <div class="col-12 text-center">
                    <h6 class=" text-uppercase">location</h6>
                    <h3 class=" text-capitalize pt-3">Visit our Bakeries</h3>
                </div>

                <!-- picture -->
                <div class="col-12 d-flex py-5">
                    <div v-for="(picture, i) in image.bakery_store" class="col-6">
                        <img :src="getImagePath(picture.img)" :alt="picture.text">

                        <div class="eb_info-store text-center d-flex align-items-center flex-wrap pt-5"
                            :class="(i + 1) % 2 === 1 ? 'eb_grey' : 'eb_yellow'">
                            <h3 class="col-12 pb-4">{{ picture.title }}</h3>
                            <span class="col-4 text-uppercase">
                                <h5>call us</h5>
                                <p>{{ picture.contact }}</p>
                            </span>
                            <span class="col-4 text-uppercase">
                                <h5>open all week</h5>
                                <p>{{ picture.working_time }}</p>
                            </span>
                            <span class="col-4">
                                <a :href="picture.location" target="_blank">
                                    <button>Wiew Map</button>
                                </a>
                            </span>

                        </div>
                    </div>
                </div>
            </div>


            <!-- follow on social -->


        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/Main.scss';
</style>