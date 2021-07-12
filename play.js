let firstName = "Ananto"

const tasRanselXyz = {
    nama: "Tas Ransel XYZ",
    warna: "merah",
    harga: 230000,
    "kode produksi": "TR345",
    isSold: true
}

tasRanselXyz.harga = 214000

delete tasRanselXyz["kode produksi"]

console.log(tasRanselXyz)