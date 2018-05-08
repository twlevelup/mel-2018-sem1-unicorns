require("../../styles/pages/home.scss");

const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/homePage.hbs");

const time = new Date(Date.now()).toLocaleString().split(",")[1];
const am_pm = time.split(" ")[2];
const curr_hour = time.split(":")[0];
const curr_min = time.split(":")[1];

const date = new Date(Date.now()).toLocaleString().split(",")[0];

const d_names = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);
const m_names = new Array(
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
  "December"
);

const d = new Date(date);
const curr_day = d.getDay();
const curr_date = d.getDate();
const curr_month = d.getMonth();
const curr_year = d.getFullYear();

class HomePage extends BasePage {
  template() {
    const context = {
      date:
        d_names[curr_day] +
        " " +
        curr_date +
        " " +
        m_names[curr_month] +
        " " +
        curr_year,
      time: curr_hour + ":" + curr_min + " " + am_pm
    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    this.navigate("contacts");
  }

  rightButtonEvent() {
    this.navigate("about");
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = HomePage;
