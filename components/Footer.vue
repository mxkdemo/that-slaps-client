<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title justify="center" align="center" class=" text-center" style="justify-content:center;flex-direction:column;">
          <v-row>
 <v-col cols="12">
        <v-btn
          class="mx-4"
          icon
          @click.stop="onShare(global.facebook)"
        >
          <v-icon size="24px">{{icons.facebook}}</v-icon>
        </v-btn>
          <v-btn
          class="mx-4"
          icon
          @click.stop="onShare(global.instagram)"
        >
          <v-icon size="24px">{{icons.instagram}}</v-icon>
        </v-btn>
        </v-col>
        <v-col cols="12">
        <v-btn
          v-for="item in items" :key="item.page"
          text
          :to="item.route"
        >
        {{item.page.toUpperCase()}}
        </v-btn>
        </v-col>
          </v-row>
         
      </v-card-title>

      <v-card-text class="py-2 text-center that-slaps-font" style="font-size:32px;background-color:#fff;color:#272727;font-weight:700">
        {{ new Date().getFullYear() }}   <sup style="font-size:18px;font-family: Roboto,sans-serif; !important">&copy;</sup> THAT SLAPS.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import globalQuery from '~/apollo/queries/global/social'
import { mdiFacebook, mdiInstagram } from '@mdi/js'
export default {
  apollo: {
    global: {
        prefetch: true,
        query: globalQuery,
    },
  },
  data () {   
    return {
      icons: {
        facebook: mdiFacebook,
        instagram: mdiInstagram
    },
      items: [
        {page: 'about', route: '/about'},
        {page: 'contact', route: 'contact'},
        {page: 'terms & conditions', route: '/terms-and-conditions'},
        {page: 'privacy policy', route: '/privacy-policy'},
      ],
    }
  },
  methods: {
    onShare(host) {
        window.open(host, "_blank")
    },
}
}
</script>

<style>

</style>