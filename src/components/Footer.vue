<script>
import image from '../dataJs/image.js';
import navList from '../dataJs/navList';
import state from '../dataJs/state';


export default {
    name: 'Footer',

    data() {
        return {
            image,
            navList,
            state,
        }
    },





}
</script>

<template>
    <!-- nav footer and subscribe -->
    <div class="eb_container d-flex flex-wrap justify-content-between">


        <div class="col-12 d-flex justify-content-between mb-5">

            <!-- navbar with brand -->
            <div class="col-6">
                <a class="navbar-brand" href="##">
                    <img :src="state.getImagePath('avada-bakery-logo-retina-200x97.png')" alt="bakery logo">
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
                                    <li v-for="list in navList.footerList">
                                        <a class="nav-link" :href="list.targhet">
                                            <span v-if="list.icon == ''"> {{ list.name }} </span>

                                            <span v-else class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                                                    :viewBox="list.icon.viewbox">
                                                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                                    <path :d="list.icon.path" />
                                                </svg>

                                                <span class="eb_badge">{{ list.item }}</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-link d-flex align-items-center" href="##">
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

                    <!-- icon -->
                    <a v-for="social in image.social_logo" href="##">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                            :viewBox="social.icon.viewbox"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path :d="social.icon.path" />
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