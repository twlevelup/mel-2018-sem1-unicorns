const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/contactsPage.hbs')

class SecondaryContactsPage extends BasePage {

  constructor(props = {}) {
    super(props);
    this.contacts = props.contacts || [
      { position: 'Secondary Contact', name: 'Jamie', description: 'Brother',phoneNumber: '0432 111 111' },
    ];
  }

  template() {
    const context = {
      contacts: this.contacts,
    };
    return compiledTemplate(context);
  }

  topButtonEvent() {
    this.navigate('/');
  }
  
  bottomButtonEvent(){
    this.navigate('contacts')
  }
}

module.exports = SecondaryContactsPage;

