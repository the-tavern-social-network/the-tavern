const getDateWithCreatedAt = (createdAt) => {
    const currentYear = createdAt.slice(2, 4);
    const currentMonth = createdAt.slice(5, 7);
    const currentDay = createdAt.slice(8, 10);
  
    return `${currentDay}/${currentMonth}/${currentYear}`;
  }

  export default getDateWithCreatedAt;