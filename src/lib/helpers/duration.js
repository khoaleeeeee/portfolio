const get = (startDate, endDate) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [startMonth, startYear] = startDate.split(" ");
  const startDateObj = new Date(startYear, monthNames.indexOf(startMonth));

  let endDateObj;
  if (endDate === "Present") {
    endDateObj = new Date();
  } else {
    const [endMonth, endYear] = endDate.split(" ");
    endDateObj = new Date(endYear, monthNames.indexOf(endMonth));
  }

  const yearsDiff = endDateObj.getFullYear() - startDateObj.getFullYear();
  const monthsDiff = endDateObj.getMonth() - startDateObj.getMonth();
  const totalMonths = yearsDiff * 12 + monthsDiff;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years < 1) return `${months} months`;
  return `${years} years and ${months} months`;
};

export default { get }
