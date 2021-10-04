const myFunctions = require('./sample-functions.js');

test('Testing sum -- success', () => {
    const target = 30;
    const result = myFunctions.sum(12, 18);
    expect(target).toBe(result);
});

test('desc', () => {

});




// test('Testing div by zero', () => {
//     expect(myFunctions.div(10,0)).toBe(Infinity);
// });

// test('Testing div by zero', () => {
//     expect(() => myFunctions.div(10,0)).toThrow(/Div by zero not supported/);
// });