require("../../styles/pages/home.scss");

const BasePage = require("watch-framework").BasePage;
const logo = require("../../images/logo.png");
const date = new Date(Date.now()).toLocaleString().split(",")[0];
const time = new Date(Date.now()).toLocaleString().split(",")[1];
const compiledTemplate = require("../../templates/homePage.hbs");

class HomePage extends BasePage {
  template() {
    const context = {
      date: date,
      time: time,
      logo: logo
    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    this.navigate('contacts');
  }

  rightButtonEvent() {
    this.navigate("about");
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = HomePage;
