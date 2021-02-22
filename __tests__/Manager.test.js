const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('testName', 42, 'email@someplace.com', 3);

    expect(manager.getName).toBe('testName');
    expect(manager.getId).toBe(42);
    expect(manager.getEmail).toBe('email@someplace.com');
    expect(manager.getOfficeNumber).toEqual(3);


});