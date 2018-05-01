const HomePage = require("./pages/homePage");
const ContactsPage = require("./pages/contactsPage");
const SecondContactsPage = require("./pages/secondContactsPage");
const TeamPage = require("./pages/teamPage");
const FourOhFour = require("./pages/404Page");
const AboutMe = require("./pages/aboutMe");
const Alert = require("./pages/alert");

module.exports = {
  "/": HomePage,
  contacts: ContactsPage,
  secondcontacts: SecondContactsPage,
  team: TeamPage,
  "404": FourOhFour,
  about: AboutMe
};
