<script>
export default {
    name: 'Header'

}
</script>

<template>
    <div id="eb_nav_section">
        <nav class="navbar navbar-expand-lg bg-transparent">

            <div class="container-fluid">
                <a class="navbar-brand" href="##">
                    <img src="../assets/images/avada-bakery-logo-retina-200x97.png" alt="bakery logo">
                </a>

                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto text-end">

                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="##">shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="##">about</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="##">gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="##">locations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="##">journal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="##">contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="##">my account</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="##"><svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <section id="eb_jumbotron">
        <img src="../assets/images/hero-header-bakery.jpg" alt="jubotron image">

        <div class="eb_overview">
            <h6 class=" text-uppercase">fresh & tasty bakery every day</h6>
            <h1 class=" text-capitalize">The perfect fresh bread</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus fugiat alias fuga officiis.
            </p>

            <button class="mt-2">Explore our products</button>
        </div>
    </section>

    <div id="offers">
        <!-- va con position sticky -->
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