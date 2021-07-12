// Destructuring Array

const favFood = ['yogurth', 'pancake', 'ricebox', 'milk', 'satay', 'tempeh', 'meatball'];
const [makananPembuka, sarapan, makanSiang, minuman, makanMalam, cemilan, menuTambahan] = favFood;
console.log(makanMalam, makananPembuka);


console.log('\n')
/*
** Destructuring Assignment **
** dapat digunakan untuk re-assignment variabel
** dan untuk swap nilai
*/

coef1 = 20.4;
coef2 = 20.1;
coef3 = 20.6;
console.log(`nilai awal: ${coef1}, ${coef2}, ${coef3}`)
let coef = [23.4, 31.4, 32.9];
// re-assign value of the variable with destructuring array
[coef1, coef2, coef3] = coef;
console.log(`nilai sesudah re-assign: ${coef1}, ${coef2}, ${coef3}`)


console.log('\n')
/*
** Default values
*/

let biodata = ["Anton", "male"];
const [nama, jenisKelamin, umur = 'unknown'] = biodata
console.log(nama, jenisKelamin, umur)