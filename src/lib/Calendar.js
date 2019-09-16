class CalendarVTB {
  constructor(date) {
    this.currentDate = this.$getCurrentDate(date)
    this.monthDays = this.$getMonthDays(this.$currentYear)
  }

  opts = {
    startYear: 1500,
    endYear: 3000,
    onlyCurrentMonthDates: false,
    firstDayWeek: 'monday',
    monthDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  }

  set year(year) {
    this.$year = new Date(year, 0, 1, 0, 0, 0, 0)
  }

  get year() {
    return this.$year
  }

  $getCurrentDate(date) {
    let currentDate = new Date(date)
    if (!date || (currentDate.toString().toLowerCase() === 'invalid date')) {
      currentDate = new Date()
    }

    this.$currentDay = currentDate.getDate()
    this.$currentMonth = currentDate.getMonth()
    this.$currentYear = currentDate.getFullYear()
    // console.log(this.$currentDay,this.$currentMonth,this.$currentYear)
    return currentDate
  }

  $getMonthDays(currentYear) {
    if (currentYear % 4 === 0) {
      this.opts.monthDays[1] = 29
      return this.opts.monthDays
    }
    return this.opts.monthDays
  }
}

export const calendar = new CalendarVTB('2020-02-10T11:15:46.455Z')