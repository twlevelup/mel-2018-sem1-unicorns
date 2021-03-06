require("../../styles/pages/contacts.scss");

const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/contactsPage.hbs");

class ContactsPage extends BasePage {
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

  bottomButtonEvent() {
    // if (this.name.length > 10) {
    //   this.watchFace.scrollTop += 40;
    // } else {
    this.navigate("secondcontacts");
    // }
  }

  topButtonEvent() {
    this.navigate("/");
  }
}

module.exports = ContactsPage;
