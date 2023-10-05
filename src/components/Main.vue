<script>
import image from '../dataJs/image.js';
import state from '../dataJs/state';
export default {
    name: 'Main',

    data() {
        return {
            image,
            state,
        }
    },

}
</script>

<template>
    <div class="eb_container">

        <div class="row">

            <!-- ********* OUR PRODUCTS ********* -->
            <div class="col-12 eb_our-products d-flex justify-content-between" id="eb_our-products">

                <div class="col-5">
                    <h6 class=" text-uppercase">our products</h6>
                    <h3>All our detectable pastries are backend fresh in our Kitchen very morining,
                        and are made with all-natural, all organic ingrdients.
                    </h3>

                    <button class="mt-4 eb_btn-full">Explore our products</button>
                </div>
                <div class="col-6 eb_carousel">

                    <div class="eb_prev" @click="state.prev('eb_our-products')">&lsaquo;</div>
                    <div class="eb_next" @click="state.next('eb_our-products')">&rsaquo;</div>

                    <div class="eb_pictures overflow-hidden d-flex gap-2">
                        <div v-for="picture in image.products" class="col-6 position-relative eb_product">
                            <div class="eb_overlay d-flex justify-content-center align-items-center">
                                <div class="eb_more-info">
                                    <h4>{{ picture.text }}</h4>
                                    <p>{{ picture.categories }}</p>
                                    <p>{{ picture.price }}</p>
                                </div>
                            </div>
                            <img :src="state.getImagePath(picture.img)" :alt="state.getImagePath(picture.text)">
                        </div>
                    </div>
                </div>
            </div>


            <!-- ********* BAKING ********* -->
            <div class="col-12 eb_baking overflow-x-auto" id="eb_baking">

                <!-- title -->
                <div class="col-12 text-center">
                    <h6 class=" text-uppercase">corporate & weddings</h6>
                    <h3 class=" text-capitalize pt-3"> baking special moments</h3>
                </div>

                <!-- picture -->
                <div class="col-12 d-flex gap-2 py-5 eb_carousel">
                    <div v-for="picture in image.baking" class="col-6 position-relative eb_product">

                        <div class="eb_overlay d-flex justify-content-center align-items-center">

                            <img :src="state.getImagePath(picture.secondImg)" :alt="picture.text">

                            <div class="position-absolute text-center">
                                <span class="">
                                    <h6 class=" text-uppercase text-white">{{ picture.event }}</h6>
                                    <h3 class=" text-capitalize pt-3 text-white">{{ picture.eventName }}</h3>

                                    <button class="mt-4 eb_btn-full">
                                        Explore More
                                    </button>
                                </span>
                            </div>

                        </div>

                        <img :src="state.getImagePath(picture.img)" :alt="picture.text">

                    </div>
                </div>

            </div>

            <!-- ********* FIND OUR PRODUCTS ********* -->
            <div class="col-12 eb_find-products d-flex justify-content-between" id="eb_find-products">
                <div class="col-3 text-center">
                    <h3>Find a freshly baked product perfect for you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus fugiat alias fuga
                        officiis.
                    </p>

                    <button class="mt-4 eb_btn-full">Explore our products</button>
                </div>

                <div class="col-8 eb_carousel">

                    <div class="eb_prev" @click="state.prev('eb_find-products')">&lsaquo;</div>
                    <div class="eb_next" @click="state.next('eb_find-products')">&rsaquo;</div>

                    <div class="eb_pictures overflow-hidden d-flex flex-wrap">

                        <div class="col-12 d-flex gap-2">
                            <div v-for="picture in image.products"
                                class="col-3 h-100 text-center eb_product position-relative">
                                <div class="eb_overlay d-flex justify-content-center align-items-center">
                                    <div class="eb_more-info">
                                        <a :href="picture.link" class=" text-decoration-none">
                                            <p class=" text-uppercase">select options / quick view</p>
                                        </a>

                                    </div>
                                </div>
                                <img :src="state.getImagePath(picture.img)" :alt="state.getImagePath(picture.text)">

                            </div>
                        </div>

                        <div class="col-12 d-flex gap-2">
                            <div v-for="picture in image.products" class="eb_card-text col-3 h-100 text-center">
                                <h4>{{ picture.text }}</h4>
                                <p>{{ picture.price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <!-- ********* BAKERY PROCESS ********* -->

            <!-- first -->
            <div class="col-12 eb_bakery-process d-flex" id="one">
                <div class="col-12 position-relative">

                    <!-- picture -->
                    <div class="eb_picture">
                        <img :src="state.getImagePath('bakery-process-1.jpg')" alt="baking">
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
                        <img :src="state.getImagePath('bakery-process-2.jpg')" alt="baking">
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
                        <img :src="state.getImagePath('bakery-process-3.jpg')" alt="baking">
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

            <!-- ********* VISIT OUR BAKING ********* -->
            <div class="col-12 eb_baking eb_store overflow-x-auto" id="eb_store">

                <!-- title -->
                <div class="col-12 text-center">
                    <h6 class=" text-uppercase">location</h6>
                    <h3 class=" text-capitalize pt-3">Visit our Bakeries</h3>
                </div>

                <!-- picture -->
                <div class="col-12 d-flex text-center py-5">
                    <div v-for="(picture, i) in image.bakery_store" class="col-6 mx-auto">
                        <img :src="state.getImagePath(picture.img)" :alt="picture.text">

                        <div class="eb_info-store text-center d-flex align-items-center flex-wrap pt-5"
                            :class="(i + 1) % 2 === 1 ? 'eb_azure' : 'eb_yellow'">
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
                                    <button class="eb_btn-empty">Wiew Map</button>
                                </a>
                            </span>

                        </div>
                    </div>
                </div>
            </div>


            <!-- ********* FOLLOW ON SOCIAL ********* -->
            <div class="col-12-d-flex eb_follow">

                <div class="row h-100">
                    <div class="col-3">
                        <img :src="state.getImagePath('social-1.jpg')" alt="ladies">
                    </div>
                    <div class="col-6 ">
                        <div class=" h-100 eb_card-social my-0 d-flex justify-content-center align-items-center">
                            <span class="text-center">
                                <h6 class=" text-uppercase">made for sharing</h6>
                                <h3 class=" text-capitalize pt-3">Let's stay in touch</h3>

                                <button class="mt-4 eb_btn-empty">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                    Follow us
                                </button>
                            </span>
                        </div>
                    </div>

                    <div class="col-3">
                        <img :src="state.getImagePath('social-2.jpg')" alt="ladies">
                    </div>

                    <div v-for="i in 4" class="col-3 mt-4">
                        <img :src="state.getImagePath(`social-${i + 2}.jpg`)" :alt="`social ${i + 2}`">
                    </div>
                </div>

            </div>

        </div>
    </div>


    <!-- ********* SHOP ********* -->
    <div class="eb_container mx-0 d-flex flex-wrap ">
        <div class="col-12 eb_delivery d-flex">

            <div class="col-12 position-relative">

                <!-- picture -->
                <img :src="state.getImagePath('call-to-action-bg.jpg')" alt="baking">


                <!-- try seasonal products -->
                <div class="eb_description position-absolute w-100 h-100 d-flex flex-column justify-content-between">

                    <div class="eb_head-card d-flex align-items-center justify-content-center">
                        <div class="eb_paragraph container">
                            <div class="w-50">
                                <h6 class=" text-uppercase">try our seasonal products</h6>
                                <h2 class="my-4">Order for pick-up or delivery to your home</h2>
                                <button class="eb_btn-empty ">Shop Now</button>
                            </div>
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