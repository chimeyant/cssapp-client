<template>
  <v-app-bar
    app
    light
    color="white"
    :height="device.desktop ? 100: 80"
    absolute
    hide-on-scroll
    prominent
  >
    <v-toolbar-title>
      <img
        :src="info.app_logo"
        width="56px"
        height="60px"
        alt=""
        :class="device.desktop ? `ml-10 mr-5 mt-1`:`ml-2 mr-2 `"
      >
      <div class="flex flex-column">
        <span
          class="hidden-sm-and-down header-title"
          style="padding-bottom:10px ;"
        >
          <span class="indigo--text">City Sanitation </span>
          <span class="green--text">Summit XX </span>
          <br>
          <div>
            <span class="orange--text">Kabupaten</span>
            <span class="purple--text"> Tangerang</span>
          </div>
        </span>

        <span
          class="hidden-md-and-up black--text"
          style="font-size:16px ;"
        >
          <span class="indigo--text">City Sanitation </span>
          <div style="font-size:12px ;">
            <span class="orange--text">Kabupaten</span>
            <span class="purple--text"> Tangerang</span>
          </div>
        </span>

      </div>

    </v-toolbar-title>

    <v-spacer />
    <v-list class="d-flex white light  mt-4">
      <v-list-item
        class="hidden-sm-and-down "
        link
        v-for="(menu,index) in menus"
        :key="index"
        :to="menu.route"
      >
        <v-list-item-title class="black--text rounded-2">{{ menu.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-menu
      offset-y
      width="300"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-show="device.mobile"
          icon
          light
          v-bind="attrs"
          v-on="on"
          class="mt-4"
        >
          <v-icon color="black">mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card width="200">

        <v-list>
          <v-list-item>
            <v-list-item-title @click="$router.push({ name: 'home' })">
              <v-icon color="green">mdi-home-circle</v-icon> Beranda
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="$router.push({ name: 'lokasi' })">
              <v-icon color="green">mdi-home-map-marker</v-icon> Lokasi Kunjungan
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="$router.push({ name: 'hotel' })">
              <v-icon color="green">mdi-office-building-marker-outline</v-icon> Hotel
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="$router.push({ name: 'wisata' })">
              <v-icon color="green">mdi-heart-circle-outline</v-icon> Objek Wisata
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="$router.push({name:'media'})">
              <v-icon color="green">mdi-bullhorn</v-icon> Media
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-show="false">
            <v-list-item-title @click="$router.push({ name: 'registrasi' })">

            </v-list-item-title>
          </v-list-item>

        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HeaderComponent",

  data: () => ({
    menus: [
      { title: "Beranda", route: "/home" },
      { title: "Lokasi Kunjungan", route: "/lokasi" },
      { title: "Hotel", route: "/hotel" },
      { title: "Objek Wisata", route: "/wisata" },
      { title: "Media", route: "/media" },
    ],
  }),
  mounted() {},
  computed: {
    ...mapState(["device", "theme", "info"]),
  },
};
</script>

<style>
.v-toolbar__title {
  display: flex;
  font-size: 20px;
  font-weight: 600;
  color: cornflowerblue;
}

::before {
  border-radius: 30px;
}

span.hidden-sm-and-down.header-title {
  font-size: 20px;
  color: grey;
}
</style>