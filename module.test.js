// module.test.js
import mut from "./module.js"; // MUT = Module Under Test

//testing sum
test("Testing sum -- success", () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

//testing div
test("Testing div -- success", () => {
  const expected = 5;
  const got = mut.div(10, 2);
  expect(got).toBe(expected);
});

test("Testing div with negative numbers", () => {
  expect(mut.div(-10, 2)).toBe(-5);
});

test("Testing div by zero returns infinity", () => {
  expect(mut.div(10, 0)).toBe(Infinity);
});

test("Testing div by 1 returns original", () => {
  expect(mut.div(0, 2)).toBe(0);
});

test("Testing div 0 divided by number returns 0", () => {
  expect(mut.div(-10, 2)).toBe(-5);
});

//testing containsNumbers
test("Testing containsNumbers -- success", () => {
  const expected = true;
  const got = mut.containsNumbers("hello123");
  expect(got).toBe(expected);
});

test("Testing containsNumbers only numbers", () => {
  expect(mut.containsNumbers("123")).toBe(true);
});

test("Testing containsNumbers does not containt numbers", () => {
  expect(mut.containsNumbers("hello")).toBe(false);
});

test("Testing containsNumbers string with numbers", () => {
  expect(mut.containsNumbers("helloWorld123")).toBe(true);
});

test("Testing containsNumbers empty", () => {
  expect(mut.containsNumbers(" ")).toBe(false);
});

test("Testing containsNumbers special characters", () => {
  expect(mut.containsNumbers("!@#")).toBe(false);
});
