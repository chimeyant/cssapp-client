<template>
  <div>
    <v-carousel
      cycle
      :height="device.desktop ? `750` : `400`"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(slide, i) in sliders"
        :key="i"
        :src="slide.path"
      >
        <v-col
          cols="6"
          v-show="device.desktop"
        >
          <v-row>
            <div class="bg-black">
              <div class="container-title">
                <div class="flex flex-column">
                  <div class="slider-title animated animate__lightSpeedInRight">
                    {{ slide.title }}
                  </div>
                  <div class="slider-sub-title animated animate__fadeInUp">

                    {{ slide.content }}
                  </div>
                  <v-row>
                    <div class="slider-action">
                      <v-btn
                        rounded
                        color="green"
                        dark
                        large
                        v-show="false"
                        @click="$router.push({name:'registrasi'})"
                      >Registrasi</v-btn>

                    </div>

                  </v-row>

                </div>
              </div>
            </div>
          </v-row>
        </v-col>
      </v-carousel-item>

    </v-carousel>
    <v-row class="justify-center ">
      <v-container class="mt-10">
        <v-col cols="12">
          <v-row class="justify-center mb-5">
            <h2>City Sanitation Summit</h2>
          </v-row>
          <p>

            City Sanitation Summit merupakan ajang pertemuan untuk bertukar pengalaman, pengetahuan terhadap kegiatan sanitasi dan selanjutnya membangun kemitraan dan mendorong upaya advokasi, promosi dan kampanye untuk pembangunan sanitasi di Indonesia agar Indonesia maju di tahun 2045.
          </p>
        </v-col>

      </v-container>
    </v-row>
    <v-row
      class="justify-center orange"
      v-if="false"
    >
      <v-container class="mt-10">
        <v-col cols="12">
          <v-row class="justify-center white--text">
            <h2 v-show="device.desktop">September 6 - 8, Kabupaten Tangerang </h2>
            <h4 v-show="device.mobile">September 6 - 8, Kabupaten Tangerang </h4>
          </v-row>
          <div class="counter">
            <flip-countdown deadline="2022-09-6 00:00:00"></flip-countdown>
            <br>
            <div class="jmlpeserta">{{ data.jmlpeserta + " Peserta" }}</div>
            <br>
            <v-btn
              rounded
              outlined
              dark
              large
              v-show="false"
              @click="$router.push({name:'registrasi'})"
            >Registrasi Sekarang</v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="mt-10 mb-10"
        >
          <v-row class=" justify-content-around">
            <v-row>
            </v-row>
          </v-row>
        </v-col>
      </v-container>
    </v-row>
    <v-row class="justify-center white lighten-2">
      <l-map
        style="height: 500px ; z-index:0 ;"
        :zoom="zoom"
        :center="center"
        minZoom="11"
      >
        <v-geosearch
          :options="geosearchOptions"
          style="width:100px; border: 1px;"
        ></v-geosearch>
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        ></l-tile-layer>
        <l-marker
          v-for="item in markers"
          :key="item.id"
          :visible="item.visible"
          :draggable="item.draggable"
          :lat-lng.sync="item.position"
        >

          <l-icon
            iconSize=32
            :icon-url="item.icon"
          />
          <l-popup :content="item.tooltip" />
          <l-tooltip :content="item.tooltip" />

        </l-marker>

      </l-map>
    </v-row>
    <v-row class="justify-center grey lighten-2">
      <v-container class="mt-10">
        <v-col cols="12">
          <v-row class="justify-center black--text mb-10">
            <h2>MEDIA INFORMASI</h2>
          </v-row>
          <v-row>
            <v-col
              :cols="device.desktop ? 6: 12"
              :class="device.desktop? ``:`pl-5`"
            >
              <div class="title red--text mb-5">VIDEO TERBARU</div>
              <div>

                <youtube
                  :video-id="video.video_url"
                  ref="youtube"
                  @playing="playing"
                  :width="device.desktop?  500:`350`"
                  :height="device.desktop? `300`: `200`"
                />

              </div>
            </v-col>
            <v-col :cols="device.desktop ? `6`:`12`">
              <div class="title red--text mb-5">VIDEO LAINNYA</div>
              <v-col cols="12">
                <v-row>
                  <v-col
                    :cols="device.desktop ? `6`:`12`"
                    v-for="item in videos"
                    :key="item.id"
                  >
                    <youtube
                      :video-id="item.video_url"
                      ref="youtube"
                      @playing="playing"
                      :width="device.desktop?  250:`350`"
                      :height="device.desktop? 150:'200'"
                    />
                  </v-col>

                </v-row>
              </v-col>

            </v-col>
            <v-col :cols="device.desktop ? 12: 12">
              <div class="title red--text mb-5">BERITA TERBARU</div>
              <v-row>
                <v-col
                  :cols="device.desktop ? 3:12"
                  v-for="berita in beritas"
                  :key="berita.id"
                >
                  <v-card
                    class="mx-auto "
                    :height="device.desktop ? `300px` :``"
                  >
                    <v-img
                      :src="`https://tangerangkab.go.id/images/`+ berita.url_foto"
                      :height="device.desktop ? `150px`: `250px`"
                    ></v-img>
                    <v-card-text>
                      {{ berita.judul_berita }}
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        outlined
                        text
                        color="primary"
                        hide-details
                        @click="openDetailBerita(berita.id)"
                      >Selengkapnya..</v-btn>
                    </v-card-actions>

                  </v-card>
                </v-col>

              </v-row>
              <div class="grid-list-md">

              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          class="mt-10 mb-10"
        >
          <v-row class=" justify-content-around">
            <v-row>
            </v-row>
          </v-row>
        </v-col>
      </v-container>
    </v-row>

    <v-row class="justify-center cyan">
      <v-container class="mt-10">
        <v-col cols="12">
          <v-row class="justify-center black--text">
            <h2>GALLERY FOTO</h2>
          </v-row>

          <div class="gallery-foto">

            <v-col
              v-for="(item, i) in fotos"
              :key="i"
              :cols="device.desktop ? 3: 6"
            >
              <v-img
                :src="item.foto"
                :lazy-src="item.name"
                aspect-ratio="1"
              ></v-img>
            </v-col>

          </div>
        </v-col>
        <v-col
          cols="12"
          class="mt-10 mb-10"
        >
          <v-row class=" justify-content-around">
            <v-row>

            </v-row>
          </v-row>
        </v-col>
      </v-container>
    </v-row>

  </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";
const axios = require("axios").default;
import { mapState, mapActions } from "vuex";
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LPopup,
  LTooltip,
} from "vue2-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import VGeosearch from "vue2-leaflet-geosearch";
import "leaflet/dist/leaflet.css";

export default {
  name: "slider-component",
  components: {
    FlipCountdown,
    LMap,
    LTileLayer,
    LMarker,
    VGeosearch,
    LIcon,
    LPopup,
    LTooltip,
  },
  props: {},
  data: () => ({
    sliders: [],
    videoId: "LuVVlk7DamA",
    beritas: [],
    fotos: [],
    videos: [],
    video: {},
    //property map
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 11,
    maxZoom: 11,
    //-6.1716001, 106.6405384
    center: [-6.1716001, 106.6405384],

    geosearchOptions: {
      // Important part Here
      provider: new OpenStreetMapProvider(),
    },

    marker: {
      id: 1,
      position: { lat: -6.1716001, lng: 106.6405384 },
      tooltip: "LOKASI KEGIATAN",
      draggable: false,
      visible: true,
    },

    markers: [],

    data: {},
  }),
  mounted() {
    this.setPage({
      crud: false,
    });
    this.fetchSliders();
    this.fetchBerita();
    this.fetchFoto();
    this.fetchLatestVideo();
    this.fetchVideos();
    this.fetchIndex();
  },

  computed: {
    ...mapState(["device", "http", "info"]),
    player() {
      return this.$refs.youtube.player;
    },
  },
  methods: {
    ...mapActions(["setPage"]),
    fetchIndex: async function () {
      try {
        let { data } = await this.http.get("api/home");
        this.data = data;
        this.markers = data.maps;
      } catch (error) {}
    },
    fetchSliders: async function () {
      try {
        let { data } = await this.http.get("sliders");
        this.sliders = data;
      } catch (error) {}
    },
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("o/ we are watching!!!");
    },
    fetchBerita: async function () {
      try {
        let { data } = await this.http.get("api/berita");
        this.beritas = data;
      } catch (error) {}
    },
    fetchFoto: async function () {
      try {
        let { data } = await this.http.get("api/gallery-foto");
        this.fotos = data;
      } catch (error) {}
    },
    fetchLatestVideo: async function () {
      try {
        let { data } = await this.http.get("api/latest-video");
        this.video = data;
      } catch (error) {}
    },
    fetchVideos: async function () {
      try {
        let { data } = await this.http.get("api/show-video");
        this.videos = data;
      } catch (error) {}
    },
    openDetailBerita: function (val) {
      window.open(
        "https://tangerangkab.go.id/detail-konten/show-berita/" + val
      );
    },
  },
};
</script>

<style>
.number-statistik {
  font-size: 60px;
  color: white;
  text-align: center;
  font-weight: 600;
}
.title-statistik {
  font-size: 25px;
  color: white;
  text-align: center;
  font-weight: 600;
}
.slider-right {
  background-color: rgba(red, green, blue);
  height: 100vh;
}
.bg-black {
  --tw-bg-opacity: 1;
  background: linear-gradient(
    90deg,
    rgb(18, 18, 26) 0%,
    rgba(1, 1, 1, 1) 50%,
    rgba(52, 53, 57, 0) 100%
  );
  height: 100vh;
  width: 100%;
}

.container-title {
  margin-left: 7%;
  display: flex;
  position: absolute;
  height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.slider-title {
  font-size: 40px;
  margin-top: 30px;
  font-weight: bold;
}
.slider-sub-title {
  max-width: 450px;
}

.slider-action {
  margin-top: 200px;
}

.digit {
  font-size: 60px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0;
}

.counter {
  margin-top: 50px;
  text-align: center;
}

.gallery-foto {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  flex-wrap: wrap;
}

.jmlpeserta {
  color: white;
  font-size: 30px;
  font-weight: 700;
}
</style>