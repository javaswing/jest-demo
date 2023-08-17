import { sleep, timer } from "../src/sleep";

describe("faker time test", () => {
    beforeAll(() => {
        // 启用fakeTimers
        jest.useFakeTimers();
    })


    test("test timer function",  () => {
        const callback = jest.fn();

        timer(callback);

        expect(callback).not.toHaveBeenCalled();

        // runAllTimers方法，可以让代码中的定时器立即执行
        jest.runAllTimers();

        expect(callback).toHaveBeenCalledTimes(1)
    })

    test("after 1s execute", async () => {

        const act = async(callback: () => void) => {
            await sleep(1000);
            callback();
        }

        const fn = jest.fn();
        const p = act(fn);
        expect(fn).not.toHaveBeenCalled();

        // 此时仅执行的sleep中的setTimeout函数，并不会执行fn
        jest.runAllTimers();

        // 执行 所有promise resolve函数
        await p;

        expect(fn).toHaveBeenCalledTimes(1)
    })
})