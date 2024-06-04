const formatDateString = (inputDate: string): string => {
  const [year, month, day]: number[] = inputDate.split("-").map(Number);
  const date: Date = new Date(Date.UTC(year, month - 1, day));
  const isoString: string = date.toISOString();
  return isoString.substring(0, 19) + "Z";
};

export default formatDateString;
