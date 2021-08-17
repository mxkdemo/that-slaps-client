<template>
    <div>
        <v-navigation-drawer v-model="drawer" app dense disable-resize-watcher>
            <v-list-item to="/">
                <v-list-item-content>
                    <div class="that-slaps-font text-center" style="font-size:48px !important;letter-spacing:1.2px;font-weight:700"> THAT</div>
                <div class="that-slaps-font text-center" style="font-size:48px !important;letter-spacing:1.2px;font-weight:700"> SLAPS.</div>

                </v-list-item-content>
            </v-list-item>
            <v-list dense>
                <v-list-item link v-for="item in categories" :key="item.name" :to="'/category/' + item.name">
                <v-list-item-content>
                    <v-list-item-title style="; font-size:0.875rem;">
                        {{item.name.toUpperCase()}}
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    <v-row class="site-header">
          <v-col cols="12" class="" align="center" justify="center">
              <h1 class="that-slaps-font page-header-font" style="cursor:pointer" @click.stop="$router.push('/')">THAT SLAPS.</h1>
          </v-col>
      </v-row>


        <v-app-bar 
        app elevation="1" color="white" id="that-slaps-navbar" style="position:relative;margin-bottom: -64px;">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" ></v-app-bar-nav-icon>
        <div class="that-slaps-font that-slaps-logo slide-out" id="that-slaps-logo" 
            style="position:absolute;font-weight:700;font-size:2em;cursor:pointer;transform: translateX(-100%);" 
            @click.stop="$router.push('/')" v-cloak>THAT SLAPS.</div>
            <v-row justify="center" align="center" class="hidden-sm-and-down" style="">
                <v-col cols="12" style="display:flex;justify-content:center">
                    <div v-for="(item, index) in categories" :key="item.name" style="display:inline;font-weight:600">
                        <v-btn class="" text :to="'/category/' + item.name"> {{item.name}} </v-btn> 
                        <p v-if="index != categories.length - 1" style="display:inline">-</p>
                    </div>  
                </v-col>
            </v-row>
        </v-app-bar>
    </div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/category/categories'
export default {
    apollo: {
      categories: {
        prefetch: true,
        query: categoriesQuery,
      },
    },     
    data: () => ({
        drawer: false,
    }),
    computed: {
        thatSlapsNavbar() {
            return document.getElementById("that-slaps-navbar").offsetTop;
        }
    },
    mounted  () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy  () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        getDistance() {
            var header = document.getElementById("that-slaps-navbar");
            var topDist = header.offsetTop;
            return topDist;
        },
        handleScroll (event) {
            var header = document.getElementById("that-slaps-navbar");
            var logo = document.getElementById("that-slaps-logo");
                if (event.currentTarget.pageYOffset > this.thatSlapsNavbar) {
                    header.classList.add('sticky-nav')
                    logo.classList.add('slide-in')
                    logo.classList.remove('slide-out')
                } else {
                    header.classList.remove('sticky-nav')
                    logo.classList.add('slide-out')
                    logo.classList.remove('slide-in')
                }    
        }
    }
}
</script>

<style scoped>
    .sticky-nav {
        position: fixed !important;
        top: 0px;
    }
    .site-header {
  height: 200px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
}

.that-slaps-logo {
    margin-left:-50px;
     transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
}

 @media only screen and (min-width: 960px) {
     .slide-in {
    margin-left:0px;
    animation: slide-in 0.3s forwards;
    -webkit-animation: slide-in 0.3s forwards;
}
 .slide-out {
    margin-left:-50px;
    animation: slide-out 0.3s forwards;
    -webkit-animation: slide-out 0.3s forwards;
}
  }

 @media only screen and (max-width: 960px) {
    .slide-in {
        margin-left:170px;
    }
  }


    
@keyframes slide-in {
    100% { transform: translateX(0%); }
}

@-webkit-keyframes slide-in {
    100% { -webkit-transform: translateX(0%); }
}
    
@keyframes slide-out {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
}

@-webkit-keyframes slide-out {
    0% { -webkit-transform: translateX(0%); }
    100% { -webkit-transform: translateX(-100%); }
}

</style>