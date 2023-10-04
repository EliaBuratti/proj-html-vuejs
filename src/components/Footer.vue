<script>
import image from '../dataJs/image.js';

export default {
    name: 'Footer',

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
    <div class="eb_container mx-0 ">
        <!-- shop -->
        <div class="col-12 eb_delivery d-flex">
            <div class="col-12 position-relative">

                <!-- picture -->
                <img :src="getImagePath('call-to-action-bg.jpg')" alt="baking">


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

        <!-- nav footer and subscribe -->

        <div class="col-6 eb_container">
            <a class="navbar-brand" href="##">
                <img src="../assets/images/avada-bakery-logo-retina-200x97.png" alt="bakery logo">
            </a>
            <div id="eb_nav_section">
                <nav class="navbar navbar-expand-lg bg-transparent">

                    <div class="">

                        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">

                                <li>
                                    <a class="nav-link" href="##">shop</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="##">about</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="##">gallery</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="##">locations</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="##">journal</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="##">contact</a>
                                </li>
                                <li>
                                    <a class="nav-link d-flex align-items-center" href="##">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                            viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                        </svg>

                                        <span class="eb_badge">0</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/Header.scss';
@use '../assets/scss/Main.scss';
@use '../assets/scss/Footer.scss';

#eb_nav_section {


    li {

        margin: 2rem 3rem 0 0;

        a {

            font-size: 0.8rem;
            font-weight: 400;
            text-transform: capitalize;
        }
    }
}
</style>