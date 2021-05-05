/*
* misal kamu mempunnyai 3 user baru dan membutuhkan variable yang sama untuk ketiga-tiganya
* maka kamu harus membuat seperti ini
*/


/* alternative */
var userOne = {
    email: 'Ryu@ninjas.com',
    name: 'Ryu',
    friend: ['Yusuf'],
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
}

console.log(userOne['name']);

userOne.name = 'Ryo';

console.log(userOne['name']);

console.log(userOne.login);