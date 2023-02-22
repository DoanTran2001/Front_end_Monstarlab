export const dateInfo = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`
}
export const filterDate = (date) => {
  const nowDate = new Date();
  if (dateInfo(nowDate) === dateInfo(date)) {
    return true
  }
  return false
}