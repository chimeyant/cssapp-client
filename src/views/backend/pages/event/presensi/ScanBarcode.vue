<template>
  <div :class="device.desktop ?`home pa-6`:`home pa-0`">

    <v-row>
      <v-spacer v-if="device.desktop"></v-spacer>
      <v-col cols="device.desktop ? 6 : 12">
        <v-card
          class="mx-auto animated animate__fadeInUp"
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="150px"
            :src="info.app_background"
          >
            <v-card-title>SCAN BARCODE</v-card-title>
          </v-img>

          <v-card-text class="text--primary mt-3">
            <v-text-field
              label="SCAN BARCODE DISINI"
              :color="theme.color"
              v-model="barcode"
              outlined
              dense
              v-on:keyup.enter="postScanBarcode"
            ></v-text-field>
            <br>
            <div class="mb-10">

              <tbody class="">
                <tr>
                  <td>NO. REGISTER</td>
                  <td class="pl-1 pr-1">:</td>
                  <td>{{ data.noreg }}</td>
                </tr>
                <tr>
                  <td>NAMA</td>
                  <td class="pl-1 pr-1">:</td>
                  <td><b>{{ data.name }}</b></td>
                </tr>
                <tr>
                  <td>INSTANSI</td>
                  <td class="pl-1 pr-1">:</td>
                  <td>{{ data.instansi }}</td>
                </tr>
                <tr>
                  <td>JABATAN</td>
                  <td class="pl-1 pr-1">:</td>
                  <td>{{ data.jabatan }}</td>
                </tr>
                <tr>
                  <td>KABUPATEN/KOTA</td>
                  <td class="pl-1 pr-1">:</td>
                  <td>{{ data.kabupaten }}</td>
                </tr>
              </tbody>
            </div>
            <v-row class="justify-center">
              <div
                v-show="status"
                :class="color=='green'?  `mt-10 mb-5 silahkan-masuk-green `:`mt-10 mb-5 silahkan-masuk-blue`"
              >
                SILAHKAN MASUK
              </div>
            </v-row>
          </v-card-text>

        </v-card>
      </v-col>
      <v-spacer v-if="device.desktop"></v-spacer>
    </v-row>
  </div>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  data: () => ({
    num: 1,
    headers: [
      { text: "#", value: "num" },
      {
        text: "TINGKAT",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "KETERANGAN", value: "description" },
      { text: "OPSI", value: "id" },
    ],

    search: null,
    data: {
      noreg: null,
      name: null,
      instansi: null,
      jabatan: null,
      kabupaten: null,
    },
    barcode: "REG-2022.",
    color: "red",
    status: false,
  }),
  computed: {
    ...mapState(["theme", "http", "device", "record", "snackbar", "info"]),
  },
  created() {
    this.setPage({
      crud: true,
      dataUrl: "api/",
      title: "SCAN BARCODE",
      subtitle: "Berikut Formulir Untuk Scan Barcode Kedatangan",
      breadcrumbs: [
        {
          text: "Event",
          disabled: false,
          href: "",
        },
        {
          text: "Scan Barcode",
          disabled: false,
          href: "event-scan-barcode",
        },
      ],
    });
  },
  mounted() {},
  methods: {
    ...mapActions(["setPage", "setLoading"]),
    postScanBarcode: async function () {
      try {
        this.setLoading({ dialog: true, text: "Proses kedatangan..." });
        let {
          data: { success, message, data },
        } = await this.http.post("api/event/scan-barcode", {
          barcode: this.barcode,
        });
        if (!success) {
          this.snackbar.color = "red";
          this.snackbar.text = message;
          this.snackbar.state = true;
          this.status = success;
          this.data = data;
          return;
        }

        this.data = data;
        this.status = success;
        if (this.color == "green") {
          this.color = "blue";
        } else {
          this.color = "green";
        }
        this.barcode = "REG-2022.";
      } catch (error) {
        this.snackbar.color = "red";
        this.snackbar.text = "Opps..., terjadi kesalahan " + error;
        this.snackbar.state = true;
      } finally {
        this.setLoading({ dialog: false, text: "" });
      }
    },
  },
};
</script>

<style>
.silahkan-masuk-blue {
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  color: blue;
}
.silahkan-masuk-green {
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  color: green;
}
</style>
  