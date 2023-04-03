export const addComma = (num: number) =>
  num
    .toString()
    .split("")
    .reverse()
    .reduce((acc, cur, idx) => acc + ((idx + 1) % 3 ? cur : `,${cur}`), "");
