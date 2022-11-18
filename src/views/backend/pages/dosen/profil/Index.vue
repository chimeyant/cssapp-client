<template>
  <div class="home pa-6">
    <v-flex
      row
      class="pb-2"
    >
      <v-icon :color="theme.color">settings</v-icon>
      <v-subheader class="text-h6">
        <h4>PROFIL DOSEN | PENGAJAR</h4>
      </v-subheader>
    </v-flex>
    <v-flex class="pb-5 pl-7">
      <div class="grey--text mb-2">
        Informasi Yang dengan identitas dosen atau pengajar
      </div>
    </v-flex>

    <v-row class="pa-1">
      <v-spacer></v-spacer>
      <v-col :cols="device.desktop ? `12` : `12`">
        <v-card class="animated animate__fadeInUp">
          <v-toolbar
            :color="theme.color"
            :dark="theme.mode"
          >
            <v-icon class="mr-1">mdi-circle</v-icon>Formulir Identitas
          </v-toolbar>
          <v-col cols=12>

            <div>
              <step-progress
                :steps="mySteps"
                :current-step="currentStep"
                icon-class="mdi mdi-check"
                :activeColor="theme.color"
                lineThickness="7"
              ></step-progress>
            </div>
          </v-col>
          <v-card-text
            v-show="cardStep==0"
            class=""
          >
            <v-col cols=12>
              <v-row class="mt3">
                <v-col :cols="device.desktop ? `10` : `12`">
                  <v-col cols=12>
                    <v-text-field
                      label="Nama Lengkap"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.name"
                      :filled="record.name ? true: false"
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-row>
                      <v-col cols="6">
                        <v-select
                          label="Jenis Kelamin"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.jenis_kelamin"
                          :items="gens"
                          :filled="record.jenis_kelamin ? true:false"
                        ></v-select>
                      </v-col>
                      <v-col cols=3>
                        <v-text-field
                          label="Gelar Depan"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.gelar_depan"
                          :filled="record.gelar_depan ? true: false"
                        ></v-text-field>
                      </v-col>
                      <v-col cols=3>
                        <v-text-field
                          label="Gelar Belakang"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.gelar_belakang"
                          :filled="record.gelar_belakang ? true: false"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="NIK (Nomor Induk Kependudukan"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.nik"
                      :filled="record.nik ? true: false"
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="NIDN"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.nidn"
                      :filled="record.nidn ? true: false"
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-row>
                      <v-col cols=9>
                        <v-text-field
                          label="Tempat Lahir"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.tempat_lahir"
                          :filled="record.tempat_lahir ? true: false"
                        ></v-text-field>
                      </v-col>
                      <v-col cols=3>
                        <v-text-field
                          label="Tanggal Lahir"
                          outlined
                          dense
                          type="date"
                          hide-details
                          :color="theme.color"
                          v-model="record.tanggal_lahir"
                          :filled="record.tanggal_lahir ? true: false"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="Email"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.email"
                      :filled="record.email ? true: false"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-select
                      label="Pendidikan"
                      :color="theme.color"
                      outlined
                      dense
                      hide-details
                      v-model="record.pendidikan_id"
                      :items="pendidikans"
                    ></v-select>
                  </v-col>
                  <v-col cols=12>
                    <v-row>
                      <v-col cols="11">
                        <v-autocomplete
                          label="Intansi/Kampus"
                          outlined
                          dense
                          hide-details
                          v-model="record.instansi_id"
                          :items="instansis"
                          :color="theme.color"
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="1">
                        <v-btn
                          icon
                          @click="openFormInstansi()"
                        >
                          <v-icon :color="theme.color">mdi-plus-circle</v-icon>
                        </v-btn>
                      </v-col>

                    </v-row>
                  </v-col>
                  <v-col cols=12>
                    <v-textarea
                      label="Mata Kuliah yang diajarkan"
                      outlined
                      dense
                      hide-details
                      rows=3
                      v-model="record.mata_kuliah"
                      :color="theme.color"
                    >{{ record.mata_kuliah }}</v-textarea>
                  </v-col>
                  <v-col cols=12>
                    <v-textarea
                      label="Ketertarikan Materi"
                      outlined
                      dense
                      hide-details
                      rows=3
                      v-model="record.interest"
                      :color="theme.color"
                    >{{record.interest}}</v-textarea>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="Nomor Telpon"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.telpon"
                      :filled="record.telpon ? true: false"
                      :type="phone"
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-textarea
                      label="Alamat"
                      outlined
                      dense
                      hide-details
                      rows=3
                      v-model="record.alamat"
                      :color="theme.color"
                    ></v-textarea>
                  </v-col>
                </v-col>
                <v-col :cols="device.desktop ? `2` : `12`">
                  <v-col cols="12">
                    <v-img
                      :class="[theme + ' lighten-2 with-backdrop']"
                      :aspect-ratio="3 / 4"
                      :src="foto"
                      :lazy-src="foto"
                    >
                      <div
                        class="
                        d-flex
                        flex-column
                        align-center
                        justify-center
                        user-select-none
                      "
                        style="height: 100%"
                      >
                        <div style="
                          position: absolute;
                          right: 8px;
                          bottom: 8px;
                          height: 36px;
                          width: 36px;
                        ">
                          <v-btn
                            icon
                            dark
                            @click="uploadFoto"
                          >
                            <v-icon>photo_camera</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-img>
                    <center>Foto 3x4 Max: 2Mb</center>
                  </v-col>
                </v-col>
              </v-row>

            </v-col>

          </v-card-text>
          <v-card-text v-show="cardStep==1">
            <v-col cols=12>
              <v-data-table
                :headers="documents.headers"
                :items="documents.records"
                :items-per-page="10"
                class="elevation-2"
                :color="theme.color"
                :loading="loading.table"
                loading-text="Loading... Please wait"
                :search="search"
              >
                <v-progress-linear
                  slot="progress"
                  :color="theme.color"
                  height="1"
                  indeterminate
                ></v-progress-linear>
                <template v-slot:item.name="{ value }">
                  <v-badge
                    v-if="value.wajib"
                    color="red"
                    content="Wajib"
                  >
                    {{ value.name }}
                  </v-badge>
                  <span v-else>
                    {{ value.name }}
                  </span>
                </template>
                <template v-slot:item.status="{ value }">
                  <v-chip
                    small
                    :color="value.color"
                  >{{value.text}}</v-chip>
                </template>
                <template v-slot:item.aksi="{ value }">
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
                      >mdi-dots-vertical-circle-outline</v-icon>
                    </template>

                    <v-list>
                      <v-list-item @click="openFormUploadDokumen(value)">
                        <v-list-item-title>
                          <v-icon color="green">mdi-cloud-upload</v-icon> Upload Dokumen
                        </v-list-item-title>
                      </v-list-item>

                    </v-list>
                  </v-menu>
                </template>
              </v-data-table>
            </v-col>
          </v-card-text>
          <v-card-text v-show="cardStep==2">

            <v-col cols="12">
              <div class="text-h5 text-center">SILAHKAN MENUNGGU PROSES VERIFIKASI</div>
            </v-col>
            <v-col cols=12>
              <v-row class="mt3">
                <v-col :cols="device.desktop ? `10` : `12`">
                  <v-col cols=12>
                    <v-text-field
                      label="Nama Lengkap"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.name"
                      :filled="record.name ? true: false"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-row>
                      <v-col cols="6">
                        <v-select
                          label="Jenis Kelamin"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.jenis_kelamin"
                          :items="gens"
                          :filled="record.jenis_kelamin ? true:false"
                          disabled
                        ></v-select>
                      </v-col>
                      <v-col cols=3>
                        <v-text-field
                          label="Gelar Depan"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.gelar_depan"
                          :filled="record.gelar_depan ? true: false"
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col cols=3>
                        <v-text-field
                          label="Gelar Belakang"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.gelar_belakang"
                          :filled="record.gelar_belakang ? true: false"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="NIK (Nomor Induk Kependudukan"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.nik"
                      :filled="record.nik ? true: false"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="NIDN"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.nidn"
                      :filled="record.nidn ? true: false"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-row>
                      <v-col cols=9>
                        <v-text-field
                          label="Tempat Lahir"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.tempat_lahir"
                          :filled="record.tempat_lahir ? true: false"
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col cols=3>
                        <v-text-field
                          label="Tanggal Lahir"
                          outlined
                          dense
                          type="date"
                          hide-details
                          :color="theme.color"
                          v-model="record.tanggal_lahir"
                          :filled="record.tanggal_lahir ? true: false"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="Email"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.email"
                      :filled="record.email ? true: false"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-select
                      label="Pendidikan"
                      :color="theme.color"
                      outlined
                      dense
                      hide-details
                      v-model="record.pendidikan_id"
                      :items="pendidikans"
                      disabled
                    ></v-select>
                  </v-col>
                  <v-col cols=12>
                    <v-autocomplete
                      label="Intansi/Kampus"
                      outlined
                      dense
                      hide-details
                      v-model="record.instansi_id"
                      :items="instansis"
                      :color="theme.color"
                      disabled
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols=12>
                    <v-textarea
                      label="Mata Kuliah yang diajarkan"
                      outlined
                      dense
                      hide-details
                      rows=3
                      v-model="record.mata_kuliah"
                      :color="theme.color"
                      disabled
                    >{{ record.mata_kuliah }}</v-textarea>

                  </v-col>
                  <v-col cols=12>
                    <v-textarea
                      label="Ketertarikan Materi"
                      outlined
                      dense
                      hide-details
                      rows=3
                      v-model="record.interest"
                      :color="theme.color"
                      disabled
                    >{{record.interest}}</v-textarea>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="Nomor Telpon"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.telpon"
                      :filled="record.telpon ? true: false"
                      :type="phone"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-textarea
                      label="Alamat"
                      outlined
                      dense
                      hide-details
                      rows=3
                      v-model="record.alamat"
                      :color="theme.color"
                      disabled
                    ></v-textarea>
                  </v-col>
                </v-col>
                <v-col :cols="device.desktop ? `2` : `12`">
                  <v-col cols="12">
                    <v-img
                      :class="[theme + ' lighten-2 with-backdrop']"
                      :aspect-ratio="3 / 4"
                      :src="foto"
                      :lazy-src="foto"
                    >

                    </v-img>

                  </v-col>
                </v-col>
              </v-row>

            </v-col>
          </v-card-text>
          <v-card-text v-show="cardStep==5">
            <v-col cols="12">
              <div class="text-h5 text-center">IDENTITAS ANDA</div>
            </v-col>
            <v-col cols=12>
              <v-row class="mt3">
                <v-col :cols="device.desktop ? `10` : `12`">
                  <v-col cols=12>
                    <v-text-field
                      label="Nama Lengkap"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.name"
                      :filled="record.name ? true: false"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-row>
                      <v-col cols="6">
                        <v-select
                          label="Jenis Kelamin"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.jenis_kelamin"
                          :items="gens"
                          :filled="record.jenis_kelamin ? true:false"
                          disabled
                        ></v-select>
                      </v-col>
                      <v-col cols=3>
                        <v-text-field
                          label="Gelar Depan"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.gelar_depan"
                          :filled="record.gelar_depan ? true: false"
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col cols=3>
                        <v-text-field
                          label="Gelar Belakang"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.gelar_belakang"
                          :filled="record.gelar_belakang ? true: false"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="NIK (Nomor Induk Kependudukan"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.nik"
                      :filled="record.nik ? true: false"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="NIDN"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.nidn"
                      :filled="record.nidn ? true: false"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-row>
                      <v-col cols=9>
                        <v-text-field
                          label="Tempat Lahir"
                          outlined
                          dense
                          hide-details
                          :color="theme.color"
                          v-model="record.tempat_lahir"
                          :filled="record.tempat_lahir ? true: false"
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col cols=3>
                        <v-text-field
                          label="Tanggal Lahir"
                          outlined
                          dense
                          type="date"
                          hide-details
                          :color="theme.color"
                          v-model="record.tanggal_lahir"
                          :filled="record.tanggal_lahir ? true: false"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="Email"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.email"
                      :filled="record.email ? true: false"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-select
                      label="Pendidikan"
                      :color="theme.color"
                      outlined
                      dense
                      hide-details
                      v-model="record.pendidikan_id"
                      :items="pendidikans"
                      disabled
                    ></v-select>
                  </v-col>
                  <v-col cols=12>
                    <v-row>
                      <v-col cols="10">
                        <v-autocomplete
                          label="Intansi/Kampus OKE"
                          outlined
                          dense
                          hide-details
                          v-model="record.instansi_id"
                          :items="instansis"
                          :color="theme.color"
                          disabled
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols=12>
                    <v-textarea
                      label="Mata Kuliah yang diajarkan"
                      outlined
                      dense
                      hide-details
                      rows=3
                      v-model="record.mata_kuliah"
                      :color="theme.color"
                      disabled
                    >{{ record.mata_kuliah }}</v-textarea>

                  </v-col>
                  <v-col cols=12>
                    <v-textarea
                      label="Ketertarikan Materi"
                      outlined
                      dense
                      hide-details
                      rows=3
                      v-model="record.interest"
                      :color="theme.color"
                      disabled
                    >{{record.interest}}</v-textarea>
                  </v-col>
                  <v-col cols=12>
                    <v-text-field
                      label="Nomor Telpon"
                      outlined
                      dense
                      hide-details
                      :color="theme.color"
                      v-model="record.telpon"
                      :filled="record.telpon ? true: false"
                      :type="phone"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols=12>
                    <v-textarea
                      label="Alamat"
                      outlined
                      dense
                      hide-details
                      rows=3
                      v-model="record.alamat"
                      :color="theme.color"
                      disabled
                    ></v-textarea>
                  </v-col>
                </v-col>
                <v-col :cols="device.desktop ? `2` : `12`">
                  <v-col cols="12">
                    <v-img
                      :class="[theme + ' lighten-2 with-backdrop']"
                      :aspect-ratio="3 / 4"
                      :src="foto"
                      :lazy-src="foto"
                    >

                    </v-img>

                  </v-col>
                </v-col>
              </v-row>

            </v-col>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="mt-5">
            <v-col cols=6>
              <v-btn
                v-show="cardStep==1"
                outlined
                :color="theme.color"
                @click="prevStep"
              >KEMBALI</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="text-right">
              <v-btn
                outlined
                :color="theme.color"
                @click="potsUpdate"
                v-show="cardStep <= 1"
              >SIMPAN</v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-col cols="12">
      <v-dialog
        transition="dialog-bottom-transition"
        v-model="documents.form.show"
        :max-width="device.desktop ? `600px` : `100%`"
        persistent
      >
        <v-card>
          <v-toolbar
            :color="theme.color"
            :dark="theme.mode"
          >
            <v-icon class="mr-1">mdi-circle</v-icon>Formulir Dokumen Persyaratan
          </v-toolbar>
          <v-card-text class="mt-2">

            <v-col col="12">
              <v-text-field
                outlined
                :color="theme.color"
                :hide-details="device.desktop"
                label="Nama Dokumen"
                v-model="documents.record.name"
                :filled="documents.record.name ? true:false"
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="File PDF (Max: 2 MB)"
                append-outer-icon="attachment"
                v-model="documents.record.dok"
                :color="documents.color"
                outlined
                dense
                @click:append-outer="uploadFile"
              ></v-text-field>
            </v-col>

          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-end">

            <v-btn
              outlined
              :color="theme.color"
              @click="postUpdateDokumen()"
            >Kirim</v-btn>
            <v-btn
              outlined
              color="grey"
              @click="documents.form.show =false"
            >Batal</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>

    <v-col cols="12">
      <v-dialog
        transition="dialog-bottom-transition"
        v-model="instansi.form.show"
        :max-width="device.desktop ? `600px` : `100%`"
        persistent
      >
        <v-card>
          <v-toolbar
            :color="theme.color"
            :dark="theme.mode"
          >
            <v-icon class="mr-1">mdi-circle</v-icon>Formulir Dokumen Persyaratan
          </v-toolbar>
          <v-card-text class="mt-2">

            <v-col col="12">
              <v-text-field
                outlined
                :color="theme.color"
                :hide-details="device.desktop"
                label="Nama Instansi"
                v-model="instansi.record.name"
                :filled="instansi.record.name ? true:false"
                dense
              ></v-text-field>
            </v-col>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-end">

            <v-btn
              outlined
              :color="theme.color"
              @click="postTambahInstansi()"
            >Tambah</v-btn>
            <v-btn
              outlined
              color="grey"
              @click="instansi.form.show =false"
            >Batal</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2";
import StepProgress from "vue-step-progress";

// import the css (OPTIONAL - you can provide your own design)
//import "vue-step-progress/dist/main.css";

export default {
  name: "dosen-profil",
  components: {
    "step-progress": StepProgress,
  },

  data: () => ({
    dialog: false,
    foto: "/",
    mySteps: [
      "Isi Identitas",
      "Dokumen Persyaratan",
      "Menunggu Verifikasi",
      "Selesai",
    ],
    currentStep: 0,
    gens: [
      { text: "Laki-laki", value: "L" },
      { text: "Perempuan", value: "P" },
    ],
    pendidikans: [],
    instansis: [],
    cardStep: 0,

    documents: {
      headers: [
        { text: "#", value: "num", width: 50, align: "right" },

        { text: "DOKUMEN", value: "name" },
        {
          text: "STATUS",
          value: "status",
          align: "center",
          width: 100,
          sortable: false,
        },

        {
          text: "AKSI",
          value: "aksi",
          width: 100,
          align: "center",
          sortable: false,
        },
      ],

      form: {
        show: false,
      },

      records: [],
      record: {
        dok: null,
      },
    },

    instansi: {
      form: {
        show: false,
      },
      record: {},
    },
  }),

  computed: {
    ...mapState([
      "theme",
      "http",
      "device",
      "loading",
      "event",
      "snackbar",
      "record",
    ]),
  },
  created() {
    this.setPage({
      crud: true,
      dataUrl: "api/dosen/profil",
    });
    this.fetchRecord();
    this.fetchDocuments();
    this.fetchPendidikan();
    this.fetchInstansi();
  },
  mounted() {},
  methods: {
    ...mapActions([
      "setPage",
      "assignFileBrowse",
      "getUserInfo",
      "fetchRecords",
      "setTheme",
      "getAppInfo",
      "setLoading",
      "setRecord",
    ]),

    fetchRecord: async function () {
      let { data } = await this.http.get("api/dosen/profil");

      this.setRecord(data);
      this.currentStep = this.record.status ? Number(this.record.status) : 0;
      this.cardStep = this.record.status ? Number(this.record.status) : 0;
      this.foto = data.foto_path;
    },
    potsUpdate: async function () {
      if (this.currentStep == 0) {
        try {
          this.setLoading({
            dialog: true,
            text: "Proses simpan data identitas",
          });
          let {
            data: { status, message },
          } = await this.http.post("api/dosen/profil", this.record);
          if (!status) {
            this.snackbar.color = "red";
            this.snackbar.text = message;
            this.snackbar.state = true;
            return;
          }
          this.snackbar.color = "green";
          this.snackbar.text = message;
          this.snackbar.state = true;
          this.fetchRecord();
          this.fetchDocuments();
        } catch (error) {
          this.snackbar.color = "red";
          this.snackbar.text = "Opps..., terjadi kesalahan " + error;
          this.snackbar.state = true;
        } finally {
          this.setLoading({ dialog: false, text: "" });
        }
      }
      if (this.currentStep == 1) {
        try {
          this.setLoading({ dialog: true, text: "Proses simpan dokumen" });
          let {
            data: { status, message },
          } = await this.http.post("api/dosen/update-dokumen-status");
          if (!status) {
            this.snackbar.color = "red";
            this.snackbar.text = message;
            this.snackbar.state = true;
            return;
          }
          this.snackbar.color = this.theme.color;
          this.snackbar.text = message;
          this.snackbar.state = true;
          this.fetchRecord();
          this.fetchDocuments();
        } catch (error) {
          this.snackbar.color = "red";
          this.snackbar.text = "Opps..., terjadi kesalahan " + error;
          this.snackbar.state = true;
        } finally {
          this.setLoading({ dialog: false, text: false });
        }
      }
    },
    fetchUpdate: async function () {
      try {
        let {
          data: { status, message, data },
        } = await this.http.post(
          "api/master-data/app-info/1?_method=PUT",
          this.record
        );

        if (!status) {
          this.snackbar.color = "red";
          this.snackbar.text = message;
          this.snackbar.state = true;
          return;
        }

        this.snackbar.color = this.theme.color;
        this.snackbar.text = message;
        this.snackbar.state = true;

        this.record = data;
        this.fetchRecord();
        this.getUserInfo();
      } catch (error) {
        this.snackbar.color = "red";
        this.snackbar.text = error;
        this.snackbar.state = true;
      }
    },

    editBackground: function () {
      this.assignFileBrowse({
        fileType: [".jpg", ".jpeg", ".png"],
        query: {
          doctype: "apps",
        },
        callback: (response) => {
          this.bg = response.path;
          this.record.app_background = response.name;
        },
      });
    },

    editSidebar: function () {
      this.assignFileBrowse({
        fileType: [".jpg", ".jpeg", ".png"],
        query: {
          doctype: "apps",
        },
        callback: (response) => {
          this.bg_nav = response.path;
          this.record.app_nav = response.name;
        },
      });
    },

    uploadFoto: function () {
      this.assignFileBrowse({
        fileType: [".jpg", ".jpeg", ".png"],
        query: {
          doctype: "dosen",
        },
        callback: (response) => {
          setTimeout(() => {
            this.foto = response.path;
            this.record.foto = response.name;
          }, 1000);
        },
      });
    },

    fetchPendidikan: async function () {
      try {
        let { data } = await this.http.post("api/master-data/combo/pendidikan");
        this.pendidikans = data;
      } catch (error) {}
    },

    fetchInstansi: async function () {
      try {
        let { data } = await this.http.post("api/master-data/combo/instansi");
        this.instansis = data;
      } catch (error) {}
    },

    prevStep: function () {
      this.currentStep = Number(this.currentStep) - 1;
      this.cardStep = this.currentStep;
    },

    fetchDocuments: async function () {
      try {
        let { data } = await this.http.get("api/dosen/document");
        this.documents.records = data;
      } catch (error) {}
    },

    openFormUploadDokumen: async function (val) {
      this.documents.record.id = val.id;
      this.documents.record.name = val.name;
      this.documents.form.show = true;
    },

    uploadFile: function () {
      this.assignFileBrowse({
        fileType: [".pdf"],
        query: {
          doctype: "documents",
        },
        callback: (response) => {
          setTimeout(() => {
            this.documents.record.dok = response.name;
          }, 500);
        },
      });
    },

    postUpdateDokumen: async function () {
      try {
        this.setLoading({ dialog: true, text: "Proses upload dokumen" });
        let {
          data: { status, message },
        } = await this.http.post(
          "api/dosen/document/" + this.documents.record.id + "?_method=PUT",
          this.documents.record
        );
        if (!status) {
          this.snackbar.color = "red";
          this.snackbar.text = message;
          this.snackbar.state = true;
          return;
        }
        this.snackbar.color = this.theme.color;
        this.snackbar.text = message;
        this.snackbar.state = true;
        this.fetchDocuments();
        this.documents.form.show = false;
      } catch (error) {
        this.snackbar.color = "green";
        this.snackbar.text = "Opps..., terjadi kesalahan " + error;
        this.snackbar.state = true;
      } finally {
        this.setLoading({ dialog: false, text: "" });
      }
    },
    openFormInstansi: function () {
      this.instansi.record = {};
      this.instansi.form.show = true;
    },

    postTambahInstansi: async function () {
      try {
        this.setLoading({ dialog: true, text: "Proses tambah instansi" });
        let {
          data: { status, message },
        } = await this.http.post("api/dosen/instansi", this.instansi.record);
        if (!status) {
          this.snackbar.color = "red";
          this.snackbar.text = message;
          this.snackbar.state = true;
          return;
        }
        this.snackbar.color = this.theme.color;
        this.snackbar.text = message;
        this.snackbar.state = true;
        this.instansi.form.show = false;
        this.fetchInstansi();
      } catch (error) {
        this.snackbar.color = "red";
        this.snackbar.text = message;
        this.snackbar.state = true;
      } finally {
        this.setLoading({ dialog: false, text: "" });
      }
    },
  },
};
</script>

<style></style>
