export const formatDateToISO = (date: string) => {
  const d = new Date(date);
  return d.toISOString().split(".")[0] + "Z";
};
