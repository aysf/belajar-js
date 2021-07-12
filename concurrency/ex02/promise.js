const executorFunction = (resolve, reject) =>
{
    const isCoffeeMakerReady = false;
    if (isCoffeeMakerReady)
    {
        resolve ("kopi berhasil dibuat");
    }
    else
    {
        reject ("Mesin kopi tidak bisa digunakan");
    }
}

const makeCoffee = () =>
{
    return new Promise (executorFunction);
}

const coffeePromise = makeCoffee();

console.log(coffeePromise);