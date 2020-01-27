const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('Should return a greeting string', () => {
  const result = generateGreeting('Cesar');

  expect(result).toBe('Hello Cesar!');
});

test('Should generate greeting for no name', () => {
  const result = generateGreeting();

  expect(result).toBe('Hello Anonymous!');
});
