<template>
      <v-speed-dial
      v-model="fab"
      bottom
      right
      direction="top"
      transition='slide-y-reverse-transition'
      fixed
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-share-variant</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="blue"
        @click.stop="onShare('twitter')"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
        @click.stop="onShare('facebook')"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
         @click.stop="onShare('pinterest')"
      >
        <v-icon>mdi-pinterest</v-icon>
      </v-btn>
            <v-btn
        fab
        dark
        small
        color="green"
         @click.stop="onShare('email')"
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-speed-dial>
</template>

<script>
export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    data: () => ({
        fab: false,
        shareHosts: {
        twitter: "https://twitter.com/intent/tweet?url=",
        facebook: "https://www.facebook.com/sharer.php?u=",
        pinterest: "https://pinterest.com/pin/create/button/?url=",
        email: "mailto:?subject={a}body="
        }
    }),
    methods: {
        onShare(host) {
            window.open(this.shareHosts[host].replace('{a}',this.article.title) + window.location)
        },
    }
}
</script>

<style>

</style>