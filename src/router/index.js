import { createRouter, createWebHistory } from "vue-router";
import Pelanggan from "../components/Pelanggan.vue";
import TambahPelanggan from "../components/TambahPelanggan.vue";

const routes = [
  {
    path: "/",
    name: "Pelanggan",
    component: Pelanggan,
  },
  {
    path: "/tambah-pelanggan",
    name: "TambahPelanggan",
    component: TambahPelanggan,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
