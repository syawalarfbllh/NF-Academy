// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  // Menampilkan data pelanggan
  tampilkanData() {
    return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa}`;
  }
}

// Class SistemTransportasi
class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  // Tambah pelanggan baru
  tambahPelanggan(nama, nomorTelepon, kendaraanDisewa) {
    const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
    this.daftarPelanggan.push(pelangganBaru);
    console.log(`✅ Transaksi untuk ${nama} telah dicatat.`);
  }

  // Tampilkan semua pelanggan yang menyewa kendaraan
  tampilkanDaftarPelanggan() {
    console.log("\n=== Daftar Pelanggan yang Sedang Menyewa ===");
    if (this.daftarPelanggan.length === 0) {
      console.log("Belum ada pelanggan yang menyewa kendaraan.");
    } else {
      this.daftarPelanggan.forEach((pelanggan, index) => {
        console.log(`${index + 1}. ${pelanggan.tampilkanData()}`);
      });
    }
  }
}

// ================== DEMO PROGRAM ==================

// Membuat sistem transportasi
let sistem = new SistemTransportasi();

// Tambah data pelanggan
sistem.tambahPelanggan("Syawal", "081238273919", "Beat");
sistem.tambahPelanggan("Mamat", "081234567890", "Toyota Avanza");

// Menampilkan daftar pelanggan
sistem.tampilkanDaftarPelanggan();
