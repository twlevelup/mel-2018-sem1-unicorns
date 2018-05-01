const HomePage = require("./pages/homePage");
const ContactsPage = require("./pages/contactsPage");
const SecondContactsPage = require("./pages/secondContactsPage");
const TeamPage = require("./pages/teamPage");
const FourOhFour = require("./pages/404Page");
const AboutMe = require("./pages/aboutMe");
const Alert = require("./pages/alert");

module.exports = {
<<<<<<< HEAD
  '/': HomePage,
  'contacts': ContactsPage,
  'secondarycontacts': SecondaryContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'about': AboutMe,
  'alert': Alert
}
=======
  "/": HomePage,
  contacts: ContactsPage,
  secondcontacts: SecondContactsPage,
  team: TeamPage,
  "404": FourOhFour,
  about: AboutMe
};
>>>>>>> [Hannah/Kathy][#1] Make contacts page scrollable to allow for long names and add and update tests
