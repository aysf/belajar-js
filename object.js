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



console.log(`produk ${tasRanselXyz.nama} yang berwarna ${tasRanselXyz.warna} \
dengan kode produksi ${tasRanselXyz["kode produksi"]} telah dijual dengan harga \
${tasRanselXyz.harga} Rupiah`);

// Destructuring Object
let {nama, isSold} = tasRanselXyz;
console.log("hasil destructuring object");
console.log(nama, isSold);



// Destructuring Assignment
console.log('\nDestructuring Assignment');

let warna = "hitam";
let harga = 125000;

console.log("sebelum dirubah");
console.log(warna, harga);

({warna, harga} = tasRanselXyz);

console.log("setelah re-assign");
console.log(warna, harga);



// Default Values
console.log('\nDefault Values');
const {berat, bahan,  expDate = 'invalid'} = tasRanselXyz;
console.log(berat, bahan, expDate);



// Assigning to different local variable name
console.log('\nAssigning to different local variable name');
const {negaraProdusen: negaraProdusenTas, negaraPengimpor: negaraPengimporTas} = tasRanselXyz;
console.log(negaraPengimporTas, negaraProdusenTas);




