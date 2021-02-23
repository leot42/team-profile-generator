const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('testName', 42, 'email@someplace.com', 'Ridgemont High');

    expect(intern.getName).toBe('testName');
    expect(intern.getId).toEqual(42);
    expect(intern.getEmail).toEqual(expect.any(String));
    expect(intern.getSchool).toEqual('Ridgemont High');
});
