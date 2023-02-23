function resetDate(date) {
  date.setHours(0, 0, 0, 0)
  return date
}
export const compareDate = (date) => {
  const nowDate = new Date();
  resetDate(nowDate);
  return (nowDate.getTime() === resetDate(date).getTime())
};
export const removeAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .trim()
    .toLowerCase();
};
