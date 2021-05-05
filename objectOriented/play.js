class Animal
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        this.isMammal = true;
    }
}

class Rabbit extends Animal
{
    eat()
    {
        return `"${this.name} sedang makan!"`;
    }
}

class Eagle extends Animal
{
    constructor(name,age)
    {
        super(name,age);
        this.isMammal = false;
    }
    fly()
    {
        return `"${this.name} sedang terbang!"`;
    }
}

let myRabbit = new Rabbit("Labi", 2);
let myEagle = new Eagle("Elo", 4);

console.log(myEagle.fly());
console.log(myRabbit.eat());