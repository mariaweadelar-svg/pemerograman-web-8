console.log("Website CV berhasil terhubung dengan JavaScript!");
//tampilan console.log 
console.log("CV Online Siap");
//Deklarasikan const
const namaLengkap = "Maria Wea Dela Rosario";
console.log(namaLengkap);
//Deklarasi let
let tahunMasuk = 2023;
console.log("Tahun masuk awal:", tahunMasuk);
tahunMasuk = 2026;
console.log("Tahun setelah diubah:", tahunMasuk);
//Membuat tiga variabel
let jurusan = "Manajemen Informasi Kesehatan";
let semester = 6;
let statusAktif = true;

console.log(typeof jurusan);
console.log(typeof semester);
console.log(typeof statusAktif);
//fungsi sapa penggunjung
function sapaPengunjung() {
    console.log("Selamat datang di CV saya!");
}
sapaPengunjung();
//Buat fungsi hitungUmur
function hitungUmur(tahunLahir) {
    return new Date().getFullYear() - tahunLahir;
}
console.log(hitungUmur(2004));
//Array
let skills = [
    "Pengelolaan Rekam Medis",
    "Koding ICD-10 dan ICD-9-CM",
    "Microsoft Office"
];
console.log(skills[1]);
// Tambahkan satu keahlian baru
skills.push("Analisis Data Kesehatan");
console.log("Jumlah skills:", skills.length);
console.log("Skills terbaru:", skills);