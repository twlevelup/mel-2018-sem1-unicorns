require("../../styles/pages/contacts.scss");

const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/secondContactsPage.hbs");

class SecondContactsPage extends BasePage {
  constructor(props = {}) {
    super(props);
    this.contacts = props.contacts || [
      {
        position: "Primary Contact",
        name: "Doctor Alex Collins",
        description: "Doctor",
        phoneNumber: "0431 111 111"
      }
    ];
  }

  template() {
    const context = {
      contacts: this.contacts
    };
    return compiledTemplate(context);
  }

  topButtonEvent() {
    this.navigate("/");
  }

  bottomButtonEvent() {
    this.navigate("contacts");
  }
}

module.exports = SecondContactsPage;
