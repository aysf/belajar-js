const tasRanselXyz = {
	nama: "Tas Ransel XYZ",
	warna: "merah",
	harga: 230000,
	"kode produksi": "TR345",
	isSold: true
}



console.log(`produk ${tasRanselXyz.nama} yang berwarna ${tasRanselXyz.warna} \
dengan kode produksi ${tasRanselXyz["kode produksi"]} telah dijual dengan harga \
${tasRanselXyz.harga} Rupiah`);
