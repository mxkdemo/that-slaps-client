<template>
 <v-card
    class="mx-auto text-center sidebar"
    justify="center"
    align="center"
    tile
    outlined    
  >
    <v-row align="center" justify="center">
      <v-col class="text-center d-flex" style="justify-content:center">
         <div class="that-slaps-font" style="font-size:64px !important; color:#272727;letter-spacing:1.2px;line-height:1;"> THAT SLAPS </div>
      </v-col>
    </v-row>

    <v-card-actions style="justify-content:center">
       <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
        >
          <v-icon >{{ icon }}</v-icon>
        </v-btn>
    </v-card-actions>
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