<template>
  <div class="add-customer-container">
    <h2>Tambah Pelanggan Baru</h2>
    <form @submit.prevent="addCustomer">
      <div class="form-group">
        <label for="nama">Nama Pelanggan</label>
        <input id="nama" v-model="newCustomer.nama" type="text" required>
      </div>
      <div class="form-group">
        <label for="alamat">Alamat</label>
        <input id="alamat" v-model="newCustomer.alamat" type="text" required class="alamat-input">
      </div>
      <div class="form-group">
        <label for="limitKredit">Limit Kredit</label>
        <div class="input-group">
          <span class="currency">Rp</span>
          <input id="limitKredit" v-model="newCustomer.limitKredit" type="number" placeholder="0" required>
        </div>
      </div>
      <div class="button-group">
        <button type="button" @click="cancel">Batal</button>
        <button type="submit">Tambah</button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

export default {
  setup() {
    const router = useRouter();
    const newCustomer = reactive({
      nama: "",
      alamat: "",
      limitKredit: "",
    });

    const addCustomer = () => {
      store.pelangganList.push({ ...newCustomer });

      router.push('/');
    };

    const cancel = () => {
      router.push('/');
    };

    return { newCustomer, addCustomer, cancel };
  },
};
</script>

<style scoped>
.add-customer-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
}

.add-customer-container h2 {
  margin-bottom: 20px;
}

.add-customer-container form .form-group {
  margin-bottom: 20px;
}

.add-customer-container form .form-group label {
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
}

.add-customer-container form .form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.add-customer-container form .alamat-input {
  height: 100px;
}

.add-customer-container form .input-group {
  display: flex;
}

.add-customer-container form .input-group .currency {
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-right: none;
}

.add-customer-container form .button-group {
  display: flex;
  justify-content: space-between;
}

.add-customer-container form button {
  padding: 8px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.add-customer-container form button:hover {
  background-color: #45a049;
}
</style>
