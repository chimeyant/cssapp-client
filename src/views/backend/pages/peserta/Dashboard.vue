<template>
  <v-container
    fluid
    :class="device.desktop ? `pt-10 grid-list-xl` : `indigo`"
    style="height:100px ;"
  >
    <v-row v-if="device.desktop">
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <v-card height="300">
              <v-img
                src="/images/bg-card.png"
                height="300"
              >
                <div class="kartu-peserta-title-desktop">KARTU PESERTA</div>
                <div class="ml-5 mt-5 f1-light">
                  <tbody>
                    <tr>
                      <td>NO REGISTER</td>
                      <td class="pl-1 pr-1">:</td>
                      <td class="font-weight-bold">{{ user.noreg }}</td>
                    </tr>
                    <tr>
                      <td>Nama</td>
                      <td class="pl-1 pr-1">:</td>
                      <td>{{ user.name }}</td>
                    </tr>
                    <tr>
                      <td>INSTANSI</td>
                      <td class="pl-1 pr-1">:</td>
                      <td>{{ user.instansi }}</td>
                    </tr>
                    <tr>
                      <td>LOKASI </td>
                      <td class="pl-1 pr-1">:</td>
                      <td>{{ user.lokasi }}</td>
                    </tr>

                  </tbody>

                </div>
                <v-row>
                  <v-col cols="6">
                    <div class="mt-3 ml-5">
                      <img
                        :src="user.qrcode"
                        alt=""
                        srcset=""
                      >
                    </div>

                  </v-col>
                  <v-col cols="6">
                    <div>
                      <div class="btn-cetak">
                        <v-btn @click="barcode=true">Cetak Kartu</v-btn>
                      </div>
                    </div>
                  </v-col>

                </v-row>

              </v-img>

            </v-card>
          </v-col>
          <v-col cols="6">

          </v-col>
        </v-row>

      </v-col>
    </v-row>
    <!-- Tampilan Desktop
    <v-row class="justify-center mb-10 pl-5 pr-5">
      <div class="title-geoinfo">PETA KESELAMATAN</div>
      <v-col cols="12">
        <l-map
          style="height: 500px ; z-index:0 ;"
          :zoom="zoom"
          :center="center"
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

      </v-col>
    </v-row>

    <v-row class="ml-2 mr-2">
      <v-col cols="12">
        <permohonan-perbulan />
      </v-col>
    </v-row>

    <v-row class="pa-1">
      <v-col class="stats-widget-v3">
        <v-row :class="device.mobile ? `pa-1` : `pa-7`">
          <v-col :cols="device.mobile ? `12` : `4`">
            <v-card
              :color="this.theme.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6 box-statistik-title">JUMLAH RAMBU KONDISI BAIK</v-card-title>
                  <v-card-text style="height: ;100px">
                    <v-row class="justify-content-end">
                      <v-col cols="12">
                        <v-row class="justify-end text-lg-h5 mt-5">10.0000.0000,00</v-row>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <div class="subtitle-2 green--text">
                      Update At : last minute ago
                    </div>
                  </v-card-actions>
                </div>
                <div class="mr-5 mt-5">
                  <v-avatar
                    size="80"
                    class="elevation-2"
                    :color="theme.color + ` darken-1`"
                  >
                    <v-img src="/images/dosen1.png"></v-img>

                  </v-avatar>
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col :cols="device.mobile ? `12` : `4`">
            <v-card
              :color="this.theme.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6 box-statistik-title">JUMLAH RAMBU KONDISI RUSAK</v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-row class="justify-end text-lg-h5 mt-5">10.0000.0000,00</v-row>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <div class="subtitle-2 green--text">
                      Update At : last minute ago
                    </div>
                  </v-card-actions>
                </div>
                <div class="mr-5 mt-5">
                  <v-avatar
                    size="80"
                    class="elevation-2"
                    :color="theme.color + ` darken-1`"
                  >
                    <v-img src="/images/komunitas.png"></v-img>

                  </v-avatar>
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col :cols="device.mobile ? `12` : `4`">
            <v-card
              :color="this.theme.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6 box-statistik-title">TOTAL RAMBU YANG ADA</v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-row class="justify-end text-lg-h5 mt-5">25.0000.0000,00</v-row>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <div class="subtitle-2 green--text">
                      Update At : last minute ago
                    </div>
                  </v-card-actions>
                </div>
                <div class="mr-5 mt-5">
                  <v-avatar
                    size="80"
                    class="elevation-2"
                    :color="theme.color + ` darken-1`"
                  >
                    <v-img src="/images/dokumen.png"></v-img>
                  </v-avatar>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    -->
    <!--Tampilan Mobile-->
    <v-row v-show="device.mobile">
      <v-card class="dashboard-card">
        <v-col cols="12">
          <v-row class="dashboard-wellcome">
            <div class="dasboard-wellcome-name">
              {{ user.name }}
            </div>
            <div>
              {{ user.instansi }}
            </div>
          </v-row>
        </v-col>
        <v-row class="mt-5 mb-3 mr-2 ml-2">
          <v-carousel
            height="auto"
            hide-delimiters
          >
            <v-carousel-item
              v-for="(berita, i) in beritas"
              :key="color"
            >
              <v-img :src="`https://tangerangkab.go.id/images/`+ berita.url_foto"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-row>

        <div class="dashboard-main-content">
          <div class="dashboard-main-content-row ">
            <v-col cols=3>
              <v-card height="68">
                <div class="box-icon">
                  <v-icon
                    large
                    color="green"
                    class="box-icon-shadow"
                  >mdi-home-map-marker</v-icon>
                </div>
                <div class="box-title">
                  LOKASI
                </div>

              </v-card>
            </v-col>
            <v-col cols=3>
              <v-card height="68">
                <div class="box-icon">
                  <v-icon
                    large
                    color="orange"
                    class="box-icon-shadow"
                  >mdi-office-building-marker-outline</v-icon>
                </div>
                <div class="box-title">
                  HOTEL
                </div>

              </v-card>
            </v-col>
            <v-col cols=3>
              <v-card height="68">
                <div class="box-icon">
                  <v-icon
                    large
                    color="purple"
                    class="box-icon-shadow"
                  >mdi-heart-circle-outline</v-icon>
                </div>
                <div class="box-title">
                  WISATA
                </div>

              </v-card>
            </v-col>
            <v-col cols=3>
              <v-card
                height="68"
                @click="$router.push({name:'peserta-etiket'})"
              >
                <div class="box-icon">
                  <v-icon
                    large
                    color="cyan"
                    class="box-icon-shadow"
                  >mdi-data-matrix</v-icon>
                </div>
                <div class="box-title">
                  E-TIKET
                </div>

              </v-card>
            </v-col>
          </div>
        </div>

      </v-card>
    </v-row>

  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Flicking } from "@egjs/vue-flicking";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";

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
  name: "dashboard",

  components: {
    Flicking,
    LMap,
    LTileLayer,
    LMarker,
    VGeosearch,
    LIcon,
    LPopup,
    LTooltip,
  },

  data: () => ({
    num: 1,

    jmlpengajuan: 0,
    jmlterverifikasi: 0,
    jmlprosesediting: 0,
    jmlpenandatangan: 0,
    plugins: [new Fade(), new AutoPlay(500, "NEXT")],

    staf: {
      headers: [
        { text: "#", value: "num", width: 75 },
        { text: "STAF", value: "nama" },
        {
          text: "JML.PEKERJAAN",
          value: "jmlpekerjaan",
          width: 200,
          align: "right",
        },
        {
          text: "PROGRESS (%)",
          value: "progress",
          align: "center",
          width: 200,
        },
      ],
      records: [
        {
          id: 1,
          num: 1,
          nama: "Ujang Selamat",
          jmlpekerjaan: 20 + " Dokumen",
          progress: 25,
        },
        {
          id: 2,
          num: 2,
          nama: "Dudy Ali Fathan",
          jmlpekerjaan: 25 + " Dokumen",
          progress: 65,
        },
      ],
    },

    //un used
    datacollection: null,
    chartData: {
      Books: 24,
      Magazine: 30,
      Newspapers: 10,
    },

    jmlformasi: 0,
    jmlpelamar: 0,
    pelamars: [],
    pesans: [],

    search: null,
    jmlpegawai: 25,

    selected: [2],

    headers: [],

    headers2: [
      { text: "#", value: "num" },
      {
        text: "PROGRAM KEAHLIAN",
        align: "start",
        sortable: false,
        value: "jurusan",
      },
      { text: "BELUM TERVERIFIKASI", value: "jmlbelum" },
      { text: "SUDAH TERVERIFIKASI", value: "jmlsudah" },
    ],

    headers3: [
      { text: "#", value: "num" },
      {
        text: "PROGRAM KEAHLIAN",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "PILIHAN I", value: "jmlpil1" },
      { text: "PILIHAN II", value: "jmlpil2" },
    ],

    records: [],

    records2: [],

    records3: [],

    //property map
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 11,
    //-6.1716001, 106.6405384
    center: [-6.1716001, 106.6405384],

    geosearchOptions: {
      // Important part Here
      provider: new OpenStreetMapProvider(),
    },

    marker: {
      id: "m1",
      position: { lat: -6.1716001, lng: 106.6405384 },
      tooltip: "<h4>Lampu Merah</h4><p>Rambu Lampu Merah </p>",
      draggable: false,
      visible: true,
    },
    marker2: {
      id: "m2",
      position: { lat: -6.2546, lng: 106.6405384 },
      tooltip:
        "<h4>Lampu Merah 2</h4><p>Rambu Lampu Merah Stopan Pemda Tigaraksa </p><p>Kondisi Baik</p>",
      draggable: false,
      visible: true,
    },

    markers: [],

    beritas: [],
  }),
  computed: {
    ...mapState(["theme", "http", "device", "loading", "event", "user"]),
  },
  created() {
    this.setPage({
      crud: true,
      dataUrl: "api/dashboard",
      title: this.device.desktop ? "DASHBOARD" : "",
      subtitle: "Overview Data Application",
      breadcrumbs: [
        {
          text: "Dashboard",
          disabled: false,
          href: "dashboard",
        },
        {
          text: "Dashboard",
          disabled: false,
          href: "dashboard",
        },
      ],
    });

    this.fetchDashboard();
    this.fetchBerita();
  },
  mounted() {
    this.setPage({
      title: this.device.desktop ? "DASHBOARD" : "",
    });
  },
  methods: {
    ...mapActions([
      "setPage",
      "postAddNew",
      "postEdit",
      "postUpdate",
      "postConfirmDelete",
    ]),

    fetchBerita: async function () {
      try {
        let {
          data: { data },
        } = await this.http.get("api/berita");
        this.beritas = data;
      } catch (error) {}
    },

    fetchDashboard: async function () {
      let {
        data: { rambus },
      } = await this.http.get("api/dashboard");

      this.markers = rambus;
    },

    fetchPesan: async function () {
      let {
        data: { pesans },
      } = await this.http.get("api/dashboard-pesan");

      this.pesans = pesans;
    },

    fetchPerHari: async function () {
      let {
        data: { headers, records },
      } = await this.http.get("api/dashboard-perhari");

      this.headers = headers;
      this.records = records;
    },

    fethDataVerifikasi: async function () {
      let {
        data: { data },
      } = await this.http.get("api/dashboard-verifikasi");

      this.records2 = data;
    },

    fethDataPerjurusanPerPilihan: async function () {
      let {
        data: { datas },
      } = await this.http.get("api/dashboard-perjurusan-per-pilihan");

      this.records3 = datas;
    },
  },
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
.box-statistik-title {
  height: 100px;
  align-items: start;
}

.row.dashboard-wellcome {
  padding-left: 10px;
  font-size: 8pt;
  justify-content: center;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.dasboard-wellcome-name {
  font-size: 10pt;
  font-weight: 600;
}
.dashboard-main-content {
  height: 100vh;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: 10px;
}
.dashboard-main-content-row {
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 35vh;
  align-content: flex-start;
}
.box-icon {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.box-title {
  font-size: 7pt;
  display: flex;
  justify-content: center;
  font-weight: 600;
  margin-top: 5px;
}
i.box-icon-shadow {
  text-shadow: 1px 1px black;
}
.btn-cetak {
  display: flex;
  justify-content: flex-end;
  margin-top: 30%;
  margin-right: 20px;
}
.kartu-peserta-title-desktop {
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
