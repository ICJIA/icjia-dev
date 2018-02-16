<template>
    <div>
        <v-toolbar class="nav headroom headroom--unpinned" id="nav" fixed color="grey darken-3" dark>
            <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
            <v-toolbar-title class="hidden-sm-and-down">
                <a href="">
                    <img src="/static/icjia-01.png" height="40" style="margin-top: 5px" />
                </a>
            </v-toolbar-title>
            <v-spacer class="text-xs-center hidden-sm-and-down article-title" v-dummy="10">

            </v-spacer>

            <v-spacer class="text-xs-center hidden-md-and-up">
                <a href="">
                    <img src="/static/icjia-01.png" height="40" style="margin-top: 5px" />
                </a>
            </v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>Link One</v-btn>
                <v-btn flat>Link Two</v-btn>
                <v-btn flat>Link Three</v-btn>
            </v-toolbar-items>
        </v-toolbar>



        <div class="parallax" style="margin-top: -100px">
            <div class="hero-title">

                <div class="hero-title-main">Sample Tableau 10 layout</div>
                <br>
                <div class="hero-title-sub">With Float-in Navbar</div>
            </div>
        </div>

        <github />

        <v-container fluid grid-list-xl>
            <v-layout row justify-center class="article">
                <v-flex xs10>

                    <h1 v-dummy="10"></h1>

                    <p v-dummy="100" style="width: 100%"></p>

                    <p v-dummy="100" style="width: 100%"></p>


                    <v-layout row justify-center>
                        <v-flex xs8>
                            <viz class="viz-embed" :uuid="generateUUID()" thumbnail="https://public.tableau.com/static/images/Op/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash/1_rss.png"
                                viz="https://public.tableau.com/views/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash?:embed=y&:display_count=yes"
                            />
                        </v-flex>
                    </v-layout>

                    <h2 v-dummy="10"></h2>

                    <p v-dummy="100" style="width: 100%"></p>

                    <p v-dummy="100" style="width: 100%"></p>

                    <p v-dummy="100" style="width: 100%"></p>

                    <p v-dummy="100" style="width: 100%"></p>

                    <h2 v-dummy="10"></h2>

                    <!-- <v-layout row justify-center>
                        <v-flex xs8>
                            <shiny class="shiny-embed" :uuid="generateUUID()" :smHeight="500" :lgHeight="350" thumbnail="/static/shiny1.png" shiny="https://163.191.125.234:3838/sample-apps/hello/"
                            />
                        </v-flex>
                    </v-layout> -->

                    <p v-dummy="100" style="width: 100%"></p>

                    <p v-dummy="100" style="width: 100%"></p>

                    <v-layout row justify-center>
                        <v-flex xs8>
                            <shiny class="shiny-embed" :uuid="generateUUID()" :smHeight="1200" :lgHeight="1250" thumbnail="/static/shiny2.png" shiny="https://shinytest.icjia.cloud/app/01_hello"
                            />
                        </v-flex>
                    </v-layout>

                    <p v-dummy="100" style="width: 100%"></p>

                    <p v-dummy="100" style="width: 100%"></p>

                    <p v-dummy="100" style="width: 100%"></p>

                    <p v-dummy="100" style="width: 100%"></p>



                </v-flex>


            </v-layout>












        </v-container>





    </div>
</template>

<script>
    import Github from "@/components/Github";
    import metaInfo from "../meta";
    import Viz from "@/components/Viz"
    import Shiny from '@/components/Shiny'
    const uuidv4 = require('uuid/v4');
    import _ from 'lodash';
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
    export default {
        name: "A0",
        mounted: function () {
            var scrollObject = {};
            window.onscroll = _.debounce(getScrollPosition);
            function getScrollPosition() {
                scrollObject = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                }
                if (scrollObject.y > 300) {
                    document.getElementsByClassName("nav")[0].classList.add('headroom--pinned')
                    document.getElementsByClassName("nav")[0].classList.remove('headroom--unpinned')
                } else {
                    document.getElementsByClassName("nav")[0].classList.remove('headroom--pinned')
                    document.getElementsByClassName("nav")[0].classList.add('headroom--unpinned')
                }
            }
        },
        methods: {
            generateUUID: function () {
                return "" + uuidv4();
            },
        },
        data() {
            return {
                title: "Version 1",
                drawer: false
            };
        },
        metaInfo: {
            title: 'Tableau 10 Article Demo',
        },
        components: {
            Viz,
            Github,
            Shiny
        }
    };
</script>


<style>
    .headroom {
        will-change: transform !important;
        transition: transform 300ms linear !important;
    }

    .headroom--pinned {
        transform: translateY(0%) !important;

        z-index: 100;
    }

    .headroom--unpinned {
        transform: translateY(-120%) !important;
        z-index: 0;

    }

    .article-title {
        font-weight: 900;
        font-size: 22px;
    }

    .hero-title {
        margin-top: 155px !important;
        margin-left: 50px !important;
    }

    .hero-title-main {
        background: #fff;
        padding: 8px 4px 8px 4px;
        font-size: 40px;

        font-weight: 700;
        font-family: "Rubik", sans-serif;
        padding-bottom: -50px;
        color: #111;

    }

    .hero-title-sub {
        background: #fff;
        padding: 8px 4px 8px 4px;

        font-size: 35px;
        margin-top: 15px;
        font-weight: 700;
        font-family: "Rubik", sans-serif;
    }


    .parallax {


        /* Set a specific height */
        height: 700px;

        /* Create the parallax scrolling effect */
        background-image: url(https://placehold.it/1500x700);
        background-attachment: fixed;
        background-position: bottom center;
        background-position-y: top;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 0;
    }

    .article h1,
    .article h2 {
        margin-bottom: 12px;
        margin-top: 15px;
        font-family: "Rubik", sans-serif !important;
    }

    .article p {
        font-family: "Libre Baskerville", serif;
    }


    figure {
        height: 400px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .article-img {
        height: 100%;
        width: 100%;
        background: url('http://placehold.it/1500x900') no-repeat center center fixed;
        background-size: cover;
    }

    .article {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .article p {
        align-self: center;
    }

    .viz-embed {
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .viz-embed .viz-img {
        max-width: 100%
    }

    .shiny-embed .shiny-img {
        max-width: 100%
    }



    *[id^='viz-caption-'],
    *[id^='shiny-caption-'] {
        font-weight: 900;
        font-size: 14px;
        margin-top: 15px;
        padding-bottom: 25px;
        color: #888;
    }


    .viz-hover:hover,
    .shiny-hover:hover {
        box-shadow: 0px 0px 50px #000000;
        z-index: 2000;
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1.05);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1.05);
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1.05);
        transition: all 300ms ease-in;
        transform: scale(1.01);
        cursor: pointer;
        opacity: 1;
    }


    @media screen and (min-width: 300px) {
        p {
            width: 100%;
            flex: 1 1 auto;
        }

        .viz-embed {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 30px;
            align-self: center;
        }

        .viz-embed {


            width: 100%;
        }



        .article {
            margin-left: 10px;
            margin-right: 10px;
        }

        figure {
            margin-left: -150px;
            margin-right: -150px;
        }

        .hero-title {
            margin-top: 10px;
            margin-left: 0px !important;
        }

        .article h1 {
            line-height: 40px;
        }

        .article h2 {
            line-height: 30px;
        }






    }

    @media screen and (min-width: 600px) {
        p {
            width: 70%;
            flex: 1 1 auto;
        }

        .viz-embed {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 30px;
            align-self: center;
        }
        .article {
            margin-left: 0px;
            margin-right: 0px;
        }

        .hero-title {
            margin-top: 55px;
            margin-left: 50px !important;
        }

        .hero-title-main {
            display: inline-block
        }

        .hero-title-sub {
            display: inline-block
        }






    }
</style>