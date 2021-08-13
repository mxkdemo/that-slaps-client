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
      <v-card-title justify="center" align="center" class=" text-center" style="justify-content:center;flex-direction:column;background-color:#ffefd5;">
          <v-row>
 <v-col cols="12">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
          style="color:#272727 !important"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        </v-col>
        <v-col cols="12">
        <v-btn
          v-for="item in items" :key="item"
          text
          style="color:#272727 !important"
        >
        {{item.toUpperCase()}}
        </v-btn>
        </v-col>
          </v-row>
         
      </v-card-title>

      <v-card-text class="py-2 text-center that-slaps-font" style="font-size:32px;color:#ffefd5;">
        {{ new Date().getFullYear() }}   <sup style="font-size:18px;font-family: Roboto,sans-serif; !important">&copy;</sup> THAT SLAPS
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data () {
        return {
            icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
                    items: [
            'about',
            'terms & conditions',
            'privicy policy',
            'contact',
        ],
        }
  }
}
</script>

<style>

</style>