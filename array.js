let myArray = [1, "dua", 2.5, 3, true];
// menampilkan semua elemen array
console.log(`\nnilai array seluruhnya: ${myArray}\n`);
// menampilkan salah satu elemen array
console.log(`nilai array ke-3 adalah ${myArray[3]}\n`);
// push() dan unshift() untuk menambahkan data pada elemen terakhir dan pertama
myArray.push('four');
myArray.unshift(0);
console.log(`nilai array setelah di push: ${myArray}`);
console.log(`nilai array setelah di unshift: ${myArray}\n`);
// pop() dan shift() untuk membuang data pada elemen terakhir dan pertama
arrayPop = myArray.pop();
arrayShift = myArray.shift();
console.log(`nilai array setelah di pop: ${myArray}`);
console.log(`nilai array yang dikeluarkan pop: ${arrayPop}`);
console.log(`nilai array yang dikeluarkan shift: ${arrayShift}\n`);
// delete dan splice() digunakan untuk menghapus element
delete myArray[1];
console.log(`array setelah di delete: ${myArray}`);
myArray.splice(2,1);
console.log(`array setelah di splice: ${myArray}\n`);
