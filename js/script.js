console.log("Website CV berhasil terhubung dengan JavaScript!");
document.addEventListener("DOMContentLoaded", function () {

const heading = document.querySelector("h1");
console.log(heading);

const links = document.querySelectorAll("nav a");
console.log("Jumlah tautan:", links.length);
links.forEach((link, index) => {
    console.log(`Link ${index + 1}: ${link.textContent}`);
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector("h1");
    heading.textContent = "Maria Wea Della Rosario";
});

const h2Pertama = document.querySelector("h2");
h2Pertama.classList.add("highlight");

const semuaH2 = document.querySelectorAll("h2");
semuaH2[1].classList.toggle("highlight");

function buatKartu(judul, deskripsi) {

    const kartu = document.createElement("div");
    kartu.classList.add("kartu");

    const h3 = document.createElement("h3");
    h3.textContent = judul;

    const p = document.createElement("p");
    p.textContent = deskripsi;

    kartu.appendChild(h3);
    kartu.appendChild(p);

    return kartu;
}

const main = document.querySelector("main");
const kartuBaru = buatKartu(
    "Statistik Kesehatan",
    "Mampu mengolah data mentah rekam medis menjadi laporan dan informasi statistik yang berguna untuk evaluasi mutu pelayanan dan kebijakan rumah sakit."
);
main.appendChild(kartuBaru);

const dataPendidikan = [
    {
        institusi: "SMP Negeri 1 Kongbeang",
        tahun: "2017 - 2020"
    },
    {
        institusi: "SMK Negeri 1 Muara Wahau",
        tahun: "2020 - 2023"
    },
    {
        institusi: "STIKes Panti Waluya Malang",
        tahun: "2023 - Sekarang"
    },
];

function renderPendidikan() {

    const list = document.querySelector("#list-pendidikan");

    list.innerHTML = "";

    dataPendidikan.forEach(item => {

        const li = document.createElement("li");

        li.textContent = `${item.institusi} (${item.tahun})`;

        list.appendChild(li);

    });
}
renderPendidikan();

dataPendidikan.push({
    institusi: "Bootcamp JavaScript",
    tahun: "2027"
});
renderPendidikan();

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

const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function () {

    nav.classList.toggle("active");

    const isExpanded =
        nav.classList.contains("active");

    hamburger.setAttribute(
        "aria-expanded",
        isExpanded
    );

    hamburger.setAttribute(
        "aria-label",
        isExpanded
            ? "Tutup Menu"
            : "Buka Menu"
    );

});

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target =
            this.getAttribute("href");

        if (target.startsWith("#")) {

            document
                .querySelector(target)
                .scrollIntoView({
                    behavior: "smooth"
                });
        }

    });

});


const semuaKartu = document.querySelectorAll(".kartu");
semuaKartu.forEach(kartu => {

    kartu.addEventListener("mouseover", function () {

        kartu.style.boxShadow =
            "0 8px 20px rgba(0, 0, 0, 0.3)";
    });

    kartu.addEventListener("mouseout", function () {

        kartu.style.boxShadow =
            "0 2px 8px rgba(0, 0, 0, 0.08)";

    });

});

const containerKeahlian = document.querySelector(
    "#keahlian .kartu-container"
);

containerKeahlian.addEventListener("click", function(event) {

    if (event.target.tagName === "H3") {

        console.log(
            "Judul yang diklik:",
            event.target.textContent
        );

    }

});

console.log(
    "DOM berhasil dimuat dan seluruh inisiasi selesai."
);
});
