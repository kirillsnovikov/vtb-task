class CalendarVTB {
  constructor() {
    this.currentDate = new Date()
    // this.date = this.$getCurrentDate(date)
    // this.monthDays = this.$getMonthDays(this.$currentYear)
    // this.currentMonthDays = this.monthDays[this.$currentMonth]
  }

  opts = {
    startYear: 1500,
    endYear: 3000,
    onlyCurrentMonthDates: false,
    firstDayWeek: 'monday',
    monthDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  }

  set currentDate(date) {
    let currentDate = new Date(date)
    if (!date || (currentDate.toString().toLowerCase() === 'invalid date')) {
      currentDate = new Date()
      console.error('Invalid date')
    }

    this.$currentDate = currentDate

    this.$currentDay = currentDate.getDate()
    this.$currentMonth = currentDate.getMonth()
    this.$currentYear = currentDate.getFullYear()
  }

  get currentDate() {
    if (this.$currentDate) {
      return this.$currentDate
    }
    return new Date()
  }

  get monthDays() {
    return this.$getMonthDays(this.$currentYear)
  }

  get currentMonthDays() {
    return this.monthDays[this.$currentMonth]
  }

  increaseMonth() {
    if (this.$currentMonth++ >= 11) {
      this.$currentMonth = 0
      this.increaseYear()
    }
  }

  decreaseMonth() {
    if (this.$currentMonth-- < 0) {
      this.$currentMonth = 11
      this.decreaseYear()
    }
  }

  increaseYear() {
    this.$currentYear++
  }

  decreaseYear() {
    this.$currentYear--
  }


  $getMonthDays(currentYear) {
    if (currentYear % 4 === 0) {
      this.opts.monthDays[1] = 29
      return this.opts.monthDays
    }
    return this.opts.monthDays
  }
}

export const calendar = new CalendarVTB()