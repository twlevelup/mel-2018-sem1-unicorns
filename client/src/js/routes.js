
const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const SecondaryContactsPage = require('./pages/secondaryContactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const AboutMe = require("./pages/aboutMe");
const Alert = require("./pages/alert");

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'secondarycontacts': SecondaryContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'about': AboutMe,
  'alert': Alert
}
