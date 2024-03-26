import { reactive } from "vue";

const pelangganList = [
  { id: 0, nama: "Alexander Agung", alamat: "Jl. Harmonia", limitKredit: 1000000 },
  { id: 1, nama: "Vianka Shainna", alamat: "Jl. Bahagia", limitKredit: 2000000 },
  { id: 2, nama: "Ardian Yusuf", alamat: "Jl. Damai", limitKredit: 1500000 },
  { id: 3, nama: "Yusuf Ricky", alamat: "Jl. Harmoni", limitKredit: 1800000 },
  { id: 4, nama: "Rafif Naufal", alamat: "Jl. Mutiara ", limitKredit: 2200000 }
];

export const store = reactive({
  pelangganList: pelangganList,

  addCustomer(pelanggan) {
    this.pelangganList.push(pelanggan); 
  },

  editPelanggan(id, editedPelanggan) {
    const index = this.pelangganList.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pelangganList[index] = { ...this.pelangganList[index], ...editedPelanggan };
    }
  },

  hapusPelanggan(customer) {
    const index = this.pelangganList.findIndex(p => p.id === customer.id);
    if (index !== -1) {
      this.pelangganList.splice(index, 1);
    }
  }
});
