export const formatDate = (date: Date | string): string => {
  const dateCopy = new Date(date);

  const month = dateCopy.getMonth() + 1;
  const day = dateCopy.getDate();
  const year = dateCopy.getFullYear();

  return `${month}/${day}/${year}`;
};
