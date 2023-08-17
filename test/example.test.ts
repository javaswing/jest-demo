test("test toBe matcher", () => {
  const a = { name: "javaswing" };
  // to be 使用进行比较 Object.is
  // @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  expect(a.name).toBe("javaswing"); // fail
});

test("test toEqual matcher", () => {
  const a = { name: "javaswing" };
  // 递归深度比较每个属性值
  expect(a).toEqual({ name: "javaswing" });
});

// 判断值是否为null
test("should toBeNull", () => {
  const a = null;
  expect(a).toBeNull();
});

test("should toBeUndefined", () => {
  let a;
  expect(a).toBeUndefined();
});

test("should toBeDefined", () => {
  const a = "javaswing";
  expect(a).toBeDefined();
});

/**
 * 判断是否为真值，自动转换类型
 */
test("should toBeTruthy", () => {
  const b = 1;
  expect(b).toBeTruthy();
});

test("should toBeFalsy", () => {
  const a = 0;
  expect(a).toBeFalsy();
});

//  not 修饰符，取反值
test("should not toBeFalsy", () => {
  const a = 1;
  expect(a).not.toBeFalsy();
});

// 大于值
test("should be toBeGreaterThan", () => {
  const a = 1;
  expect(a).toBeGreaterThan(0);
});

// 大于等于
test("should be toBeGreaterThanOrEqual", () => {
  const a = 1;
  expect(a).toBeGreaterThanOrEqual(1);
});

// 小于值
test("should toBeLessThan", () => {
  const a = 2;
  expect(a).toBeLessThan(3);
});

test("should toBeCloseTo", () => {
  // 浮点型相加时，趋近于某个值
  const a = 0.1;
  const b = 0.2;
  expect(a + b).toBeCloseTo(0.3);
});

test("should toMatch", () => {
  const name = "java swing";
  expect(name).toMatch("java");
});

test("should toContain", () => {
  const a = ["java", "javascript", "c#"];
  expect(a).toContain("java");
});

const error = () => {
  throw new Error("error");
};
test("should toThrow", () => {
  expect(error).toThrow();
});
