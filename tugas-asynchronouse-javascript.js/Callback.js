// Fungsi utama
function readBooks(time, book, callback) {
    console.log("Saya membaca " + book.name)
    setTimeout(function () {
        let sisaWaktu = 0
        if (time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            console.log("Saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
            callback(sisaWaktu)
        } else {
            console.log("Waktu saya habis saat membaca " + book.name)
            callback(time)
        }
    }, book.timeSpent)
}

// Daftar buku
const books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
    { name: "Komik", timeSpent: 1000 }
]

// Waktu awal
let time = 10000

// Fungsi untuk membaca semua buku (rekursif)
function bacaBuku(index, sisaWaktu) {
    if (index < books.length && sisaWaktu > 0) {
        readBooks(sisaWaktu, books[index], function (waktuTersisa) {
            bacaBuku(index + 1, waktuTersisa)
        })
    } else {
        console.log("Selesai membaca semua buku atau waktu habis.")
    }
}

// Jalankan program
bacaBuku(0, time)
