const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/contactsPage.hbs");

class ContactsPage extends BasePage {
  constructor(props = {}) {
    super(props);
    this.contacts = props.contacts || [

      { position: 'Primary Contact', name: 'Alex', description: 'Doctor', phoneNumber: '0431 111 111' },
    ];
  }

  template() {
    const context = {
      contacts: this.contacts
    };
    return compiledTemplate(context);
  }


  bottomButtonEvent() {
    this.navigate('secondarycontacts');
  }
  
  topButtonEvent(){
    this.navigate('/')
  }
}

module.exports = ContactsPage;
