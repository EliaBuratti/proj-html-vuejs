<script>
import state from '../dataJs/state';
export default {
    name: 'NavBar',

    props: {

        navLists: Object,
        logo: Boolean,
    },

    data() {
        return {
            state,
        }
    }

}
</script>


<template>
    <nav class="navbar navbar-expand-lg bg-transparent">

        <div :class="logo ? 'container-fluid' : ''">
            <a v-if="logo" class="navbar-brand" href="##">
                <img :src="state.getImagePath('avada-bakery-logo-retina-200x97.png')" alt="bakery logo">
            </a>

            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto text-end">
                    <li v-for="list in navLists">
                        <a class=" text-decoration-none" :href="list.targhet">
                            <span v-if="list.icon == ''" :class="logo ? 'eb_nav-list-logo' : 'eb_nav-list'"> {{ list.name }}
                            </span>

                            <span v-else class="d-flex align-items-center eb_badge">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" :viewBox="list.icon.viewbox">
                                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path :d="list.icon.path" />
                                </svg>

                                <span v-if="!logo" class="">{{ list.item }}</span>

                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variable.scss' as *;

.eb_nav-list-logo {

    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.7rem;


}

.eb_nav-list {

    font-size: 0.8rem;
    font-weight: 400;
    text-transform: capitalize;


}

li {
    margin: 0.5rem 0.7rem;
    height: 2rem;

    svg {
        fill: $style-color;
    }

    a {
        color: $style-color;
        padding: 0;
        padding-bottom: 0.25rem;
        transition: 0.15s;
    }

    a:hover {
        border-bottom: 3px solid $style-color;
    }
}

.eb_badge {

    transform: scale(0.8);

    span:last-child {
        display: flex;
        justify-content: center;
        margin-left: 0.5rem;
        width: 1.6rem;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background-color: $grey;
    }
}
</style>