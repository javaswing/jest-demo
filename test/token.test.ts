import { TOKEN_KEY, getToken, setToken } from "../src/token";

describe("storage test", () => {

  

  test("getToken Method", () => {
    const v = getToken();
    expect(v).toBeNull();
  });

  test("setToken Method", () => {
    let setItemMock = jest.fn();

    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: setItemMock
      }
    })

    setToken("name");

    expect(setItemMock).toHaveBeenCalledWith(TOKEN_KEY, "name")
    expect(setItemMock).toHaveBeenCalledTimes(1);
  });
});
