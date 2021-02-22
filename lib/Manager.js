const Employee = require('./Employee');

class Manager extends Employee {

    #officeNumber;

    /**
     * @param {String} name Manager name
     * @param {Number} id Manager Id
     * @param {String} email Manager email address
     * @param {Number} officeNumber Manager office number
     */
    constructor( name, id, email, officeNumber) {
        super(name, id, email);

        this.#officeNumber = officeNumber;
    }

    get getOfficeNumber() {
        return this.#officeNumber;
    }
}

module.exports = Manager;