const Employee = require('./Employee');

class Intern extends Employee {
    #school;

    constructor(name, id, email, school) {
        super(name, id, email);
        this.#school = school;
    }

    get getSchool() {
        return this.#school;
    }
}

module.exports = Intern;