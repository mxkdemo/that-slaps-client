<template>
    <v-col cols="12" xs="12" sm="3" md="3" lg="4" order="last" class="mb-10 sidebar-break">
        <v-row align="stretch" justify="center">
            <v-col cols="12">
                <FollowUs />
            </v-col>
        </v-row>
        <v-row align="stretch" justify="center">
            <v-col cols="12">
                <Newsletter />
            </v-col>
        </v-row>
        <v-row align="stretch" justify="center" class="sticky">
            <v-col cols="12"  >
                <LatestPosts :articles="latestArticles" />
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
  export default {
    props: {
        latestArticles: {
            type: Array,
            required: true,
            default: ()=>[]
        }
    },
    data: () => ({
    }),
  }
</script>

<style>
    .sticky {
        height: fit-content !important;
        overflow: auto !important;
        position: sticky !important;
        top: 5% !important;
    }
</style>