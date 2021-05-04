/* membuat class mail */

// cara 1 

function Mail() {
    this.from = 'pengirim@email.com';
};

Mail.prototype.sendMessage = function n(msg, to){
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

const mailsatu = new Mail();
mailsatu.sendMessage('dear madam/sir, hereby..', 'hrd@mail.com');
