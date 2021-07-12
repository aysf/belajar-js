/*
* pada materi sebelumnya, kita telah membuat user dengan properti terpisah seperti nama dan email
* namun cara tersebut kurang efektif karena kita harus membuat banyak variable untuk tiap user
* sekarang kita coba membuat variable berupa object untuk tiap user sehingga cukup 1 var untuk 1 user
*/

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