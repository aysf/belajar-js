const employee = 
[
    {name: 'Tommy', exp: 3},
    {name: 'Jemmy', exp: 5},
    {name: 'Hendy', exp: 7}
];


employee.push(
    {name:'Rommy',exp:9}
)

const seniorEmployee = employee.filter((person) => person.exp >= 7 );

console.log(seniorEmployee);