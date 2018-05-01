const ContactsPage = require("../../src/js/pages/contactsPage");

describe("ContactsPage", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should have a template", () => {
      const page = new ContactsPage();
      expect(page.template()).toContain("<h3>Primary Contact</h3>");
    });

    it("should have a template with specific contacts", () => {
      const contacts = [{ name: "hi", phoneNumber: "1234" }];
      const props = { contacts };
      const page = new ContactsPage(props);
      expect(page.template()).toContain("<h1>hi</h1>");
      expect(page.template()).toContain("<h2>1234</h2>");
    });
  });

  describe("#topButtonEvent", () => {
    it("goes to root page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new ContactsPage(props);
      spyOn(page, "navigate");

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("/");
    });
  });

  describe("#bottomButtonEvent", () => {
    it("goes to the second contacts page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new ContactsPage(props);
      spyOn(page, "navigate");

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("secondcontacts");
    });
  });
});
