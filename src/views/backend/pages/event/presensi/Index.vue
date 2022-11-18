<template>
  <div :class="device.desktop ? `home pa-6 grey lighten-4`:`home pa-0 grey lighten-4`">
    <v-row>
      <v-col cols="12">
        <v-card class="animated animate__backInUp rounded-0 ">
          <v-card-title :class="`flex flex-row-reverse ` + theme.color + ` lighten-1`">
            <v-tooltip
              :color="theme.color "
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  small
                  icon
                  v-on="on"
                  v-show="form.btnhelp"
                >
                  <v-icon
                    :color="theme.mode == 'dark' ? `white` : `black`"
                    @click=""
                  >mdi-help-circle</v-icon>
                </v-btn>
              </template>
              <span>Petunjuk Modul</span>
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
                  v-show="form.btnbulkdelete"
                >
                  <v-icon
                    :color="theme.mode == 'dark' ? `white` : `black`"
                    @click=""
                  >mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Hapus Data</span>
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
                  v-show="form.btnadd"
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
                    @click="downloadExcel"
                  >mdi-file-excel-outline</v-icon>
                </v-btn>
              </template>
              <span>Export Data</span>
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
                  v-show="form.btnprint"
                >
                  <v-icon
                    :color="theme.mode == 'dark' ? `white` : `black`"
                    @click=""
                  >mdi-printer</v-icon>
                </v-btn>
              </template>
              <span>Cetak Data</span>
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
                  v-show="form.btnrefresh"
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
            v-show="device.desktop"
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
            <template v-slot:item.progress="{ value }">
              <v-progress-linear
                :color="theme.color"
                v-model="value"
                height="25"
              >
                <strong>{{ value }}%</strong>
              </v-progress-linear>
            </template>

            <template v-slot:item.status="{ value }">
              <v-chip
                :color="value.color"
                small
              >{{ value.text }}</v-chip>
            </template>
            <template v-slot:item.id="{ value }">
              <v-menu
                bottom
                origin="center center"
                transition="scale-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    :color="theme.color"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-dots-vertical-circle-outline
                  </v-icon>
                </template>

                <v-list>
                  <v-list-item @click="setOke(value)">
                    <v-list-item-title>
                      <v-icon color="green">mdi-shield-check</v-icon>Set Ok
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    @click="setCancel(value)"
                    v-show="form.btndelete"
                  >
                    <v-list-item-title>
                      <v-icon color="red">mdi-shield-off</v-icon> Set Pembatalan
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
          <!--Tampilan Untuk Mobile -->

          <v-list
            subheader
            single-line
            v-show="device.mobile"
          >

            <v-list-item-group
              v-model="settings"
              multiple
              active-class=""
            >
              <v-list-item
                v-for="item in filterItems"
                :key="item.id"
                style="border: ;1px solid"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.instansi }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-menu
                      bottom
                      origin="center center"
                      transition="scale-transition"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          :color="theme.color"
                          v-bind="attrs"
                          v-on="on"
                        >
                          mdi-dots-vertical-circle-outline
                        </v-icon>
                      </template>
                    </v-menu>
                  </v-list-item-action>

                </template>
              </v-list-item>

            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-col cols="12">
      <v-dialog
        transition="dialog-bottom-transition"
        v-model="form.new"
        :max-width="device.desktop ? `600px` : `100%`"
        persistent
        :fullscreen="device.mobile"
      >
        <v-card class="rounded-0">
          <v-toolbar
            :color="theme.color"
            :dark="theme.mode"
          >
            <v-icon class="mr-1">mdi-circle</v-icon> Formulir Pengaturan Hotel
          </v-toolbar>
          <v-card-text class="mt-2">

          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-end">

          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </div>
</template>
    
    <script>
import { mapActions, mapState } from "vuex";
import "animate.css";
import XLSX from "xlsx";

export default {
  name: "daftar-peserta",
  components: {},
  data: () => ({
    num: 1,
    headers: [
      {
        text: "NO. REGISTRASI",
        align: "start",
        sortable: false,
        value: "noreg",
        width: 150,
      },
      {
        text: "NAMA",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "JABATAN", value: "jabatan", align: "left" },
      { text: "INSTANSI", value: "instansi", align: "left" },
      {
        text: "WAKTU KEDATANGAN",
        value: "waktu",
        align: "center",
        sortable: false,
      },
    ],
    form: {
      new: false,
      edit: false,
      btnrefresh: true,
      btnadd: false,
      btnprint: false,
      btnexport: false,
      btnbulkdelete: false,
      btnedit: false,
      btndelete: false,
      btnhelp: false,
    },
    search: null,
    path: null,
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
      "snackbar",
    ]),
    filterItems() {
      if (this.search != null) {
        return this.records.filter((item) => {
          return (
            item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        return this.records;
      }
    },
  },
  created() {
    this.setPage({
      crud: true,
      dataUrl: "api/event/presensi",
      pagination: false,
      title: "DAFTAR HADIR PESERTA",
      subtitle: "Berikut Daftar Seluruh Daftar Hadir Peserta Yang Tersedia",
      breadcrumbs: [
        {
          text: "Daftar Hadir",
          disabled: false,
          href: "hotel",
        },
        {
          text: "Peserta",
          disabled: false,
          href: "event-peserta",
        },
      ],
    });
    this.fetchRecords();
  },
  mounted() {},
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
      "setRecord",
    ]),
    openNewForm: function () {
      this.setRecord({});
      this.form.new = true;
      this.form.edit = false;
    },
    closeNewForm: function () {
      this.form.new = false;
      this.form.edit = false;
    },
    openEditForm: function () {
      this.form.new = true;
      this.form.edit = true;
    },
    postAddNewRecord: function () {
      this.record.foto_files = this.foto.records;
      this.postAddNew(this.record).then(() => {
        this.fetchRecords();
        this.form.new = false;
      });
    },
    editRecord: function (val) {
      this.postEdit(val);
      this.form.new = true;
      this.form.edit = true;
    },
    postUpdateRecord: function () {
      this.postUpdate(this.record).then(() => {
        this.fetchRecords();
        this.form.new = false;
        this.form.edit = false;
      });
    },
    postDeleteRecord: function (val) {
      this.postConfirmDelete(val);
    },
    uploadFile: function () {
      this.assignFileBrowse({
        fileType: [".png", ".jpg", ".jpeg"],
        query: {
          doctype: "documents",
        },
        callback: (response) => {
          setTimeout(() => {
            const row = {};
            row["id"] = response.name;
            row["name"] = response.name;
            this.foto.records.push(row);
          }, 500);
        },
      });
    },
    setOke: async function (val) {
      try {
        this.setLoading({ dialog: true, text: "Set Oke..." });
        let {
          data: { status, message },
        } = await this.http.post("api/event/set-oke", { id: val });
        if (!status) {
          this.snackbar.color = "red";
          this.snackbar.text = message;
          this.snackbar.state = true;
          return;
        }

        this.snackbar.color = this.theme.color;
        this.snackbar.text = message;
        this.snackbar.state = true;
        this.fetchRecords();
      } catch (error) {
        this.snackbar.color = "red";
        this.snackbar.text = "Opps..., terjadi kesalahan " + error;
        this.snackbar.state = true;
      } finally {
        this.setLoading({ dialog: false, text: "" });
      }
    },
    setCancel: async function (val) {
      try {
        this.setLoading({ dialog: true, text: "Set Pembatalan..." });
        let {
          data: { status, message },
        } = await this.http.post("api/event/set-cancel", { id: val });
        if (!status) {
          this.snackbar.color = "red";
          this.snackbar.text = message;
          this.snackbar.state = true;
          return;
        }

        this.snackbar.color = this.theme.color;
        this.snackbar.text = message;
        this.snackbar.state = true;
        this.fetchRecords();
      } catch (error) {
        this.snackbar.color = "red";
        this.snackbar.text = "Opps..., terjadi kesalahan " + error;
        this.snackbar.state = true;
      } finally {
        this.setLoading({ dialog: false, text: "" });
      }
    },
    downloadExcel: async function () {
      try {
        this.setLoading({
          dialog: true,
          text: "Proses Download Data",
        });
        let { data } = await this.http.post("api/event/presensi-export-data");

        var dataxls = XLSX.utils.json_to_sheet(data);

        // A workbook is the name given to an Excel file
        var wb = XLSX.utils.book_new(); // make Workbook of Excel

        // add Worksheet to Workbook
        // Workbook contains one or more worksheets
        XLSX.utils.book_append_sheet(wb, dataxls, "DAFTAR KEHADIRAN"); // sheetAName is name of Worksheet
        //XLSX.utils.book_append_sheet(wb, pokemonWS, "pokemons");

        // export Excel file
        XLSX.writeFile(wb, "daftar-peserta.xlsx"); // name of the file is 'book.xlsx'
      } catch (error) {
      } finally {
        this.setLoading({
          dialog: false,
          text: "",
        });
      }
    },
  },
  watch: {},
};
</script>