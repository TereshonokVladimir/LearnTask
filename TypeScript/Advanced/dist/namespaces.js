"use strict";
class MyForm {
    constructor(email) {
        this.email = email;
        this.type = 'inline';
        this.state = 'active';
    }
    getInfo() {
        return {
            type: this.type,
            state: this.state
        };
    }
}
const myForm = new MyForm('v@gmail.com');
console.log(myForm);
