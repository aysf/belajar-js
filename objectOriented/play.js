/*
* misal kamu mempunnyai 3 user baru dan membutuhkan variable yang sama untuk ketiga-tiganya
* maka kamu harus membuat seperti ini
*/


// create user one
let userOneEmail = 'ananto@email.com';
let userOneName = 'Ananto';
let userOneFriend = ['Yusuf'];

// create user two
let userTwoEmail = 'yusuf@email.com';
let userTwoName = 'yusuf';
let userTwoFriend = ['Wicaksono', 'Ananto'];

// create user three
let userThreeEmail = 'Wicaksono@email.com';
let userThreeName = 'Wicak';
let userThreeFriend = ['Yusuf'];

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