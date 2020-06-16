export const getDate = () => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDay();

  month = month < 10 ? (month = '0' + month) : month;
  day = day < 10 ? (day = '0' + day) : day;

  return { year, month, day };
};
