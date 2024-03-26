<template>
    <div class="pelanggan">
        <div class="search">
            <i class="pi pi-search search-icon" style="color: #4caf50"></i>
            <input type="text" v-model="searchQuery" placeholder="Cari pelanggan...">
        </div>

        <div class="header">
            <h2>Daftar Pelanggan</h2>
            <i class="fa-solid fa-plus plus-icon" style="cursor: pointer;" @click="tambahPelanggan"></i>
            <button class="tambah" @click="tambahPelanggan">Tambah Baru</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Aksi</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Limit Kredit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pelanggan, index) in filteredPelanggan" :key="index">
                    <td>
                        <i class="pi pi-delete-left" style="color: #4caf50; margin-right: 10px; cursor: pointer;"
                            @click="prepareDelete(pelanggan.id)"></i>
                        <i class="pi pi-user-edit" style="color: #4caf50; cursor: pointer;"
                            @click="editPelanggan(pelanggan.id)"></i>
                    </td>
                    <td>{{ pelanggan.nama }}</td>
                    <td>{{ pelanggan.alamat }}</td>
                    <td>{{ formatLimitKredit(pelanggan.limitKredit) }}</td>
                </tr>
            </tbody>
        </table>

        <ModalEdit :show="showModal" :editedPelanggan="editedPelanggan" @cancel="cancelEdit" @save="saveEdit" />
        <ModalHapus :show="showDeleteModal" :customerToDelete="customerToDelete" @cancel="cancelDelete"
            @confirmDelete="confirmDelete" @deleteConfirmed="showDeleteModal = false" />

    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';
import ModalEdit from './ModalEdit.vue';
import ModalHapus from './ModalHapus.vue';

export default {
    components: {
        ModalEdit,
        ModalHapus,
    },
    setup() {
        const router = useRouter();
        const searchQuery = ref('');
        const showModal = ref(false);
        const editedPelanggan = ref({});
        const showDeleteModal = ref(false);
        const customerToDelete = ref(null);

        const filteredPelanggan = computed(() => {
            return store.pelangganList.filter(pelanggan =>
                pelanggan.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                pelanggan.alamat.toLowerCase().includes(searchQuery.value.toLowerCase())
            );
        });

        const tambahPelanggan = () => {
            router.push('/tambah-pelanggan');
        };

        const editPelanggan = (id) => {
            const pelanggan = store.pelangganList.find(p => p.id === id);
            editedPelanggan.value = { ...pelanggan };
            showModal.value = true;
        };

        const cancelEdit = () => {
            showModal.value = false;
        };

        const saveEdit = () => {
            store.editPelanggan(editedPelanggan.value.id, editedPelanggan.value);
            showModal.value = false;
        };

        const prepareDelete = (id) => {
            customerToDelete.value = store.pelangganList.find(p => p.id === id);
            showDeleteModal.value = true;
        };

        const cancelDelete = () => {
            showDeleteModal.value = false;
        };

        const confirmDelete = () => {
            if (customerToDelete.value) {
                store.hapusPelanggan(customerToDelete.value.id);
                customerToDelete.value = null;
                showDeleteModal.value = false;
            }
        };

        const formatLimitKredit = (limitKredit) => {
            return "Rp " + limitKredit.toLocaleString('id-ID');
        };

        return {
            searchQuery,
            filteredPelanggan,
            tambahPelanggan,
            editPelanggan,
            cancelEdit,
            saveEdit,
            formatLimitKredit,
            showModal,
            editedPelanggan,
            showDeleteModal,
            customerToDelete,
            prepareDelete,
            cancelDelete,
            confirmDelete
        };
    },
};
</script>

<style scoped>
.pelanggan {
    max-width: 800px;
    margin: 0 auto;

}

.plus-icon {
    display: none;
}

.judul {
    margin-bottom: 20px;
}

.search {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
}

.search-input {
    border: none;
    padding: 10px;
    font-size: 16px;
}

.search-icon {
    justify-self: center;
    margin: 0 10px;
}

.header {
    display: flex;
    justify-content: space-between;
}

h2 {
    margin-right: 20px;
    text-align: left;

}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

input[type='text'],
input[type='text']:focus {
    height: 20px;
    padding: 8px;
    border: 0;
    outline: none;
}


button {
    margin-bottom: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

.tambah {
    font-size: 14px;
    width: 100px;
    height: 50px;
}

button:hover {
    background-color: #45a049;
}

@media only screen and (max-width: 600px) {
    .pelanggan {
        font-size: 80%;
    }

    .tambah {
        display: none;
    }

    .plus-icon {
        position: fixed;
        right: 20px;
        bottom: 20px;
        color: white;
        font-size: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #45a049;
        width: 60px;
        height: 60px;
        box-shadow: 0px 2px 4px rgba(0, 0, 1, 0.5);
    }
}
</style>