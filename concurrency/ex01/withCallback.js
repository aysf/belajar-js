const orderCoffee = callback => {
    let coffee = null;
    console.log("sedang membuat kopi, silahkan tunggu...");
    setTimeout(()=>{
        coffee = "kopi sudah jadi";
        callback(coffee);
    },3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});