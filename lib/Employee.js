// TODO: Write code to define and export the Employee class
// const thisThing = require("../app")


class Employee {
    constructor(name, id, email) {
        this.name = name;

        this.email = email;
        this.id = id;


    }
    getName() {
        return (this.name)
    }

    getRole() {
        return ("Employee")
    }
    getEmail() {
        return (this.email)
    }
    getId() {
        return (this.id)
    }

};




module.exports = Employee