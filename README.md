# belajar-js

## Creating and Use Variable in JavaScript

Membuat variable `let` (dapat dirubah nilainya) dan `const` (nilainya tidak dapat dirubah/_re-assign_ setelah inisialisasi)

```js
let umur = 24;
const jenisKelamin = "pria";
// untuk menampilkan variabel pada konsol/terminal
console.log(umur);
console.log(jenisKelamin);
// untuk mengetahui jenis variable
console.log(typeof umur);
console.log(typeof jenisKelamin);
```
Untuk menjalankan `node var.js` di terminal.

## Data Type

### Data Structure

#### Array

Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel

```js
let myArray = [1, "dua", 2.5, 3, true];
// menampilkan semua nilai array
console.log(myArray);
// menampilkan salah satu nilai array
console.log(myArray[1]);
// push() untuk menambahkan data pada array
myArray.push('four');
console.log(myArray);
```


#### Object

Object adalah tipe data yang berisi _property_ berupa pasangan _key_ dan _value_. Syntax untuk menulis object dapat dilihat pada kode berikut:
```js
let object = {key1: "value1", key2: "value2"}
```
contoh penggunaan object dalam spesifikasi suatu produk
```js
const tasRanselXyz = {
    nama: "Tas Ransel XYZ",
    warna: "merah",
    harga: 230000,
    "kode produksi": "TR345",
    isSold: true
}
```
dapat dilihat pada contoh diatas, _key_ dibuat dengan menggunakan string tanpa tanda kutip kecuali yang memiliki karakter khusus. Sedangkan _value_ berisi nilai dengan tipe data apapun termasuk object lain.

Untuk dapat memanggil object yang telah dibuat dapat menggunakan perintah berikut

```js
console.log(`produk ${tasRanselXyz.nama} yang berwarna ${tasRanselXyz.warna} dengan kode produksi
${tasRanselXyz["kode produksi"]} telah dijual dengan harga ${tasRanselXyz.harga} Rupiah`)
```

demo program dapat dijalankan dengan `node object.js` yang terdapat pada repository ini.