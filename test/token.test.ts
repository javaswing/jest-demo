import { TOKEN_KEY, getToken, setToken } from "../src/token";

const reLocalStore = window.localStorage;

describe("storage test", () => {
  let setItemMock: jest.Mock<any, any, any> | null;
  let getItemMock;

  beforeEach(() => {
    setItemMock = jest.fn();
    getItemMock = jest.fn().mockReturnValue(null);

    Object.defineProperty(window, "localStorage", {
      value: {
        setItem: setItemMock,
        getItem: getItemMock
      },
      writable: true,
    });
  });

  test("getToken Method", () => {
    const v = getToken();
    expect(v).toBeNull();
  });

  test("setToken Method", () => {  
    setToken("name");
    expect(setItemMock).toHaveBeenCalledWith(TOKEN_KEY, "name");
    expect(setItemMock).toHaveBeenCalledTimes(1);
  });

  test("value is empty", () => {   
    setToken();
    expect(setItemMock).not.toHaveBeenCalled();
  });
});
