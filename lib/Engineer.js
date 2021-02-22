const Employee = require('./Employee');

class Engineer extends Employee {
    #githubUserName;
    constructor(name, id, email, githubUserName) {
        super(name, id, email);

        this.#githubUserName = githubUserName;
    }
    get getGithubUserName () {
        return this.#githubUserName;
    }
}

module.exports = Engineer;