const Employee = require('./Employee');

class Engineer extends Employee {
    #githubUserName;

    /**
     * @param {String} name Name of Engineer
     * @param {Number} id ID of engineer
     * @param {String} email Email address of engineer
     * @param {String} githubUserName Github username of engineeer
     */
    constructor(name, id, email, githubUserName) {
        super(name, id, email);

        this.#githubUserName = githubUserName;
    }
    
    get getGithubUserName () {
        return this.#githubUserName;
    }
}

module.exports = Engineer;