export const dateConverter = (date: string) => {
  const currentDate = new Date(date);
  // Get the day, month, and year
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  // Format the date as "date-month-year"
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};
