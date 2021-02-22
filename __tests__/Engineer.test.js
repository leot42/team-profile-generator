const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('testName', 42, 'email@someplace.com', 'githubUser');

    expect(engineer.getName).toBe('testName');
    expect(engineer.getId).toBe(42);
    expect(engineer.getEmail).toEqual(expect.any(String));
    expect(engineer.getGithubUserName).toBe('githubUser');
});