export const config1 = () => {
  return {
    method: "GET",
    url: "/api",
    time: new Date(),
  };
};

export const config2 = () => {
  return {
    method: "GET",
    url: "/api",
    time: new Date().getTime(),
  };
};
