export const getId = () => {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const randomString = [];
    for (let i = 0; i < 2; i++) {
        randomString.push(letters[Math.floor(Math.random() * letters.length)])
    }
    for (let j = 0; j < 4; j++) {
        randomString.push(numbers[Math.floor(Math.random() * numbers.length)])
    }
    return randomString.join('').toUpperCase()
}
