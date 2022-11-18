import Vue from "vue";
import VueRouter from "vue-router";
import BaseFrontend from "../views/frontend/Base.vue";
import Auth from "../providers/AuthProviders";

//page halaman depan
import Home from "../views/frontend/Home.vue";
import Lokasi from "../views/frontend/Lokasi.vue";
import Hotel from "../views/frontend/Hotel.vue";
import Wisata from "../views/frontend/Wisata.vue";
import Media from "../views/frontend/Media.vue";
import Login from "../views/frontend/Login.vue";
import Registrasi from "../views/frontend/Registrasi.vue";
import RegisterSuccessed from "../views/frontend/RegisterSuccessed.vue";
//import Register from "../views/auth/Register.vue";

//BASE APLIKASI
import Base from "../views/backend/Base.vue";

//Dashboard Page
import Dashboard from "../views/backend/pages/Dashboard.vue";

//Utiity Group Page
import User from "../views/backend/pages/utility/user/Index.vue";
import Changepwd from "../views/backend/pages/utility/user/Changepwd.vue";
import ProfilAkun from "../views/backend/pages/utility/user/Profil.vue";
import UtilityManajemenFitur from "../views/backend/pages/utility/manajemenfitur/Index.vue";
import UtilitymanajemenFiturAdministrator from "../views/backend/pages/utility/manajemenfitur/administrator/Index.vue";
import UtilityUpdateHistory from "../views/backend/pages/utility/updatehistory/Index.vue";
import UtilityUpdateHistoryItem from "../views/backend/pages/utility/updatehistory/items/Index.vue";

//page master data
import MasterAppInfo from "../views/backend/pages/masterdata/appinfo/Index.vue";
import MasterProvince from "../views/backend/pages/masterdata/province/Index.vue";
import MasterRegency from "../views/backend/pages/masterdata/regency/Index.vue";
import MasterLokasi from "../views/backend/pages/masterdata/lokasi/Index.vue";
import MasterHotel from "../views/backend/pages/masterdata/hotel/Index.vue";
import MasterWisata from "../views/backend/pages/masterdata/wisata/Index.vue";
import MasterSlider from "../views/backend/pages/halamandepan/sliders/Index.vue";
import MasterLo from "../views/backend/pages/masterdata/lo/Index.vue";

///page event
import EventPeserta from "../views/backend/pages/event/peserta/Index.vue";
import EventPesertaIo from "../views/backend/pages/event/peserta/io/Index.vue";
import EventScanBarcode from "../views/backend/pages/event/presensi/ScanBarcode.vue";
import EventPresensi from "../views/backend/pages/event/presensi/Index.vue";

//page peserta
import PesertaDashboard from "../views/backend/pages/peserta/Dashboard.vue";
import PesertaEtiket from "../views/backend/pages/peserta/Etiket.vue";

//Halaman Depan
import HalamanDepanFoto from "../views/backend/pages/halamandepan/foto/Index.vue";
import HalamanDepanVideo from "../views/backend/pages/halamandepan/video/Index.vue";
import HalamanDepanDocument from "../views/backend/pages/halamandepan/document/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "",
    component: BaseFrontend,
    children: [
      { path: "", redirect: { name: "home" } },
      { path: "home", name: "home", component: Home },
      { path: "lokasi", name: "lokasi", component: Lokasi },
      { path: "hotel", name: "hotel", component: Hotel },
      { path: "wisata", name: "wisata", component: Wisata },
      { path: "media", name: "media", component: Media },
      { path: "login", name: "login", component: Login },
      { path: "registrasi", name: "registrasi", component: Registrasi },

      {
        path: "registrasi-berhasil/:uuid",
        name: "registrasi-berhasil",
        component: RegisterSuccessed,
      },
    ],
  },

  /**
   * Route Backend
   */

  {
    path: "/backend",
    name: "",
    meta: {
      auth: true,
    },
    component: Base,
    children: [
      { path: "", redirect: { name: "dashboard" } },
      { path: "dashboard", name: "dashboard", component: Dashboard },
      { path: "user", name: "user", component: User },
      {
        path: "chngpwd",
        name: "chngpwd",
        component: Changepwd,
      },
      {
        path: "profil-akun",
        name: "profil-akun",
        component: ProfilAkun,
      },
      //route master data
      {
        path: "master-app-info",
        name: "master-app-info",
        component: MasterAppInfo,
      },
      {
        path: "master-province",
        name: "master-province",
        component: MasterProvince,
      },
      {
        path: "master-regency/:province_id",
        name: "master-regency",
        component: MasterRegency,
      },
      //Route Master Lokasi
      {
        path: "master-lokasi",
        name: "master-lokasi",
        component: MasterLokasi,
      },
      //Route Master Hotel
      {
        path: "master-hotel",
        name: "master-hotel",
        component: MasterHotel,
      },
      //Route Master Hotel
      {
        path: "master-wisata",
        name: "master-wisata",
        component: MasterWisata,
      },
      //Route Master Hotel
      {
        path: "master-lo",
        name: "master-lo",
        component: MasterLo,
      },

      //Route Halaman Depan
      {
        path: "master-slider",
        name: "master-slider",
        component: MasterSlider,
      },
      {
        path: "halaman-depan-foto",
        name: "halaman-depan-foto",
        component: HalamanDepanFoto,
      },
      {
        path: "halaman-depan-video",
        name: "halaman-depan-video",
        component: HalamanDepanVideo,
      },
      {
        path: "halaman-depan-document",
        name: "halaman-depan-document",
        component: HalamanDepanDocument,
      },

      //Route Event
      {
        path: "event-peserta",
        name: "event-peserta",
        component: EventPeserta,
      },
      {
        path: "event-peserta-eo",
        name: "event-peserta-eo",
        component: EventPesertaIo,
      },
      {
        path: "event-scan-barcode",
        name: "event-scan-barcode",
        component: EventScanBarcode,
      },
      {
        path: "event-presensi",
        name: "event-presensi",
        component: EventPresensi,
      },

      //Route Peserta
      {
        path: "peserta-dashboard",
        name: "peserta-dashboard",
        component: PesertaDashboard,
      },
      {
        path: "peserta-etiket",
        name: "peserta-etiket",
        component: PesertaEtiket,
      },
      /**
       * Route Utility
       */
      {
        path: "utility-manajemen-fitur-administrator",
        name: "utility-manajemen-fitur-administrator",
        component: UtilitymanajemenFiturAdministrator,
      },
      {
        path: "utility-manajemen-fitur",
        name: "utility-manajemen-fitur",
        component: UtilityManajemenFitur,
      },
      {
        path: "utility-update-history",
        name: "utility-update-history",
        component: UtilityUpdateHistory,
      },
      {
        path: "utility-update-history-items/:update_history_id",
        name: "utility-update-history-items",
        component: UtilityUpdateHistoryItem,
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  mode: "history",
});

/**
 * router match
 */

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth);

  if (requiresAuth) {
    if (!Auth.check) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    if (to.name === "login" && Auth.check) {
      if (Auth.user.authent == "peserta") {
        next({ name: "peserta-dashboard" });
      } else if (Auth.user.auth === "io") {
        next({ name: "dashboard" });
      } else {
        next({ name: "dashboard" });
      }
    } else {
      next();
    }
  }
});

export default router;
