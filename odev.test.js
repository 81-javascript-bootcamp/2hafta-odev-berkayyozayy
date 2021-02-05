const { test, expect } = require('@jest/globals')
const isValidName = require('./odev')
// Test Cases
// console.log(isValidName("Ahmet") === true);
// console.log(isValidName(false) === false);
// console.log(isValidName(null) === false);
// console.log(isValidName(undefined) === false);
// console.log(isValidName("") === false);
// console.log(isValidName("  \t\n") === false);
// console.log(isValidName("X") === false);

test('Valid string ?', () => {
    expect(
        isValidName('string')
    ).toBe(true)
})

test('Check falsy statement?', () => {
    expect(
        isValidName(false)
    ).toBe(false)
})

test('Check for null input ?', () => {
    expect(
        isValidName(null)
    ).toBe(false)
})

test('Check for input undefined ?', () => {
    expect(
        isValidName(undefined)
    ).toBe(false)
})

test('Check for input empty string ?', () => {
    expect(
        isValidName(' ')
    ).toBe(false)
})

test('Check for tab and newline characters ?', () => {
    expect(
        isValidName('  \t\n')
    ).toBe(false)
})

test('Check for single character?', () => {
    expect(
        isValidName('X')
    ).toBe(false)
})