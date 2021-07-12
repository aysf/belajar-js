const tasRanselXyz = {
	nama: "Tas Ransel XYZ",
	warna: "merah",
	harga: 230000,
	berat: 560,
	bahan: "katun",
	negaraProdusen: "Jerman",
	negaraPengimpor: "Indonesia",
	"kode produksi": "TR345",
	isSold: true
}


console.log(tasRanselXyz["kode produksi"]);
delete tasRanselXyz["kode produksi"];
console.log(tasRanselXyz["kode produksi"]);