<template>
  <div id="app">
    <v-app light>





      <v-content>

        <router-view/>




        <v-footer height="auto" class="grey darken-3" id="footer">
          <v-layout row wrap justify-center class="caption">

            <v-flex xs12 py-3 text-xs-center white--text>
              &copy; 2018
              <strong>
                <router-link to="/">Illinois Criminal Justice Information Authority</router-link>
              </strong>
            </v-flex>
          </v-layout>
        </v-footer>


      </v-content>
    </v-app>
  </div>
</template>

<script>

  import metaInfo from "./meta";
  export default {
    data: () => ({
      metaInfo,
      links: ['Home', 'About Us', 'Contact Us'],
      items: [
        'All', 'Family', 'Friends', 'Coworkers'
      ]
    })
  }
</script>

<style>
  #app {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fff;
  }

  #footer a {
    text-decoration: none;
    color: #ccc !important;
  }

  #footer a:hover {
    color: orange !important;
  }
</style>