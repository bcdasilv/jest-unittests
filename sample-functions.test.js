const myFunctions = require('./sample-functions.js');

// //Runs before each test case
// beforeEach( () => {

// });

// //Runs after each case
// afterEach( () => {

// });

// //Runs once before all test cases start
// beforeAll( () => {

// });

// //Runs once after all test cases end
// afterAll( () => {

// });

test('Testing sum -- success', () => {
    const target = 30;
    const result = myFunctions.sum(12, 18);
    expect(result).toBe(target);
});

test('all letters and special chars', () => {
    const result = myFunctions.containsNumbers('as;ldk.!@#$[]()+-%^&*');
    expect(result).toBeFalsy();
});

test('lettters and chars and one number in the middle', () => {
    const result = myFunctions.containsNumbers('as;ldk.!@8#$[]()+-%^&*');
    expect(result).toBeTruthy();
});

test('chars and at least one whitespace', () => {
    const result = myFunctions.containsNumbers('as; dk');
    expect(result).toBeFalsy();
});
//See this:
//https://stackoverflow.com/questions/9307603/is-whitespace-equals-to-integer-0-in-javascript


// test('div by zero with infinity', ()=>{
//     expect(myFunctions.div(23, 0)).toBe(Infinity);
// });

test('div by zero with Error thrown', ()=>{
    expect(() => myFunctions.div(23, 0)).toThrow("Div by zero!");
});


// test('Testing div by zero', () => {
//     expect(myFunctions.div(10,0)).toBe(Infinity);
// });