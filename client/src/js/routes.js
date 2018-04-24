const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const SecondaryContactsPage = require('./pages/secondaryContactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'secondarycontacts': SecondaryContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
};
