export const addComma = (num: number) =>
  num
    .toString()
    .split("")
    .reverse()
    .map((v, idx) => (!idx || idx % 3 ? v : v + ","))
    .reverse()
    .join("");
