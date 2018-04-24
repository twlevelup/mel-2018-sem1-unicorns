const HomePage = require("./pages/homePage");
const ContactsPage = require("./pages/contactsPage");
const TeamPage = require("./pages/teamPage");
const FourOhFour = require("./pages/404Page");
const AboutMe = require("./pages/aboutMe");

module.exports = {
  "/": HomePage,
  contacts: ContactsPage,
  team: TeamPage,
  "404": FourOhFour,
  about: AboutMe
};
