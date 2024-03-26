<template>
    <div class="modal" v-if="show">
      <div class="modal-content">
        <h2>Konfirmasi Hapus</h2>
        <p>Hapus pelanggan berikut?</p>
        <p><b>{{ customerToDelete.nama }}</b></p>
        <p>{{ customerToDelete.alamat }}</p>
        <div class="button-group">
          <button @click="cancelDelete">Batal</button>
          <button @click="confirmDelete">Hapus</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { store } from '../store';
  
  export default {
    props: {
      show: Boolean,
      customerToDelete: Object
    },
    methods: {
      cancelDelete() {
        this.$emit('cancel');
      },
      confirmDelete() {
        try {
          store.hapusPelanggan(this.customerToDelete);
          this.$emit('deleteConfirmed');
        } catch (error) {
          console.error('Error deleting customer:', error);
        }
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
    text-align: center;
  }
  
  .modal-content h2 {
    margin-bottom: 20px;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .button-group button {
    padding: 8px 20px;
    margin: 0 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }
  
  .button-group button:hover {
    background-color: #45a049;
  }
  @media only screen and (max-width: 600px) {
    .modal-content {
        width: 80%;
    }
}
  </style>
  