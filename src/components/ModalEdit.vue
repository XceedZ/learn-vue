<template>
    <div class="modal" v-if="show">
        <div class="modal-content">
            <h2>Edit Pelanggan</h2>
            <div class="form-group">
                <label for="editNama">Nama:</label>
                <input type="text" id="editNama" v-model="editedPelanggan.nama" readonly
                    :class="{ 'disabled-input': true }">
            </div>
            <div class="form-group">
                <label for="editAlamat">Alamat:</label>
                <input type="text" id="editAlamat" v-model="editedPelanggan.alamat">
            </div>
            <div class="form-group">
                <label for="editLimitKredit">Limit Kredit:</label>
                <div class="input-group">
                    <span class="currency">Rp</span>
                    <input type="number" id="editLimitKredit" v-model="editedPelanggan.limitKredit" placeholder="0">
                </div>
            </div>
            <div class="button-group">
                <button @click="cancelEdit">Batal</button>
                <button @click="saveEdit">Simpan</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
        editedPelanggan: Object
    },
    methods: {
        cancelEdit() {
            this.$emit('cancel');
        },
        saveEdit() {
            this.$emit('save');
        }
    }
};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 500px;
}

.modal-content h2 {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 3px;
    transition: border-color 0.3s;
}

.form-group input:focus {
    border-color: transparent;
    outline: none;
}

.input-group {
    display: flex;
}

.input-group .currency {
    padding: 8px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-right: none;
    border-radius: 3px 0 0 3px;
}

.input-group input {
    flex: 1;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 0 3px 3px 0;
}

.button-group {
    display: flex;
    justify-content: flex-end;
}

.button-group button {
    padding: 8px 20px;
    margin-left: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 3px;
}

.button-group button:hover {
    background-color: #45a049;
}

.disabled-input {
    background-color: #f2f2f2;
    color: #999;
    cursor: not-allowed;
}
@media only screen and (max-width: 600px) {
    .modal-content {
        width: 80%;
    }
}
</style>
