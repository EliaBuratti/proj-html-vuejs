<script>
import image from '../dataJs/image.js';
import navList from '../dataJs/navList';
import state from '../dataJs/state';
import NavBar from './NavBar.vue';



export default {
    name: 'Footer',

    components: {
        NavBar,
    },

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
    <div class="eb_container d-flex flex-wrap justify-content-between">

        <div class="col-12 d-flex justify-content-between mb-5">

            <!-- ********* NAVBAR WITH BRAND ********* -->
            <div class="col-6">

                <!-- brand -->
                <a class="navbar-brand" href="##">
                    <img :src="state.getImagePath('avada-bakery-logo-retina-200x97.png')" alt="bakery logo">
                </a>

                <div class="eb_nav_section">
                    <NavBar :navLists="navList.footerList" :logo="false" />
                </div>
            </div>


            <!-- ********* NEWSLETTER ********* -->
            <div class="col-5 text-end">
                <h4>Subscribe to our Newsletter</h4>

                <!-- email -->
                <div class="eb_input">
                    <input type="text" value="" placeholder="Enter email address*" id="user-mail">
                    <button class="eb_btn-full">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="col-12 d-flex justify-content-between mb-5">

            <!-- copyright -->
            <div class="col-6">
                <div class="eb_copyright">
                    <small>
                        &copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All rights Reserved | Powered by
                        WordPress
                    </small>
                </div>
            </div>

            <!-- ********* SOCIAL ICON ********* -->
            <div class="col-6">

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



h4 {
    font-family: 'Roboto Serif', serif;
    font-weight: 700;
    color: $style-color;
    padding: 0 0 2rem 0;
}
</style>