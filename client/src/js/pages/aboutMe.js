require("../../styles/pages/about.scss");

const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/aboutme.hbs");

class AboutMe extends BasePage {
  constructor(props = {}) {
    super(props);
    this.details = props.details || [
      {
        firstName: "Alice",
        lastName: "Smith",
        address: "Level 7, 202 Collins Street, Carlton, VIC, 3000"
      }
    ];
  }

  template() {
    const context = {
      details: this.details
    };
    return compiledTemplate(context);
  }

  topButtonEvent() {
    this.navigate("/");
  }
}

module.exports = AboutMe;
