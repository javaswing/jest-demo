import { config1, config2 } from "../src/snapshot";

describe("snapshot test", () => {
  test("test config1 method", () => {
    // 使用 toMatchSnapshot 方法生成快照
    // 会在同级目录下生成 `_snapshots_` 目录
    // 快照根据test的描述，生成对应的映射关系
    // 默认情况下：如果返回的值与快照不同，需要更新快照，否则会报错
    // 在本方法中，因为返回的time是每次都不同的，所以设置time的值为任意的date值
    // 还有一个办法就是，在每次执行后都更新快照 jest --updateSnapshot
    expect(config1()).toMatchSnapshot({
      time: expect.any(Date),
    });
  });

  // 行内快照
  // toMatchInlineSnapshot 方法，将执行快照放到行内中，会放到 toMatchInlineSnapshot 方法中
  test("inline snapshot", () => {
    expect(config2()).toMatchInlineSnapshot(
      {
        time: expect.any(Number),
      },
      `
      {
        "method": "GET",
        "time": Any<Number>,
        "url": "/api",
      }
      `
    );
  });
});
