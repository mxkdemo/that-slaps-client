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
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
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
import { mdiFacebook, mdiInstagram } from '@mdi/js'
export default {
  data () {
    return {
      icons: [
        mdiFacebook,
        mdiInstagram,
      ],
      items: [
        {page: 'about', route: '/about'},
        {page: 'contact', route: 'contact'},
        {page: 'terms & conditions', route: '/terms-and-conditions'},
        {page: 'privacy policy', route: '/privacy-policy'},
      ],
    }
  }
}
</script>

<style>

</style>