const elemenDasar = ["api", "air", "bumi", "udara"];
console.log(elemenDasar);
console.log(elemenDasar[0], elemenDasar[1], elemenDasar[2], elemenDasar[3]);
console.log(...elemenDasar);

const elemenLanjut = ["thunder", "ice", "metal", "strom"];
console.log("menggabungkan array tanpa spread");
const elemenGabung1 = [elemenDasar, elemenLanjut];
console.log(elemenGabung1);
let elemenGabung2 = [...elemenDasar, ...elemenLanjut];
console.log(elemenGabung2);
