const express = require('express');
const app = express();


//1: Lingkaran & Tabung

app.get('/lingkaran-tabung/:jari/:tinggi', (req, res) => {
  const jari = parseFloat(req.params.jari);
  const tinggi = parseFloat(req.params.tinggi);

  const luasLingkaran = Math.PI * jari * jari;
  const kelilingLingkaran = 2 * Math.PI * jari;
  const volumeTabung = luasLingkaran * tinggi;

  res.send(
    `jari-Jari: ${jari}, tinggi: ${tinggi}, volume tabung: ${volumeTabung.toFixed(
      2
    )}, luas alas tabung: ${luasLingkaran.toFixed(
      2
    )}, keliling alas tabung: ${kelilingLingkaran.toFixed(2)}`
  );
});


//check link http://localhost:3000/lingkaran-tabung/7/10





// 2 

let dataOrang = [
  { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
  { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
  { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
  { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
  { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" }
];



app.get('/data-orang', (req, res) => {
  const umurParam = parseInt(req.query.umur);
  const genderParam = req.query.gender;

  let hasilFilter = dataOrang;

  if (!isNaN(umurParam)) {
    hasilFilter = hasilFilter.filter((orang) => orang.umur >= umurParam);
  }

  if (genderParam) {
    hasilFilter = hasilFilter.filter(
      (orang) => orang.jenisKelamin.toLowerCase() === genderParam.toLowerCase()
    );
  }

  if (hasilFilter.length === 0) {
    return res.send("Tidak ada data yang sesuai dengan parameter yang diberikan.");
  }

  let hasilText = hasilFilter
    .map(
      (orang, index) =>
        `${index + 1}. ${orang.name} - Pekerjaan: ${orang.pekerjaan} - Umur: ${orang.umur} Tahun`
    )
    .join("<br>");

  res.send(hasilText);
});


//check link http://localhost:3000/data-orang



// 3

app.get('/data-orang/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const orang = dataOrang.find((o) => o.id === id);

  if (!orang) {
    return res.send("Maaf data tidak ditemukan");
  }

  const panggilan = orang.jenisKelamin === "L" ? "Pak" : "Bu";

  res.send(`${panggilan} ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`);
});


//check link http://localhost:3000/data-orang/1


app.listen(3000, () => {
  console.log('Server berjalan di node');
});


//pada soal nomor 2 menampilkan semua data didalam Let, sedangkan pada soal nomor 3, hanya menampilkan salah satu data saja yakni data id=1
