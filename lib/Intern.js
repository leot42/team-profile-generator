const Employee = require('./Employee');

class Intern extends Employee {
    #school;

    /**
     * @param {String} name Intern name
     * @param {Number} id Intern Id number
     * @param {String} email Intern email address
     * @param {String} school Intern school name
     */
    constructor(name, id, email, school) {
        super(name, id, email);
        this.#school = school;
    }

    get getSchool() {
        return this.#school;
    }
}

module.exports = Intern;