<template>
  <div class="home pa-6 ">
    <v-flex
      row
      class="pb-2"
    >
      <v-icon :color="theme.color">mdi-bullhorn</v-icon>
      <v-subheader class="text-h6">
        <h4>LAPORAN PERLENGKAPAN JALAN DAN KEJADIAN LAKALANTAS</h4>
      </v-subheader>
    </v-flex>
    <v-flex class="pb-5 pl-7">
      <div class="grey--text mb-2">
        Seluruh Daftar Laporan Perlengkapan Jalan dan Kejadian Lakalantas Yang Tersedia
      </div>
    </v-flex>

    <v-row>
      <v-col cols="12">
        <v-card class="animated animate__backInUp">
          <v-card-title :class="`flex flex-row-reverse ` + theme.color + ` lighten-1`">
            <v-tooltip
              :color="theme.color"
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  small
                  icon
                  v-on="on"
                >
                  <v-icon
                    :color="theme.mode == 'dark' ? `white` : `black`"
                    @click="openNewForm"
                  >add_circle</v-icon>
                </v-btn>
              </template>
              <span>Tambah Data</span>
            </v-tooltip>
            <v-tooltip
              :color="theme.color"
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  small
                  icon
                  v-on="on"
                >
                  <v-icon
                    :color="theme.mode == 'dark' ? `white` : `black`"
                    @click="fetchRecords"
                  >refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh Data</span>
            </v-tooltip>

            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pencarian"
              single-line
              hide-details
              solo
              dense
              :color="theme.color"
              style="max-width: 350px"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="records"
            :items-per-page="10"
            class="elevation-2"
            :color="theme.color"
            :loading="loading.table"
            loading-text="Loading... Please wait"
            :search="search"
            show-select
          >
            <v-progress-linear
              slot="progress"
              :color="theme.color"
              height="1"
              indeterminate
            ></v-progress-linear>

            <template v-slot:[`item.lokasi`]="{ value }">
              <v-icon color="red">mdi-google-maps</v-icon>
            </template>

            <template v-slot:[`item.statusDisplay`]="{ value }">
              <v-chip
                small
                :color="value.color"
              >{{ value.text }}</v-chip>

            </template>
            <template v-slot:[`item.uuid`]="{ value }">
              <v-menu
                bottom
                origin="center center"
                transition="scale-transition"
              >
                <template v-slot:[`activator`]="{ on, attrs }">
                  <v-icon
                    :color="theme.color"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-dots-vertical-circle-outline
                  </v-icon>
                </template>

                <v-list>
                  <v-list-item @click="editRecord(value)">
                    <v-list-item-title>
                      <v-icon color="orange">mdi-pencil-circle</v-icon>Edit
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="postDeleteRecord(value)">
                    <v-list-item-title>
                      <v-icon color="red">mdi-delete-circle</v-icon>Hapus
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>

        </v-card>
      </v-col>
    </v-row>
    <v-col cols="12">
      <v-dialog
        transition="dialog-bottom-transition"
        v-model="form.new"
        :max-width="device.desktop ? `800px` : `100%`"
        persistent
      >
        <v-card>
          <v-toolbar
            :color="theme.color"
            :dark="theme.mode"
          >
            <v-icon class="mr-1">mdi-circle</v-icon> Formulir Permohonan Fitur
          </v-toolbar>
          <v-card-text class="mt-2">
            <v-col col="12">
              <v-select
                label="Jenis Laporan"
                outlined
                dense
                hide-details
                v-model="record.jenis_pengaduan_uuid"
                :items="jenispengaduans"
              ></v-select>
            </v-col>
            <v-col :cols="device.desktop ? `12`:`12`">
              <v-textarea
                label="Isi Laporan"
                outlined
                dense
                hide-details
                rows="2"
                v-model="record.content"
              ></v-textarea>
            </v-col>
            <v-col cols="12">

              <v-text-field
                label="Foto"
                append-outer-icon="attachment"
                v-model="foto"
                :color="theme.color"
                outlined
                dense
                @click:append-outer="uploadFile"
              ></v-text-field>

            </v-col>

            <v-row class="justify-center mb-5 mt-5 title">PETA LOKASI</v-row>
            <v-col>
              <v-img
                height="100%"
                width="100%"
              >

                <l-map
                  style="height: 300px;width: 100%;z-index:9999; "
                  :zoom="zoom"
                  :center="center"
                  @update:center="centerUpdated"
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
                    :key="marker.id"
                    :visible="marker.visible"
                    :draggable="marker.draggable"
                    :lat-lng.sync="marker.position"
                  >

                    <l-icon
                      iconSize=32
                      icon-url="/images/icon-marker-merah.png"
                    />
                    <l-popup :content="marker.tooltip" />
                    <l-tooltip :content="marker.tooltip" />
                  </l-marker>
                </l-map>

              </v-img>

            </v-col>

            <v-col cols="12">
              <v-row>

                <v-col :cols="device.desktop ? `6`:`12`">
                  <v-text-field
                    label="Garis Lintang"
                    outlined
                    dense
                    hide-details
                    v-model="record.lat"
                  ></v-text-field>
                </v-col>

                <v-col :cols="device.desktop ? `6`:`12`">
                  <v-text-field
                    label="Garis Bujur"
                    outlined
                    dense
                    hide-details
                    v-model="record.lng"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-end">
            <v-btn
              outlined
              :color="theme.color"
              v-show="!form.edit"
              @click="postAddNewRecord"
            >Kirim</v-btn>
            <v-btn
              outlined
              :color="theme.color"
              v-show="form.edit"
              @click="postUpdateRecord"
            >Kirim</v-btn>
            <v-btn
              outlined
              color="grey"
              @click="closeNewForm"
            >Batal</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </div>
</template>

<script lang="vue">
import { mapActions, mapState } from "vuex";
import "animate.css";
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
  name: "lokasi-rambu",
  components:{
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
    headers: [
      {
        text: "LAPORAN/KEJADIAN",
        align: "start",
        sortable: false,
        value: "content",
      },
      { text: "LOKASI", value: "lokasi", width:160, align:'center', sortable:false },
      { text: "STATUS", value: "statusDisplay", width:160, align:'center', sortable:false },
      { text: "AKSI", value: "uuid", width:100, sortable:false, align:'center', sortable:false },
    ],
    form: {
      new: false,
      edit: false,
    },
    search: null,
    path: null,

    rambus:[],
    kecamatans:[],
    desas:[],

    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 13,
    //-6.1716001, 106.6405384
    center: [-6.1716001, 106.6405384],

    geosearchOptions: {
      // Important part Here
      provider: new OpenStreetMapProvider(),
    },
    marker: {
      id: "m1",
      position: { lat: -6.1716001, lng: 106.6405384 },
      tooltip: "Pilih lokasi rambu",
      draggable: true,
      visible: true,
    },

    jenispengaduans: [],

    foto:null,

    kondisis:[
        {text:"Baik", value:"baik"},
        {text:"Rusak", value:"rusak"}
    ]
    
  }),
  computed: {
    ...mapState([
      "theme",
      "http",
      "device",
      "record",
      "records",
      "loading",
      "event",
      "snackbar"
    ]),
  },
  created() {
    this.setPage({
      crud: true,
      dataUrl: "api/keselamatan/laporan-keselamatan",
      pagination: false,
      key:"uuid"
    })
    this.fetchRecords();
    this.fetchJenisPengaduans()
  },
  mounted() {
    
  },
  methods: {
    ...mapActions([
      "setPage",
      "fetchRecords",
      "postAddNew",
      "postEdit",
      "postUpdate",
      "postConfirmDelete",
      "assignFileBrowse",
      "setLoading",
      "setRecord"
    ]),
    openNewForm: function () {
      this.setRecord({})
      this.form.new = true;
      this.form.edit = false;
       this.getUserPosition()
      this.centerUpdated( [-6.1716001, 106.6405384])
      setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);

    },
    closeNewForm: function () {
      this.form.new = false;
      this.form.edit = false;

    },
    
    postAddNewRecord: function (){
      this.postAddNew(this.record).then(()=>{
        this.fetchRecords()
        this.form.new= false
        
      })
    },
    editRecord: function(val) {
      this.postEdit(val).then(()=>{
        this.center = [this.record.lat, this.record.lng]
          this.marker.position = {
            lat: this.record.lat,
            lng: this.record.lng,
          };
          setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
      });
      this.form.new = true;
      this.form.edit = true;
      
    },
     postUpdateRecord: function() {
      this.postUpdate(this.record).then(() => {
        this.fetchRecords();
        this.form.new = false;
        this.form.edit = false;
      });
    },
    postDeleteRecord: function(val) {
      this.postConfirmDelete(val);
    },
    postDownload(val) {
      window.open(val, "__blank");
    },

    //fetch data combo rambu
   fetchJenisPengaduans: async function(){
        try {
            let {data}= await this.http.get("api/combo/jenis-pengaduan")
            this.jenispengaduans = data
        } catch (error) {
            
        }
   },

    fetchKecamatan: async function(){
        try {
            let {data}= await this.http.get("api/combo/kecamatan")
            this.kecamatans = data
        } catch (error) {
            
        }
    },

    fetchDesas: async function(){
        try {
            let {data}= await this.http.get("api/combo/desa/"+ this.record.district_uuid )
            this.desas = data
        } catch (error) {
            
        }
    },
    getUserPosition: async function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          this.center = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          this.center = [pos.coords.latitude, pos.coords.longitude]
          this.marker.position = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
        });
      }
    },
    centerUpdated (center) {
      this.center = center;
    },
    uploadFile: function () {
      this.assignFileBrowse({
        fileType: [".png",".jpg",".jpeg"],
        query: {
          doctype: "laporans",
        },
        callback: (response) => {
          setTimeout(() => {
            this.foto = response.name;
            this.record.foto_awal = response.name
            this.snackbar.color =this.theme.color
            this.snackbar.text = "Proses upload foto berhasil"
            this.snackbar.state = true
          }, 500);
        },
      });
    },
  },
  watch:{
    "marker.position": {
      handler() {
        this.record.lat = this.marker.position.lat;
        this.record.lng = this.marker.position.lng;
      },
      deep: true,
    },
    "district_uuid": {
      handler(){
        this.fetchDesas()
      }
    }
  }

};
</script>