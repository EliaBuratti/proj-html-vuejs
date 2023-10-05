<script>
import navList from '../dataJs/navList';
import state from '../dataJs/state';


export default {
    name: 'Header',
    data() {
        return {
            navList,
            state,
        }
    },

}
</script>

<template>
    <!-- ********* NAVBAR ********* -->
    <div id="eb_nav_section">
        <nav class="navbar navbar-expand-lg bg-transparent">

            <div class="container-fluid">
                <a class="navbar-brand" href="##">
                    <img :src="state.getImagePath('avada-bakery-logo-retina-200x97.png')" alt="bakery logo">
                </a>

                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto text-end">
                        <li v-for="list in navList.headList" class="nav-item">
                            <a class="nav-link" :href="list.targhet">
                                <span v-if="list.icon == ''"> {{ list.name }} </span>

                                <svg v-else xmlns="http://www.w3.org/2000/svg" height="1.25em" :viewBox="list.icon.viewbox">
                                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path :d="list.icon.path" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <!-- ********* JUBOTRON ********* -->
    <section id="eb_jumbotron">
        <img :src="state.getImagePath('hero-header-bakery.jpg')" alt="jubotron image">

        <div class="eb_overview ">
            <h6 class=" text-uppercase">fresh & tasty bakery every day</h6>
            <h1 class=" text-capitalize">The perfect fresh bread</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus fugiat alias fuga officiis.
            </p>

            <button class="mt-2">Explore our products</button>
        </div>
    </section>



    <!-- ********* OVERLAP ********* -->
    <div id="offers" class="d-none d-lg-block">

        <div id="demos">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z" />
            </svg>
            <p>Demos</p>
        </div>

        <div id="costs">
            <span class="eb_value">$</span>
            <span class="eb_price">39</span>
            <p>On Sale</p>
        </div>
    </div>

    <!-- turn top the page -->
    <div id="eb_top-page">
        <a href="#">&lsaquo;</a>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/Header.scss';

#eb_nav_section {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;

}
</style>