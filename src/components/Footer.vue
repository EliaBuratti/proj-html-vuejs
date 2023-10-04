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
    <div class="eb_container mx-0 d-flex flex-wrap ">
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
    </div>


    <!-- nav footer and subscribe -->
    <div class="eb_container d-flex flex-wrap justify-content-between">
        <div class="col-12 d-flex justify-content-between mb-5">

            <!-- navbar with brand -->
            <div class="col-6">
                <a class="navbar-brand" href="##">
                    <img src="../assets/images/avada-bakery-logo-retina-200x97.png" alt="bakery logo">
                </a>
                <div id="eb_nav_section">
                    <nav class="navbar navbar-expand-lg bg-transparent">

                        <div>

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


            <!-- subscribe -->
            <div class="col-5 text-end">
                <h4>Subscribe to our Newsletter</h4>

                <!-- email -->
                <div class="eb_input">
                    <input type="text" value="" placeholder="Enter email address*">
                    <button class="eb_btn-full">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="col-12 d-flex justify-content-between mb-5">
            <div class="col-6">
                <div class="eb_copyright">
                    <small>
                        &copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All rights Reserved | Powered by
                        WordPress
                    </small>
                </div>
            </div>

            <div class="col-6">
                <!-- social icon -->
                <div class="eb_socials text-end">

                    <!-- instagram -->
                    <a href="##">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                            viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </a>

                    <!-- ex twitter -->
                    <a href="##">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                    </a>

                    <!-- facebook -->
                    <a href="##">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                            viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                    </a>

                    <!-- pinterest -->
                    <a href="##">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                            viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/Header.scss';
@use '../assets/scss/Main.scss';
@use '../assets/scss/Footer.scss';
@use '../assets/scss/partials/variable.scss' as *;

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

h4 {
    font-family: 'Roboto Serif', serif;
    font-weight: 700;
    color: $style-color;
    padding: 0 0 2rem 0;
}
</style>