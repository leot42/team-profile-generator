const Employee = require("../lib/Employee");

test('creates an employee object', () => {
    const employee = new Employee('testName', 42, 'email@someplace.com');

    expect(employee.getName).toBe('testName');
    expect(employee.getId).toBe(42);
    expect(employee.getEmail).toEqual(expect.any(String));
});