class Employee {
    #name;
    #email;
    #id;

    /**
     * @param {String} name Employee name
     * @param {Number} id ID numer of employee
     * @param {String} email Email address of an employee
     */
    constructor(name, id, email) {
        this.#name = name;
        this.#id = id;
        this.#email = email;
    }

    get getEmail() {
        return this.#email;
    }

    get getId () {
        return this.#id;
    }

    get getName() {
        return this.#name;
    }
}

module.exports = Employee;