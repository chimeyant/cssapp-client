<template>
  <v-container
    fluid
    class="pt-0 grid-list-xl"
  >
    <v-flex
      row
      class="pl-3 pb-2 pt-5"
    >
      <v-icon :color="theme.color">dashboard</v-icon>
      <v-subheader class="text-h6"> DASHBOARD </v-subheader>
    </v-flex>
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
              color="#558B2F"
              dark
              class="animated bounce box-statistik"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6">TOTAL KEGIATAN</v-card-title>
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
                    <v-img src="/images/dosen1.png"></v-img>

                  </v-avatar>
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col :cols="device.mobile ? `12` : `4`">
            <v-card
              color="#558B2F"
              dark
              class="animated bounce box-statistik"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6">TOTAL PESERTA</v-card-title>
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
              color="#558B2F"
              dark
              class="animated bounce box-statistik"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6">TOTAL JURNAL</v-card-title>
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
    <!--
    <v-row class="pa-1 ml-3">
      <v-col class="stats-widget-v3">
        <h6 class="subtitle-2">Statistik Pekerjaan Staf</h6>
      </v-col>
      <v-col cols="12">
        <template>
          <v-data-table
            :headers="staf.headers"
            :items="staf.records"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.progress="{ value }">
              <v-progress-linear
                :color="theme.color"
                v-model="value"
                height="25"
              >
                <strong>{{ value }}%</strong>
              </v-progress-linear>
            </template>
          </v-data-table>
        </template>
      </v-col>
    </v-row>
    -->
  </v-container>
</template>
  

<script>
import { mapActions, mapState } from "vuex";
import PermohonanPerbulan from "../../../pages/chart/BarChart.vue";
import "animate.css";

export default {
  name: "supervisor-dashboard",

  components: {
    PermohonanPerbulan,
  },

  data: () => ({
    num: 1,

    jmlpengajuan: 0,
    jmlterverifikasi: 0,
    jmlprosesediting: 0,
    jmlpenandatangan: 0,

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
  }),
  computed: {
    ...mapState(["theme", "http", "device", "loading", "event"]),
  },
  created() {
    this.setPage({
      crud: true,
      dataUrl: "api/dashboard",
    });

    this.fetchDashboard();
  },
  mounted() {},
  methods: {
    ...mapActions([
      "setPage",
      "postAddNew",
      "postEdit",
      "postUpdate",
      "postConfirmDelete",
    ]),

    fetchDashboard: async function () {
      let {
        data: {
          status,
          message,
          jmlpengajuan,
          jmlterverifikasi,
          jmlprosesediting,
          jmlpenandatangan,
        },
      } = await this.http.get("api/supervisor/dashboard");

      this.jmlpengajuan = jmlpengajuan;
      this.jmlterverifikasi = jmlterverifikasi;
      this.jmlprosesediting = jmlprosesediting;
      this.jmlpenandatangan = jmlpenandatangan;
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
</style>
