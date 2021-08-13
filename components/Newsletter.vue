<template>
 <v-card
    class="mx-auto text-center sidebar"
    justify="center"
    align="center"
    tile
    outlined
    
  >
  
<v-card-subtitle class="text-center" style="letter-spacing: 2px;">NEWSLETTER</v-card-subtitle>
  <v-card-text>
      <v-row>
         <v-col cols="12">
          <v-text-field
            label="ENTER EMAIL ..."
            single-line
            outlined
            dense
            class="newsletter"
          ></v-text-field>
           <v-btn
          tile
          outlined
          block
        > SUBSCRIBE
        </v-btn>
        </v-col>
        </v-row>
  </v-card-text>

  </v-card>
</template>


<script>


  export default {
    data: () => ({
        follow: "Follow us",
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-pinterest',
        'mdi-instagram',
      ],
    }),
    computed: {
    },
    methods: {
    },
  }
</script>

<style>
.newsletter .v-label  {
    font-size:0.8em !important;
}
</style>