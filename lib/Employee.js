class Employee {
    #name;
    #email;
    #id;
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