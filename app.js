const dayTimer = document.querySelector('span[data-value="days"]');
const hourTimer = document.querySelector('span[data-value="hours"]');
const minTimer = document.querySelector('span[data-value="mins"]');
const secTimer = document.querySelector('span[data-value="secs"]');

class Timer {
  constructor(finishDate, markup) {
    this.markup = markup;
    this.finishDate = finishDate;
    this.interval = null;
    this.deltaTime = null;
  }

  start() {
    this.interval = setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.finishDate - currentTime;

      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
      
      const hours = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );

      const mins = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      );

      const sec = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
      this.insertValues(days, hours, mins, sec);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  insertValues(days, hours, minutes, seconds) {
    const { dayTimer, hourTimer, minTimer, secTimer } = this.markup;
    dayTimer.textContent = days;
    hourTimer.textContent = hours;
    minTimer.textContent = minutes;
    secTimer.textContent = seconds;
  }
}

const myTimer = new Timer(new Date('march 27, 2022'), {
  dayTimer,
  hourTimer,
  minTimer,
  secTimer,
});

myTimer.start();