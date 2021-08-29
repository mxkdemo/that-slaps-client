<template>
      <v-speed-dial
      v-model="fab"
      bottom
      right
      direction="top"
      transition='slide-y-reverse-transition'
      fixed
      title="Share"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">{{icons.close}}</v-icon>
          <v-icon v-else>{{icons.share}}</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="blue"
        @click.stop="onShare('twitter')"
      >
        <v-icon>{{icons.twitter}}</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
        @click.stop="onShare('facebook')"
      >
        <v-icon>{{icons.facebook}}</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
         @click.stop="onShare('pinterest')"
      >
        <v-icon>{{icons.pinterest}}</v-icon>
      </v-btn>
            <v-btn
        fab
        dark
        small
        color="green"
         @click.stop="onShare('email')"
      >
        <v-icon>{{icons.email}}</v-icon>
      </v-btn>
    </v-speed-dial>
</template>

<script>
import { mdiShareVariant, mdiClose, mdiFacebook, mdiTwitter, mdiPinterest, mdiEmail } from '@mdi/js'
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
        },
        icons: {
          share: mdiShareVariant,
          close: mdiClose,
          twitter: mdiTwitter,
          facebook: mdiFacebook,
          pinterest: mdiPinterest,
          email: mdiEmail
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