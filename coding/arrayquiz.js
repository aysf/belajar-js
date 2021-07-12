/*
** buatlah array bilangan genap
** dari 1 sampai 100
*/


let evenNumber = [];
let i = 0;

while (i < 100)
{
    if (i%2 == 0)
    {
        evenNumber.push(i);
    }
    i++;
}

console.log(evenNumber);