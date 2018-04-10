const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/alerts.hbs");

class Alert extends BasePage {
  constructor(props = {}) {
    super(props);
    this.alert = props.alert || [
      { subject: "Take your medicine", time: "10am" },
      { subject: "Call your doctor", time: "12pm" },
      { subject: "Go to lunch with your daughter", time: "1pm" }
    ];
  }

  template() {
    const context = {
      alert: this.alert
    };
    return compiledTemplate(context);
  }
}

module.exports = Alert;
