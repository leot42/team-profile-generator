class Employee {
    constructor(name, id , email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    get email() {
        return this.email;
    }

    get id () {
        return this.email;
    }

    get name() {
        return this;
    }
}