console.log("Website CV berhasil terhubung dengan JavaScript!");
// //tampilan console.log 
// console.log("CV Online Siap");
// //Deklarasikan const
// const namaLengkap = "Maria Wea Dela Rosario";
// console.log(namaLengkap);

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

