const { add, subtract, multiply, divide } = require("./app.js");

  test("add 1, 4, 5, 2, 3 to equal 15 ", () => {
    expect(add(1, 4, 5, 2, 3)).toBe(15);
  });
  
  test("substract 10, 2, 4, 0, 0 to equal 4 ", () => {
    expect(subtract(10, 2, 4, 0, 0)).toBe(4);
  });
  
  test("multiply 3, 5, 8, 1, 1 to equal 120 ", () => {
    expect(multiply(3, 5, 8, 1, 1)).toBe(120);
  });
  
  test("divide 100, 5, 2, 1, 1 to equal 10 ", () => {
    expect(divide(100, 5, 2, 1, 1)).toBe(10);
  });