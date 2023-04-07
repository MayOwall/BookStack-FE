export const addComma = (num: number) =>
  num
    .toString()
    .split("")
    .reverse()
    .map((v, idx) => (!idx || idx % 3 ? v : v + ","))
    .reverse()
    .join("");

// Date객체에서 0000.00.00 형식의 string으로 바꿔주는 훅
export const dateFormatter = (date: Date) =>
  `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
