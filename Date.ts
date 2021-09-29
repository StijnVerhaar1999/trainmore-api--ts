const getUpcommingDates = (): string[] => {
    let dates: string[] = [];
    let today = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    const daysForward: number = 8
  
    var x: number;
    for (x = 0; x < daysForward; x++) {
        
      let nextDay = new Date(today);
  
      nextDay.setDate(today.getDate() + x);
  
      let yyyy = nextDay.getFullYear();
      let mm: number | string = nextDay.getMonth() + 1;
      let dd: number | string = nextDay.getDate();
  
      if (dd < 10) {
       dd = dd.toString().padStart(2, '0');
    }
  
      if (mm < 10) {
        mm = mm.toString().padStart(2, '0');
      }
  
      let fullDate = `${dd}-${mm}-${yyyy}`;
      dates.push(fullDate);
    }
    return dates;
  };

  export default getUpcommingDates