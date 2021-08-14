<template>
    <div>
        <v-navigation-drawer v-model="drawer" app dense disable-resize-watcher style="background-color:#272727">
            <v-list-item to="/">
                <v-list-item-content>
                    <div class="that-slaps-font text-center" style="font-size:64px !important; color:#ffefd5;letter-spacing:1.2px"> THAT SLAPS </div>
                </v-list-item-content>
            </v-list-item>
            <v-list dense>
                <v-list-item link v-for="item in menu" :key="item.name" :to="'/category/'+item.name">
                <v-list-item-content>
                    <v-list-item-title style="color:#f8f8ff; font-size:0.875rem;">
                        {{item.name.toUpperCase()}}
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dark flat dense>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" style="color:#ffefd5;"></v-app-bar-nav-icon>
            <v-btn class="that-slaps-font" style="font-size:3em;color:#ffefd5;letter-spacing:1.2px;min-width:207px"  :to="'/'" text tile>         
                that slaps            
            </v-btn>     
            <v-spacer></v-spacer>
            <v-row justify="center" align="center" class="hidden-sm-and-down" style="margin-left:-128px">
                <v-col cols="12" >
                    <div v-for="(item, index) in menu" :key="item.name" style="display:inline;color:#f8f8ff !important">
                        <v-btn class="" text :to="'/category/'+item.name"> {{item.name}} </v-btn> 
                        <p v-if="index != menu.length - 1" style="display:inline">-</p>
                    </div>  
                </v-col>
            </v-row>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        menu: [
            { name: "news", icon:"mdi-home" },
            { name: "restaurants", icon:"mdi-home" },
            { name: "bars", icon:"mdi-home" },
            { name: "things to do", icon:"mdi-home" }
        ]
    }),
}
</script>