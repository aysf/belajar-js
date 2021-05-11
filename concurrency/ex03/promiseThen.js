// const stock = {
//     coffeeBean: 250,
//     water: 1000
// }

// const checkStock = new Promise
// (
//     (resolve, reject) => 
//         {
//             if (stock.coffeeBean >= 16 && stock.water >= 250)
//             {
//                 resolve("stock cukup. Bisa membuat kopi");
//             }
//             else
//             {
//                 reject("stok tidak cukup");
//             }
//         }
// );

// const handleSuccess = resolvedValue => {console.log(resolvedValue);}

// const handleFailure = rejectionReason => {console.log(rejectionReason);}

// checkStock().then(handleSuccess, handleFailure);

// ------------------------------------------------------------------------ //

// kode baru
const stock = {
    coffeeBeans: 250,
    water: 122,
}
 

//kode salah
// const checkStock = new Promise((resolve, reject) => {
//     if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//         resolve("Stok cukup. Bisa membuat kopi");
//     } else {
//         reject("Stok tidak cukup");
//     }
// });

//revisi
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};
 
const success = resolved => {
    console.log(resolved);
}
 
const failure = rejectionReason => {
    console.log(rejectionReason);
}
 
checkStock().then(success, failure);