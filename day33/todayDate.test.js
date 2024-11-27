// todayDate.test.js
const todayDate = require('./main');

describe('todayDate function', () => {
    test('should return the current date in DD-MM-YYYY format', () => {
        const date = new Date();
        const expectedDay = String(date.getDate()).padStart(2, '0');
        const expectedMonth = String(date.getMonth() + 1).padStart(2, '0');
        const expectedYear = date.getFullYear();

        const expectedDateString = `${expectedDay}-${expectedMonth}-${expectedYear}`;

        expect(todayDate()).toBe(expectedDateString);
    });

    test('should return a string', () => {
        expect(typeof todayDate()).toBe('string');
    });

    test('should have the correct format', () => {
        const result = todayDate();
        expect(result).toMatch(/^\d{2}-\d{2}-\d{4}$/); // Matches DD-MM-YYYY format
    });
});