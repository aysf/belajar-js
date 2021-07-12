const orderCoffee = () => {
    let coffee = null;
    console.log("sedang membuat kopi, silahkan tunggu...");
    setTimeout(()=>{
        coffee = "kopi sudah jadi";
    },3000);
    return coffee
}

const coffee = orderCoffee();
console.log(coffee);

